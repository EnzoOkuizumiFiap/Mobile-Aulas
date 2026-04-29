# Exercícios — Reanimated · Aula 1

## Exercício 01 — Card com fade + slide

### Objetivo

Quando o usuário tocar no botão **"Mostrar card"**, o card deve aparecer
com **duas animações simultâneas**:

1. **Fade in** — opacidade vai de `0` → `1`, usando `withTiming`, em **600ms**.
2. **Slide up** — `translateY` vai de `30` → `0`, usando `withSpring`.

O resultado deve ser um card que sobe e aparece suavemente — semelhante
ao efeito de toast/notification em apps modernos.

### Arquivos

| Arquivo | Descrição |
|---|---|
| `01-FadeInCard.tsx` | Versão com TODOs — **comece por aqui**. |
| `01-FadeInCard.solution.tsx` | Solução completa (consulte só depois de tentar). |

### Passo a passo sugerido

1. Abra `01-FadeInCard.tsx`.
2. Implemente o **TODO 1** — crie os dois shared values (`opacity` e `translateY`).
3. Implemente o **TODO 2** — crie o `animatedStyle` lendo os dois valores.
4. Lembre de **descomentar** a linha do `animatedStyle` na `<Animated.View>`.
5. Implemente o **TODO 3** — função `showCard` que dispara as duas animações.
6. Toque no botão e veja o resultado.

### Dicas

- `useSharedValue(0)` cria um valor inicial em `0`.
- `useAnimatedStyle(() => ({ ... }))` recebe **uma função** que retorna o estilo.
- `withTiming(target, { duration: 600 })` para o fade.
- `withSpring(target)` para o movimento — sem options, usa os padrões.
- Lembre de aplicar o estilo em **`<Animated.View>`**, não `<View>`!

### Quando terminar

- Dispare a animação várias vezes seguidas. Ela deve reiniciar do estado
  inicial (`0`/`30`) toda vez? Pense por quê.
- Tente trocar `withSpring` por `withTiming` no `translateY` e veja a
  diferença sensorial.
- **Bônus**: implemente uma função `hideCard` que faz a animação inversa.

### Tempo sugerido: 20 minutos

Se travar por mais de 5 minutos no mesmo ponto, peça ajuda ao instrutor.
A primeira aula sobre Reanimated tem uma curva de aprendizado normal —
não se preocupe se demorar pra "fazer o clique".
