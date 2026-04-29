import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function WithTiming() {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    }
  });

  function toggleOpacity() {
    opacity.value = opacity.value === 1 ? 0.2 : 1;
  }

  function fadeIn() {
    // Duracao default 300ms
    opacity.value = withTiming(1)
  }

  function fadeInCustom() {
    // Duracao default 300ms
    opacity.value = withTiming(1, {
      duration: 1000,
      // easing: Easing.out(Easing.cubic)
      easing: Easing.linear
    })
  }

  function fadeOut() {
    opacity.value = withTiming(0, { duration: 400 })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WithTiming</Text>

      <Animated.View
        style={[styles.box, animatedStyle]}
      >

      </Animated.View>


      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={fadeIn}
        >
          <Text>Fade In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={fadeInCustom}
        >
          <Text>Fade In (custom)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={fadeOut}
        >
          <Text>Fade Out</Text>
        </TouchableOpacity>
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