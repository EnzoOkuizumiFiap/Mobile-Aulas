import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KEY_LISTA } from './src/constans/Async_Keys';

export default function App() {
  //Outros conhecimentos - Podemos colocar toda a nossa arrow function dentro de useState() tipo isso: useState<Array<String>>(() => { (async () => { Execução }) });

  const [nomes, setNomes] = useState<Array<String>>([]); // Um array de Strings - Usamos para fazer um Map para exibir a lista
  const [nome, setNome] = useState(""); // String
  const [isLoading, setIsLoading] = useState(false); // Loading - é um booleano

  async function submit() {
    /* AsyncStorage vem com:
      setItem,
      getItem,
      deleteItem

      Guarda por:
      [Chave] - [Valor]
    */

    try {
      console.log("--> [submit] nomes ", nomes)
      console.log("--> [submit] nome ", nome)

      const newInfo = [...nomes, nome]
      console.log("--> [submit] newInfo ", newInfo)

      //vv Atualiza somente UI vv
      setNomes(newInfo);

      //Persistência
      await AsyncStorage.setItem(KEY_LISTA, JSON.stringify(newInfo));

      //Limpando o Input
      setNome("");
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async function searchItemsOnLoad() {
    try {
      setIsLoading(true);

      //Simulação de Espera de API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const lista = await AsyncStorage.getItem(KEY_LISTA);
      console.log("[searchItemsOnLoad] type lista: ", typeof (lista));

      if (!lista) {
        throw new Error("Lista vazia :|");
        //return;
      }

      const parsedLista = JSON.parse(lista);
      console.log("[searchItemsOnLoad] parsedLista: ", parsedLista);
      console.log("[searchItemsOnLoad] type lista: ", typeof (parsedLista));

      console.log("[searchItemsOnLoad] lista: ", parsedLista);

      setNomes(parsedLista);
      setNome("");
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false);
    }
  }

  async function onClear() {
    await AsyncStorage.clear();
    setNomes([]);
  }

  async function deleteNome(id: any) {
    try {
      //Vai apagar a lista toda, não vamos utilizar
      // await AsyncStorage.removeItem()

      const lista = await AsyncStorage.getItem(KEY_LISTA);

      if (!lista) {
        throw new Error("Lista vazia :|");
        //return;
      }

      const parsedLista: Array<String> = JSON.parse(lista);

      const filteredList = parsedLista.filter((_, index) => index !== id);

      console.log("[deleteNome] filteredList: ", filteredList);

      await AsyncStorage.setItem(KEY_LISTA, JSON.stringify(filteredList));
      setNomes(filteredList)

    } catch (error) {
      alert(`[deletNome] error: ${error}`);
    }
  }

  useEffect(() => {
    //Opção 1 usando uma função async normal
    searchItemsOnLoad()

    //Opção 2 - no caso, ( async (passagem de parâmetros) => { tudo que será executado pela função... } )() <- isso é chamando a função
    /* 
    (async () => {
      await AsyncStorage.clear()
      alert("Tudo limpo!")
    })();
    */

  }, []);


  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <ActivityIndicator size="large" color="#00ffff" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Form */}
      <View
        style={{
          gap: 10
        }}>
        <TextInput
          placeholder='Digite aqui'
          style={{
            borderWidth: 1
          }}
          onChangeText={(value) => setNome(value)}
          value={nome}
        />

        <TouchableOpacity style={{
          backgroundColor: "#afafaf",
          borderRadius: 10,
          padding: 10,
          justifyContent: "center",
          alignContent: "center",
        }}
          onPress={submit}
        >
          <Text>Salvar!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: "#ff4949",
          borderRadius: 10,
          padding: 10,
          justifyContent: "center",
          alignContent: "center",
          marginBottom: 15
        }}
          onPress={onClear}
        >
          <Text>Deletar TUDO!</Text>
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <View style={{ gap: 10 }}>
        {nomes.map((nome, index) => {
          return (
            <TouchableOpacity key={String(index)} onPress={() => deleteNome(index)} style={{ padding: 10, borderWidth: 1 }}>
              <Text>{index + 1} - {nome}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    padding: 20
  },
});
