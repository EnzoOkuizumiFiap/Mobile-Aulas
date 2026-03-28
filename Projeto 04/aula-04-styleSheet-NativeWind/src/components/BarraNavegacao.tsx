import React from 'react';
import { View, Text } from 'react-native';

export function BarraNavegacao() {
  return (
    // TODO: adicionar style={styles.container}
    // Queremos: flexDirection row, space-between, padding 16
    <View style={styles.container}>

      {/* Logo — lado esquerdo */}
      {/* TODO: adicionar style={styles.logo} */}
      <Text style={styles.logo}>🏠 MeuApp</Text>

      {/* Grupo de botões — lado direito */}
      {/* TODO: adicionar style={styles.grupoBotoes} */}
      {/* Queremos: flexDirection row, gap 12 */}
      <View style={styles.grupoBotoes}>

        {/* TODO: adicionar style={styles.botao} */}
        <Text style={styles.botao}>Buscar</Text>

        {/* TODO: adicionar style={styles.botao} */}
        <Text style={styles.botao}>Perfil</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyCOntent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1A1D2E",
  },
  logo: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  grupoBotoes: {
    flexDirection: "row",
    gap: 12
  },
  botao: {
    fontSize: 12,
    color: "#a78bfa",
  },
});
