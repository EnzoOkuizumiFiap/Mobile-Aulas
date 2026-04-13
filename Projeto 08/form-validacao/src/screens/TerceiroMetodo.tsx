import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


// Schema de validação
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Email inválido"),

  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginScreen() {

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* EMAIL */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            {errors.email && (
              <Text style={styles.error}>
                {errors.email.message}
              </Text>
            )}
          </>
        )}
      />

      {/* SENHA */}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />

            {errors.password && (
              <Text style={styles.error}>
                {errors.password.message}
              </Text>
            )}
          </>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Entrar</Text>
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
    marginBottom: 32,
    textAlign: "center"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8
  },

  error: {
    color: "red",
    marginBottom: 12
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }

});