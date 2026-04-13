import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormHubScreen from "./src/navigation/FormHubScreen";
import LoginScreen from "./src/screens/LoginScreen";
import PrimeiroMetodo from "./src/screens/PrimeiroMetodo";
import SegundoMetodo from "./src/screens/SegundoMetodo";
import TerceiroMetodo from "./src/screens/TerceiroMetodo";

export type RootStackParamList = {
  FormHub: undefined;
  LoginUseState: undefined;
  FeitoEmAula: undefined;
  LoginUseRef: undefined;
  LoginReactHookForm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FormHub">
        <Stack.Screen
          name="FormHub"
          component={FormHubScreen}
          options={{ title: "Hub de Formulários" }}
        />
        
        <Stack.Screen
          name="FeitoEmAula"
          component={LoginScreen}
          options={{ title: "Feito em Aula" }}
        />
        
        <Stack.Screen
          name="LoginUseState"
          component={PrimeiroMetodo}
          options={{ title: "Login com useState" }}
        />
        <Stack.Screen
          name="LoginUseRef"
          component={SegundoMetodo}
          options={{ title: "Login com useRef" }}
        />
        <Stack.Screen
          name="LoginReactHookForm"
          component={TerceiroMetodo}
          options={{ title: "Login com React Hook Form + Zod" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
