import axios from "axios";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// ============================================================
// CRUD USANDO AXIOS
// ============================================================
// API pública de testes: https://jsonplaceholder.typicode.com
//
// Pontos importantes do AXIOS (compare com src/fetch/index.tsx):
//  1. Faz o parse do JSON automaticamente  -> usamos response.data
//  2. Serializa o body automaticamente     -> passamos o objeto direto
//  3. Seta Content-Type: application/json automaticamente
//  4. Lança erro em status 4xx/5xx         -> o try/catch pega
//  5. Permite criar uma "instance" com baseURL e headers reaproveitáveis
//  6. Suporta interceptors, timeout nativo, cancelamento etc.
// ============================================================

// Instance reaproveitável. Toda chamada feita por "api" já leva a baseURL.
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Content-Type": "application/json" },
});

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function AxiosExample() {
  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<string>("");

  // -------- GET: listar todos os usuários --------
  async function buscar() {
    try {
      setStatus("GET /users ...");
      // axios devolve { data, status, headers, config, ... }
      // o JSON já vem parseado dentro de response.data
      const response = await api.get<User[]>("/users");
      setUsers(response.data);
      setStatus(`GET OK (${response.status}) - ${response.data.length} usuários`);
    } catch (error) {
      setStatus(`Erro no GET: ${error}`);
    }
  }

  // -------- POST: criar um novo usuário --------
  async function criar() {
    try {
      setStatus("POST /users ...");
      // Basta passar o objeto -- axios faz JSON.stringify por baixo dos panos
      const novo = {
        name: "Novo Aluno",
        username: "aluno_fiap",
        email: "aluno@fiap.com.br",
      };
      const response = await api.post<User>("/users", novo);
      // JSONPlaceholder finge criar e devolve o recurso com um id novo (11)
      setStatus(`POST OK (${response.status}) - id criado: ${response.data.id}`);
      setUsers((prev) => [response.data, ...prev]);
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
      const response = await api.put<User>(`/users/${id}`, dados);
      setStatus(`PUT OK (${response.status}) - atualizado id ${id}`);
      setUsers((prev) =>
        prev.map((u) => (u.id === id ? { ...u, ...response.data } : u))
      );
    } catch (error) {
      setStatus(`Erro no PUT: ${error}`);
    }
  }

  // -------- DELETE: remover um usuário --------
  async function deletar(id: number) {
    try {
      setStatus(`DELETE /users/${id} ...`);
      const response = await api.delete(`/users/${id}`);
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
      <Text style={styles.title}>AXIOS</Text>
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
  title: { fontSize: 24, fontWeight: "bold", color: "#5A2CA0" },
  status: { fontFamily: "Courier", color: "#333", minHeight: 18 },
  row: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  btn: {
    backgroundColor: "#5A2CA0",
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
