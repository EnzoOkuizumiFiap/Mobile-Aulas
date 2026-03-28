import { Text, View } from "react-native";

export function Avatar({ name }) {
  return (
    <View style={{
      width: 40,
      height: 40,
      backgroundColor: "#848383",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center"
    }}
    >
      <Text>{name?.slice(2)?.toUpperCase()}</Text>
    </View>
  )
}