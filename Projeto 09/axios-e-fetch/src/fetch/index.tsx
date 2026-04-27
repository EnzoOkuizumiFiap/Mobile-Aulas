import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// ============================================================
// CRUD USANDO FETCH (API nativa do JavaScript)
// ============================================================
// API pública de testes: https://jsonplaceholder.typicode.com
//
// Pontos importantes do FETCH (compare com src/axios/index.tsx):
//  1. NÃO faz parse do JSON automaticamente  -> precisamos de await response.json()
//  2. NÃO serializa o body automaticamente   -> precisamos de JSON.stringify(obj)
//  3. NÃO seta Content-Type sozinho          -> precisamos passar no headers
//  4. NÃO lança erro em status 4xx/5xx       -> precisamos checar response.ok
//  5. NÃO tem baseURL                        -> concatenamos a string manualmente
//  6. Não tem interceptors nem timeout nativo (precisa AbortController)
//
// Em contrapartida: fetch é nativo, não precisa instalar nada.
// ============================================================

// Como fetch não tem baseURL, guardamos a URL em uma constante
const API_URL = "https://jsonplaceholder.typicode.com";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function FetchExample() {
  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<string>("");

  // -------- GET: listar todos os usuários --------
  async function buscar() {
    try {
      setStatus("GET /users ...");
      // fetch devolve um Response -- precisamos chamar .json() pra ler o body
      const response = await fetch(`${API_URL}/users`);
      // ATENÇÃO: fetch NÃO lança erro em 4xx/5xx, precisamos checar na mão
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: User[] = await response.json();
      setUsers(data);
      setStatus(`GET OK (${response.status}) - ${data.length} usuários`);
    } catch (error) {
      setStatus(`Erro no GET: ${error}`);
    }
  }

  // -------- POST: criar um novo usuário --------
  async function criar() {
    try {
      setStatus("POST /users ...");
      const novo = {
        name: "Novo Aluno",
        username: "aluno_fiap",
        email: "aluno@fiap.com.br",
      };
      // Precisamos: method, headers (Content-Type) e body (JSON.stringify)
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novo),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: User = await response.json();
      setStatus(`POST OK (${response.status}) - id criado: ${data.id}`);
      setUsers((prev) => [data, ...prev]);
    } catch (error) {
      setStatus(`Erro no POST: ${error}`);
    }
  }

  // -------- PUT: atualizar um usuário --------
  async function atualizar(id: number) {
    try {
      setStatus(`PUT /users/${id} ...`);
      const dados = {
        name: "Nome Atualizado",
        username: "user_updated",
        email: "updated@fiap.com.br",
      };
      const response = await fetch(`${API_URL}/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: User = await response.json();
      setStatus(`PUT OK (${response.status}) - atualizado id ${id}`);
      setUsers((prev) =>
        prev.map((u) => (u.id === id ? { ...u, ...data } : u))
      );
    } catch (error) {
      setStatus(`Erro no PUT: ${error}`);
    }
  }

  // -------- DELETE: remover um usuário --------
  async function deletar(id: number) {
    try {
      setStatus(`DELETE /users/${id} ...`);
      const response = await fetch(`${API_URL}/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus(`DELETE OK (${response.status}) - removido id ${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (error) {
      setStatus(`Erro no DELETE: ${error}`);
    }
  }

  // Busca inicial assim que o componente monta
  useEffect(() => {
    buscar();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>FETCH</Text>
      <Text style={styles.status}>{status}</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={buscar}>
          <Text style={styles.btnText}>GET</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.btnCreate]}
          onPress={criar}
        >
          <Text style={styles.btnText}>POST</Text>
        </TouchableOpacity>
      </View>

      {users.map((user) => (
        <View key={user.id} style={styles.card}>
          <Text style={styles.name}>
            #{user.id} - {user.name}
          </Text>
          <Text style={styles.sub}>@{user.username}</Text>
          <Text style={styles.sub}>{user.email}</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.btn, styles.btnUpdate]}
              onPress={() => atualizar(user.id)}
            >
              <Text style={styles.btnText}>PUT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.btnDelete]}
              onPress={() => deletar(user.id)}
            >
              <Text style={styles.btnText}>DELETE</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingTop: 50, gap: 10 },
  title: { fontSize: 24, fontWeight: "bold", color: "#1565C0" },
  status: { fontFamily: "Courier", color: "#333", minHeight: 18 },
  row: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  btn: {
    backgroundColor: "#1565C0",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  btnCreate: { backgroundColor: "#2E7D32" },
  btnUpdate: { backgroundColor: "#F9A825" },
  btnDelete: { backgroundColor: "#C62828" },
  btnText: { color: "white", fontWeight: "bold" },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
    gap: 4,
  },
  name: { fontWeight: "bold", fontSize: 16 },
  sub: { color: "#555" },
});
