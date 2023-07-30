import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";
import { LeaderBadgeIcon, ChartIcon, CircleIcon, AfriCurrencyColorIcon } from "../assets/svgs";


export default function InviteFriend() {
    return (
        <View style={[styles.inviteCard, global.rowSpaceBetween,]}>
            <View>
                <Text style={styles.text}>Invite a friend,</Text>
                <Text style={styles.text}>earn 10 Africoin</Text>
            </View>
            <Pressable style={[styles.button, global.rowCenter]}>
                <Text style={styles.buttonText}>Get</Text>
                <View style={[global.row]}>
                    <AfriCurrencyColorIcon fill="red" />
                    <Text style={styles.amount}>10</Text>
                </View>
                <Text style={styles.buttonText}>now</Text>
            </Pressable>
        </View>
        
    )
}


const styles = StyleSheet.create({

    inviteCard: {
        height: 120,
        backgroundColor: COLORS.brown,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: COLORS.nutralColor,
        gap: 13,
        marginRight: 10,
        paddingHorizontal: 14,
        width: "100%",
    },

    text: {
        color: COLORS.dark,
        fontSize: 16,
        fontFamily: "Andika_700Bold",
        lineHeight: 23,
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

    amount: {
        color: COLORS.darkBrown,
        fontSize: 16,
        fontFamily: "Andika_700Bold",
        lineHeight: 35
    },
    
})