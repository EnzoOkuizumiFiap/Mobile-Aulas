import React from "react";
import { View } from "react-native";
import AxiosExample from "./src/axios";
import FetchExample from "./src/fetch";

// Renderiza os dois exemplos lado a lado para os alunos compararem
// o mesmo CRUD feito com axios e com fetch.
export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, borderRightWidth: 1, borderColor: "#ddd" }}>
        <AxiosExample />
      </View>
      <View style={{ flex: 1 }}>
        <FetchExample />
      </View>
    </View>
  );
}
