import React from 'react';
import { View, Text, Image } from 'react-native';

export function CartaoProduto() {
  return (
    // TODO: adicionar style={styles.card}
    <View style={styles.card}>

      {/* ── Wrapper da imagem (precisa ser 'relative' para o badge funcionar) ── */}
      {/* TODO: adicionar style={styles.imagemWrapper} */}
      {/* position: 'relative' é o PADRÃO — mas colocamos explícito para lembrar */}
      <View style={styles.imagemWrapper}>

        {/* Imagem do produto */}
        {/* TODO: adicionar style={styles.imagem} */}
        <Image
          source={{ uri: 'https://picsum.photos/seed/produto/400/200' }}
        style={styles.imagem}
        />

        {/* Badge PROMOÇÃO — fica no canto superior direito */}
        {/* TODO: adicionar style={styles.badge} */}
        {/*
          position: 'absolute' → sai do fluxo do Flexbox
          top: 8, right: 8    → distância das bordas do pai
          zIndex: 10          → fica na frente de tudo
        */}
        <View style={styles.badge}>
          {/* TODO: adicionar style={styles.badgeTexto} */}
          <Text style={styles.badgeTexto}>PROMOÇÃO</Text>
        </View>

      </View>

      {/* ── Informações do produto ───────────────────────── */}
      {/* TODO: adicionar style={styles.info} */}
      <View style={styles.info}>

        {/* TODO: adicionar style={styles.nomeProduto} */}
        <Text style={styles.nomeProduto}>Tênis Esportivo Pro</Text>

        {/* ── Linha de preço + botão lado a lado ─────────── */}
        {/* TODO: adicionar style={styles.rodape} */}
        {/* Queremos: flexDirection row, space-between, alignItems center */}
        <View style={styles.rodape}>

          {/* TODO: adicionar style={styles.preco} */}
          <Text style={styles.preco}>R$ 199,90</Text>

          {/* TODO: adicionar style={styles.botaoCarrinho} */}
          <View style={styles.botaoCarrinho}>
            {/* TODO: adicionar style={styles.botaoCarrinhoTexto} */}
            <Text style={styles.botaoCarrinhoTexto}>+ Carrinho</Text>
          </View>

        </View>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1A1D2E",
    borderRadius: 12,
    margin: 16,
    overflow: 'hidden',

    // Sombra Android
    elevation: 5,

    // Sombra IOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4

  },
  imagemWrapper: {
    position: 'relative'
  },
  imagem: {
    width: '100%',
    height: 160
  },
  badge: {
    position: 'absolute',
    backgroundColor: "#F49E0B",
    top: 8,
    right: 8,
    zIndex: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10
  },
  badgeTexto: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 10
  },
  info: {
    padding: 12
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8
  },
  rodape: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  preco: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#10b981"
  },
  botaoCarrinho: {
    backgroundColor: "#7C3AED",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6
  },
  botaoCarrinhoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13
  },
});
