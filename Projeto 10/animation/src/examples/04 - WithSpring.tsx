import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

export default function WithSpring() {

  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }]
  }));

  function moveDefault() {
    translateX.value = withSpring(120)
  }

  function moveSoft() {
    translateX.value = withSpring(120, {
      mass: 1,
      damping: 5,
      stiffness: 100
    })
  }

  function moveStiff() {
    translateX.value = withSpring(120, {
      mass: 1,
      damping: 25,
      stiffness: 300
    })
  }

  function reset() {
    translateX.value = withSpring(0);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>WithSpring</Text>

      <View style={styles.track} >
        <Animated.View
          style={[styles.box, animatedStyle]}
        >

        </Animated.View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={moveDefault}
        >
          <Text>Spring padrao</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={moveSoft}
        >
          <Text>Spring macio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={moveStiff}
        >
          <Text>Spring duro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={reset}
        >
          <Text>Reset</Text>
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
    width: 80,
    height: 80,
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
  },
  track: {
    height: 80,
    justifyContent: "center",
    marginVertical: 16
  }
})