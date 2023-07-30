import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";
import { StarIcon } from "../assets/svgs";


export default function TopicCard() {
    return (
        <View style={[styles.card, global.row,]}>
            <View style={[styles.star, global.rowCenter]}>
                <StarIcon />
            </View>
            <Text style={styles.text}>Living things and non-living things</Text>
        </View>
        
    )
}


const styles = StyleSheet.create({

    card: {
        height: 120,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        borderLeftWidth: 6,
        borderBottomWidth: 6,
        borderRightWidth: 3,
        borderTopWidth: 3,
        borderColor: COLORS.nutralColor,
        gap: 30,
        paddingHorizontal: 18,
        width: "100%",
    },

    text: {
        color: COLORS.dark,
        fontSize: 17,
        fontFamily: "Andika_700Bold",
        width: 200
    },

    button: {
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        borderLeftWidth: 6,
        borderBottomWidth: 6,
        borderRightWidth: 3,
        borderTopWidth: 3,
        borderColor: COLORS.dark,
        justifyContent: "center",
        gap: 3,
        width: 145,
    },

    buttonText: {
        color: COLORS.dark,
        fontSize: 14,
        fontFamily: "Andika_700Bold",
        lineHeight: 35
    },

    star: {
        backgroundColor: COLORS.darkGray,
        borderRadius: 100,
        borderWidth: 4,
        height: 95,
        width: 95
    },
    
})