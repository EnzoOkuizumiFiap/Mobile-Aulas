import { Image,StyleSheet, Text, View } from "react-native";

interface IProfileCardProps{
    nome: string;
    cargo: string;
    foto: string;
}

export function ProfileCard({ nome, cargo, foto }: IProfileCardProps) {

    return(
        <View style={styles.card}>

            {/* Foto */}
            <Image 
                source={{ uri: foto }}
                style={styles.image}
                />

            <View style={styles.box}>
                {/* Nome */}
                <Text style={styles.nome}>{nome}</Text>

                {/* Cargo */}
                <Text style={styles.cargo}>{cargo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#eae8e8",
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 1000
    },

    box: {},

    nome: {
        fontWeight: "600",
        fontSize: 20
    },

    cargo: {
        fontSize: 16,
        fontStyle: "italic"
    }
})