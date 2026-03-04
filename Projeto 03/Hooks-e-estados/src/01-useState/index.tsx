import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface IFormaData {
    nome: string;
    email: string;
    idade: string;
}

export default function UseStatePage() {

    const [cadastros, setCadastros] = useState<Array<IFormaData>>([]);

    // [ ] -> desestruturação
    {/*
            Antes: function User(props) { return <h1>{props.name}</h1>; }
            Depois: function User({ name }) { return <h1>{name}</h1>; }
        */}
    const [valor, setValor] = useState(0);
    //      Atual, Função para mudar, inicial

    function handleSomaValor(value: number) {
        setValor(value + 1);
    }

    //1 forma de usar formulário
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");

    function submit() {
        if (nome === "" || email === "" || idade === "") {
            alert("Prencha todos os campos!");
            return;
        }

        if (Number.parseInt(idade) < 18) {
            alert("Idade não permitida!");
            return;
        }

        // Versao longa
        // const copia = [...cadastros]
        // copia.push({
        //   nome,
        //   email,
        //   idade
        // })
        // setCadastros(copia)

        // Versao curta - basicamente, pega o dado anterior, faz uma cópia dele e depois insere os novos dados nessa cópia 
        setCadastros(prev => [...prev, {
            nome,
            email,
            idade
        }])

        // cadastros.push({
        //   nome,
        //   email,
        //   idade
        // })

        alert("Sucesso!")
        setNome("");
        setEmail("");
        setIdade("");
    }

    //2 forma de usar formulário
    const [form, setForm] = useState({} as IFormaData);

    function newSubmit() {

        if (!Object.hasOwn(form, "nome")) {
            alert("Preencha o nome!");
            return;
        }

        if (!Object.hasOwn(form, "email")) {
            alert("Preencha o email!");
            return;
        }

        if (!Object.hasOwn(form, "idade")) {
            alert("Preencha o idade!");
            return;
        }

        if (Number.parseInt(form.idade) < 18) {
            alert("Idade não permitida");
            return;
        }

        alert("Sucesso!")
    }

    //Função Botão Apagar
    function deleteUser(index: number) {
        // Versao longa
        // const copia = [...cadastros]
        // const copiaFiltrada = copia.filter((_, prevIndex) => prevIndex !== index);
        // setCadastros(copiaFiltrada)

        // Versao curta
        setCadastros(prev => prev.filter((_, prevIndex) => prevIndex !== index))
    }

    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            padding: 20
        }}>
            <Text>Use State Page</Text>

            {/* Um contador :) Versão Simples */}
            {/* <TouchableOpacity 
                onPress={() => handleSomaValor(valor)}
                style={{
                    borderWidth: 1,
                    borderColor: "#000",
                    padding: 9,
                    borderRadius: 9
                }}>
                <Text>Me aperte!</Text>
            </TouchableOpacity> */}

            {/* Versão Formulário - Não temos a tag form */}
            <View style={{
                width: 100,
                gap: 10
            }}>
                <TextInput
                    style={{
                        borderColor: "#000",
                        borderWidth: 1,
                        width: "100%",
                        backgroundColor: "#fff",
                        borderRadius: 10
                    }}

                    // 1 forma
                    //value={nome}
                    //onChangeText={(text) => {setNome(text)}}

                    // 2 forma
                    value={form.nome}
                    onChangeText={(text) => setForm(anterior => ({
                        ...anterior,
                        nome: text
                    }))}

                    placeholderTextColor="#00f"
                    placeholder="Digite seu nome"
                />
                <TextInput
                    style={{
                        borderColor: "#000",
                        borderWidth: 1,
                        width: "100%",
                        backgroundColor: "#fff",
                        borderRadius: 10
                    }}

                    // 1 forma
                    // value={email}
                    // onChangeText={(text) => {setEmail(text)}}

                    // 2 forma
                    value={form.email}
                    onChangeText={(text) => setForm(anterior => ({
                        ...anterior,
                        email: text
                    }))}

                    placeholderTextColor="#00f"
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                />
                <TextInput
                    style={{
                        borderColor: "#000",
                        borderWidth: 1,
                        width: "100%",
                        backgroundColor: "#fff",
                        borderRadius: 10
                    }}

                    // 1 forma
                    // value={idade}
                    // onChangeText={(text) => {setIdade(text)}}

                    // 2 forma
                    value={form.idade}
                    onChangeText={(text) => setForm(anterior => ({
                        ...anterior,
                        idade: text
                    }))}

                    placeholderTextColor="#00f"
                    placeholder="Digite seu idade"
                    keyboardType="decimal-pad"
                />

                <TouchableOpacity
                    // 1 forma
                    // onPress={submit}

                    // 2 forma
                    onPress={newSubmit}
                    style={{
                        padding: 10,
                        borderRadius: 9,
                        backgroundColor: "#fff",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10
                    }}>
                    <Text style={{ textAlign: "center" }}>Enviar</Text>
                </TouchableOpacity>

            </View>

            {/* Render */}
            <View
            style={{
                gap: 10,
                width: 100
            }}>
                {cadastros.map((cadastro, index)=> (
                    <TouchableOpacity
                    key={index} 
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#000",
                        alignItems: "center"
                    }}
                    onLongPress={() => deleteUser(index)}
                    >
                        <Text>{cadastro.nome}</Text>
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    )
}