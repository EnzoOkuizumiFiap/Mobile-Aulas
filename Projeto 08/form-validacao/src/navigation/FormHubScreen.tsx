import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "FormHub">;

export default function FormHubScreen({ navigation }: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hub de Formulários</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FeitoEmAula")}
      >
        <Text style={styles.buttonText}>Feito em Aula</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LoginUseState")}
      >
        <Text style={styles.buttonText}>Login com useState</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LoginUseRef")}
      >
        <Text style={styles.buttonText}>Login com useRef</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LoginReactHookForm")}
      >
        <Text style={styles.buttonText}>
          Login com React Hook Form + Zod
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center"
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});