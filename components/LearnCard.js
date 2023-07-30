import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";
import { StarIcon } from "../assets/svgs";


export default function LearnCard({ title, text, icon }) {
    return (
        <View style={[styles.card, global.rowSpaceAround,]}>
            <View style={[styles.icon, global.rowCenter]}>
                { icon }
            </View>

            <View style={{maxWidth: 240}}>
                <Text style={styles.text}>{ title }</Text>
                <Text style={styles.smallText}>{ text }</Text>
            </View>

            <Iconify icon="maki:arrow" size={26} color={COLORS.nutralColor} />
        </View>
        
    )
}


const styles = StyleSheet.create({

    card: {
        height: 150,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        borderLeftWidth: 6,
        borderBottomWidth: 6,
        borderRightWidth: 3,
        borderTopWidth: 3,
        borderColor: COLORS.nutralColor,
        gap: 0,
        marginBottom: 20,
        width: "100%",
    },

    text: {
        color: COLORS.dark,
        fontSize: 17,
        fontFamily: "Andika_700Bold"
    },

    smallText: {
        color: COLORS.nutralColor,
        fontSize: 15,
        fontFamily: "Andika_400Regular",
        lineHeight: 20
    },

    icon: {
        backgroundColor: COLORS.white,
        borderRadius: 100,
        borderWidth: 4,
        height: 60,
        width: 60
    },
    
})