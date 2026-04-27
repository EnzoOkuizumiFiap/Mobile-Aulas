import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function ButtonScale() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  function handlePressIn() {
    scale.value = withSpring(0.9)
  }

  function handlePressOut() {
    scale.value = withSpring(1)
  }

  return (
    <View style={styles.container}>
      <Text>Botão que reage ao toque</Text>

      <View style={styles.demoArea}>
        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <Animated.View style={[styles.btn, animatedStyle]}>
            <Text style={styles.btnText}>Aperte aqui</Text>
          </Animated.View>

        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100
  },
  demoArea: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32
  },
  btn: {
    backgroundColor: "#8B5CF6",
    paddingVertical: 18,
    paddingHorizontal: 36,
    borderRadius: 14,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 }
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700"
  },
})