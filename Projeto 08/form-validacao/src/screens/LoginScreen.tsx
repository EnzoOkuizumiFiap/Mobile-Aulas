import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { z, infer, email } from "zod";

interface IDataProps {
  email: string;
  senha: string;
}

const schema = z.object({
  email: z.email("Digite um email valido"),
  senha: z.string().nonempty("Preencha a senha"),
  cep: z.string()
});

export default function LoginScreen() {
  // 1. primeiro metodo
  // const [email, setEmail] = useState("");
  // const [senha, setSenha] = useState("");

  // 2. segundo metodo
  //  Ref.
  // let emailRef = useRef<TextInput>(null);
  // let senhaRef = useRef<TextInput>(null);

  // let formData = useRef({
  //   email: "",
  //   senha: ""
  // })

  // console.log("Montando a tela...")

  async function submit({ email, senha }: IDataProps) {
    console.log("enviando...");
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log({
      email,
      senha
    })
  }

  const {
    handleSubmit,
    control,
    watch,
    formState: { isLoading, errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const cep = watch("cep");

  useEffect(() => {
    if (cep?.length < 8) {
      return;
    }

    (async () => {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      console.log(data);
    })();

  }, [cep]);

  useEffect(() => {
    // {"email": {"message": "Digite um email valido", "ref": {"name": "email"}, "type": "invalid_format"}}
    if (errors?.email?.message) {
      alert(errors?.email?.message);
      return;
    }

    if (errors?.senha?.message) {
      alert(errors?.senha?.message);
      return;
    }

    // if (Object.entries(errors).length === 0) {
    //   return;
    // }

    // console.log(errors)
    // const arrayErrors = Object.entries(errors);
    // console.log(arrayErrors)
    // arrayErrors.map(error => {
    //   alert(error[1]?.message)
    // })


  }, [errors]);

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,

      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View
        style={{
          flex: 1,
          padding: 24,
          alignItems: "center",
          justifyContent: "center",
          gap: 10
        }}
      >

        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value, disabled } }) => (
            <TextInput
              placeholder="Digite seu email..."
              value={value}
              onChangeText={onChange}
              style={{
                borderWidth: 1,
                width: '100%'
              }}
              onBlur={onBlur}
              editable={!disabled}
            />
          )}
        />

        <Controller
          name="cep"
          control={control}
          render={({ field: { onBlur, onChange, value, disabled } }) => (
            <TextInput
              placeholder="Digite seu cep..."
              value={value}
              onChangeText={onChange}
              style={{
                borderWidth: 1,
                width: '100%'
              }}
              keyboardType="decimal-pad"
              onBlur={onBlur}
              editable={!disabled}
            />
          )}
        />

        <Controller
          name="senha"
          control={control}
          render={({ field: { onBlur, onChange, value, disabled } }) => (
            <TextInput
              placeholder="Digite sua senha..."
              value={value}
              onChangeText={onChange}
              style={{
                borderWidth: 1,
                width: '100%'
              }}
              onBlur={onBlur}
              editable={!disabled}
              secureTextEntry
            />
          )}
        />



        {/* <TextInput
          ref={senhaRef}
          placeholder="Digite sua senha..."
          // value={senha}
          // onChangeText={(val) => setSenha(val)}
          // onChangeText={(val) => senhaRef.current = val}
          onChangeText={(senha) => (formData.current.senha = senha)}
          style={{
            borderWidth: 1,
            width: '100%'
          }}
          secureTextEntry
        /> */}

        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10
          }}
          onPress={handleSubmit(submit)}
        >
          {isSubmitting ? <ActivityIndicator /> : <Text>Entrar</Text>}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}