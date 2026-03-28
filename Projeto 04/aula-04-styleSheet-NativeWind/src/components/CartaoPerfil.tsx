import React from 'react';
import { View, Text, Image } from 'react-native';

export function CartaoPerfil() {
  return (
    // TODO: adicionar style={styles.card}
    // Queremos: fundo escuro, cantos arredondados, padding, sombra
    <View style={styles.card}>

      {/* ── Linha do topo: foto + nome/cargo ────────────────── */}
      {/* TODO: adicionar style={styles.header} */}
      {/* Queremos: flexDirection row, alignItems center */}
      <View style={styles.card}>

        {/* Foto — precisa ser circular */}
        {/* TODO: adicionar style={styles.foto} */}
        {/* borderRadius: 30 = metade de width/height (60) = círculo */}
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
        style={styles.foto}
        />

        {/* Bloco de texto ao lado da foto */}
        {/* TODO: adicionar style={styles.infoTexto} */}
        {/* flex: 1 faz ele ocupar o espaço que sobrou */}
        <View style={styles.infoTexto}>

          {/* TODO: adicionar style={styles.nome} */}
          <Text style={styles.nome}>Ana Silva</Text>

          {/* TODO: adicionar style={styles.cargo} */}
          <Text style={styles.cargo}>Dev React Native</Text>

        </View>
      </View>

      {/* ── Bio ─────────────────────────────────────────────── */}
      {/* TODO: adicionar style={styles.bio} */}
      <Text style={styles.bio}>Apaixonada por mobile e UI bonita ✨</Text>

      {/* ── Botão ───────────────────────────────────────────── */}
      {/* TODO: adicionar style={styles.botao} */}
      {/* alignItems: 'center' centraliza o texto dentro do botão */}
      <View style={styles.botao}>
        {/* TODO: adicionar style={styles.botaoTexto} */}
        <Text style={styles.botaoTexto}>Ver Perfil</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1A1D2E",
    borderRadius: 16,
    padding: 20,
    margin: 16,

    // Sombras IOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,

    // Sombra Android
    elevation: 8
  },
  header: {
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 12
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 12
  },
  infoTexto: {
    flex: 1,
    // gap: 2
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff"
  },
  cargo: {
    fontSize: 13,
    color: "#a78bfa",
    marginTop: 2
  },
  bio: {
    fontSize: 14,
    color: "#9ca3af",
    marginBottom: 16
  },
  botao: {
    backgroundColor: "#7C3AED",
    borderRadius: 8,
    padding: 12,
    alignItems: 'center'
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  },

});
