import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";
import { useFonts, Andika_400Regular, Andika_700Bold } from '@expo-google-fonts/andika';

export default function App() {
    let [fontsLoaded] = useFonts({
        Andika_400Regular,
        Andika_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

      
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
        fontFamily: "Andika_700Bold",
    },

    subTitle: {
        fontSize: 15,
        fontFamily: "Andika_400Regular",
        fontWeight: "normal"
    }
    
})