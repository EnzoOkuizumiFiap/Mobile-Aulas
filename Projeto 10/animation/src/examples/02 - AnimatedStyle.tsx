import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function AnimatedStyle() {
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    }
  })

  function toggleOpacity() {
    opacity.value = opacity.value === 1 ? 0.2 : 1;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useAnimatedStyle</Text>

      <Animated.View
        style={[styles.box, animatedStyle]}
      >
      </Animated.View>

      <TouchableOpacity
        style={styles.button}
        onPress={toggleOpacity}
      >
        <Text>Alterar opacidade</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    color: "#a78bfa",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: "#8B5CF6",
    borderRadius: 12,
    alignItems: "center"
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    marginTop: 30
  }
})