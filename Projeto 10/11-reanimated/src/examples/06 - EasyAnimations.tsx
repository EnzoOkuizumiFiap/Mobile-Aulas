import { TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown, FadeInUp, FadeOutDown, RollInLeft, createAnimatedComponent } from "react-native-reanimated";

const usuarios = [
  {
    id: 1,
    nome: "Ana",
    idade: 28,
    email: "ana@email.com",
    ativo: true
  },
  {
    id: 2,
    nome: "Carlos",
    idade: 35,
    email: "carlos@email.com",
    ativo: false
  },
  {
    id: 3,
    nome: "Mariana",
    idade: 22,
    email: "mariana@email.com",
    ativo: true
  },
  {
    id: 4,
    nome: "João",
    idade: 40,
    email: "joao@email.com",
    ativo: true
  }
];

const AnimatedButton = createAnimatedComponent(TouchableOpacity);

export default function EasyAnimations() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: 20
      }}
    >
      {usuarios.map((usuario, index) => (
        <Animated.View
          key={usuario.id}
          entering={RollInLeft.delay((index + 1) * 1000)}
          exiting={FadeInUp}
          style={{
            backgroundColor: "#f0c",
            width: 60,
            height: 60,
            borderRadius: 20
          }}
        >

        </Animated.View>
      ))}

      <AnimatedButton
        entering={FadeInDown.delay(5000)}
        exiting={FadeOutDown.delay(5000)}
        style={{
          backgroundColor: "#f0c",
          paddingHorizontal: 20,
          paddingVertical: 30,
          width: "100%",
          borderRadius: 10
        }}
      />

    </View>
  )
}