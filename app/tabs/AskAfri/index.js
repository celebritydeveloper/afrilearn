import { StyleSheet, View, Text } from "react-native";

export default function AskAfri() {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>AskAfri World</Text>
                <Text style={styles.subTitle}>This is the first page of your apps</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24
    },

    main: {
        flex: 1,
        justifyContent: "center"
    },

    title: {
        fontSize: 20,
        fontWeight: "bold"
    },

    subTitle: {
        fontSize: 15,
        fontWeight: "normal"
    }
    
})