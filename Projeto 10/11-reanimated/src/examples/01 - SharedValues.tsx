import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export default function SharedValues() {
  const count = useSharedValue(0);

  console.log("[SharedBalue] componente renderizou");

  function showCurrentValue() {
    console.log(count.value)
  }

  function somaCurrentValue() {
    count.value = count.value + 1;
  }

  function subCurrentValue() {
    count.value = count.value - 1;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "#000",
          paddingHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 10
        }}
        onPress={showCurrentValue}
      >
        <Text>Mostrar valor</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          gap: 10
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#000",
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 10
          }}
          onPress={somaCurrentValue}
        >
          <Text>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#000",
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 10
          }}
          onPress={subCurrentValue}
        >
          <Text>-1</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
