import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";
import { LeaderBadgeIcon, ChartIcon, CircleIcon, AfriCurrencyColorIcon } from "../assets/svgs";


export default function BigButton({ text }) {
    return (
        <View style={[styles.button, global.rowCenter]}>
            <Text style={styles.buttonText}>{ text }</Text>
        </View>
        
    )
}


const styles = StyleSheet.create({

    button: {
        height: 65,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        borderLeftWidth: 5,
        borderBottomWidth: 5,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: COLORS.black,
        width: "100%",
    },

    buttonText: {
        color: COLORS.black,
        fontSize: 19,
        fontFamily: "Andika_700Bold",
    },
    
})