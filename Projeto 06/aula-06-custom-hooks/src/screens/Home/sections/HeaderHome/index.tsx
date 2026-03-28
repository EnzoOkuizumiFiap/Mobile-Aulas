import { Text, View } from "react-native";
import { Avatar } from "../../../../components/Avatar";
import { useUser } from "../../../../hooks/User.hook";

export function HeaderHome() {
  const { user } = useUser()

  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20 }}>
      <Text>Olá! {user?.username}</Text>

      <Avatar name={user?.username} />
    </View>
  )
}