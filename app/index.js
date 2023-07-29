import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

export default function Page() {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Hello World</Text>
                <Text style={styles.subTitle}>This is the first page of your apps</Text>
                <Link href="/tabs">Tabs</Link>

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