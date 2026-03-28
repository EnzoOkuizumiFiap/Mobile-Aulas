import { View } from "react-native";
import { HeaderHome } from "./sections/HeaderHome";
import { useUser } from "../../hooks/User.hook";

export default function HomeScreen() {

  return (
    <View style={{ flex: 1, backgroundColor: "#ccc", paddingTop: 80 }}>
      <HeaderHome />
    </View>
  )
}