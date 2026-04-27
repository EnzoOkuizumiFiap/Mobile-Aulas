// =====================================================================
// EXERCÍCIO 01 · Card com fade + slide
//
// OBJETIVO
// Quando o usuário tocar no botão "Mostrar card", o card deve aparecer
// na tela com DUAS animações simultâneas:
//
//   1. Fade in: opacidade vai de 0 → 1, usando withTiming, em 600ms.
//   2. Slide up: translateY vai de 30 → 0, usando withSpring.
//
// O resultado deve ser um card que "sobe e aparece" suavemente.
//
// PASSOS
//   - Crie 2 shared values (opacity, translateY)
//   - Crie um animated style que use ambos
//   - Implemente a função showCard que dispara as duas animações
//   - Aplique o animated style na <Animated.View> do card
//
// DICAS
//   - opacity começa em 0, deve ir para 1
//   - translateY começa em 30, deve ir para 0
//   - withTiming(target, { duration: 600 })
//   - withSpring(target) — pode usar o padrão sem options
//
// Quando terminar, compare com a solução em:
//   src/exercises/01-FadeInCard.solution.tsx
//
// (Mas TENTE primeiro! É o exercício mais valioso da aula.)
// =====================================================================

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";

export default function FadeInCard() {
  // ---------------------------------------------------------------
  // TODO 1: criar os shared values
  //
  // Você precisa de DOIS shared values:
  //   - opacity, começando em 0
  //   - translateY, começando em 30
  //
  // Descomente as linhas abaixo e complete:
  // ---------------------------------------------------------------

  // const opacity = useSharedValue(/* valor inicial aqui */);
  // const translateY = useSharedValue(/* valor inicial aqui */);


  // ---------------------------------------------------------------
  // TODO 2: criar o animated style
  //
  // Crie um animatedStyle que retorne um objeto com:
  //   - opacity: opacity.value
  //   - transform: [{ translateY: translateY.value }]
  //
  // Lembre: useAnimatedStyle recebe uma FUNÇÃO que retorna o estilo.
  // ---------------------------------------------------------------

  // const animatedStyle = useAnimatedStyle(() => ({
  //   /* preencha aqui */
  // }));


  // ---------------------------------------------------------------
  // TODO 3: implementar o handler showCard
  //
  // Quando o botão for pressionado:
  //   - opacity.value deve ir para 1, com withTiming, duration: 600
  //   - translateY.value deve ir para 0, com withSpring
  // ---------------------------------------------------------------

  const showCard = () => {
    // opacity.value = withTiming(/* destino */, { duration: /* ms */ });
    // translateY.value = withSpring(/* destino */);
  };

  // Bônus opcional: implemente uma função hideCard que faz o inverso.
  // Use: opacity → 0 com withTiming(0, { duration: 400 })
  //      translateY → 30 com withSpring


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Card com fade + slide</Text>

      <Text style={styles.body}>
        Toque em "Mostrar card" para ver o resultado da sua animação.
      </Text>

      {/* Área onde o card vai aparecer */}
      <View style={styles.cardArea}>
        {/*
          IMPORTANTE: descomente a aplicação do animatedStyle abaixo
          DEPOIS de implementar o TODO 2.
          Por enquanto o card aparece estático.
        */}
        <Animated.View
          style={[
            styles.card,
            // animatedStyle, // ← descomente quando implementar o TODO 2
          ]}
        >
          <Text style={styles.cardTitle}>Olá!</Text>
          <Text style={styles.cardBody}>
            Sou um card que entra na tela com elegância.
          </Text>
        </Animated.View>
      </View>

      <View style={styles.buttonGroup}>
        <Button title="Mostrar card" onPress={showCard} />
      </View>

      <Text style={styles.hint}>
        Quando terminar, dispare a animação várias vezes seguidas
        e veja se ela se comporta bem (resposta esperada: sim — sempre
        animar de 0 → 1 e 30 → 0, mesmo se já estiver no destino).
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  title: {
    color: "#A78BFA",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  body: {
    color: "#F8FAFC",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  cardArea: {
    minHeight: 160,
    justifyContent: "center",
    marginVertical: 24,
  },
  card: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#10B981",
  },
  cardTitle: {
    color: "#10B981",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  cardBody: {
    color: "#F8FAFC",
    fontSize: 14,
    lineHeight: 20,
  },
  buttonGroup: {
    marginTop: 8,
  },
  hint: {
    color: "#64748B",
    fontSize: 12,
    fontStyle: "italic",
    marginTop: 24,
  },
});
