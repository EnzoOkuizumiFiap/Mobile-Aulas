import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function BotaoAcao() {
  return (
    // TODO: adicionar style={styles.container}
    // Queremos: padding 24, alignItems center
    <View style={styles.container}>

      {/* Título da seção */}
      {/* TODO: adicionar style={styles.titulo} */}
      <Text style={styles.titulo}>Pronto para começar?</Text>

      {/* Subtítulo */}
      {/* TODO: adicionar style={styles.subtitulo} */}
      <Text style={styles.subtitulo}>Crie seu primeiro app estilizado</Text>

      {/* ── Botão principal ─────────────────────────────── */}
      {/* TouchableOpacity: igual ao View, mas responde ao toque */}
      {/* TODO: adicionar style={styles.botao} */}
      <TouchableOpacity style={styles.botao} onPress={() => console.log('Botão pressionado!')}>

        {/* TODO: adicionar style={styles.botaoTexto} */}
        <Text style={styles.botaoTexto}>Criar Meu App ✨</Text>

      </TouchableOpacity>

      {/* ── Botão secundário (outline) ──────────────────── */}
      {/* Demonstra: backgroundColor transparente + borda */}
      {/* TODO: adicionar style={styles.botaoSecundario} */}
      <TouchableOpacity style={styles.botaoSecundario} onPress={() => console.log('Saiba mais!')}>

        {/* TODO: adicionar style={styles.botaoSecundarioTexto} */}
        <Text style={styles.botaoSecundarioTexto}>Saiba mais</Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center"
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#020101",
    marginBottom: 8,
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 24,
    textAlign: 'center'
  },
  botao: {
    backgroundColor: "#7C3AED",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 50,
    marginBottom: 12
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 16
  },
  botaoSecundario: {
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#7C3AED'
  },
  botaoSecundarioTexto: {
    color: "#7C3AED",
    fontWeight: 'bold',
    fontSize: 16
  },
});

