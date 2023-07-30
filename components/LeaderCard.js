import { StyleSheet, View, Text, Image } from "react-native";
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";
import { LeaderBadgeIcon, ChartIcon, CircleIcon } from "../assets/svgs";


export default function LeaderCard() {
    return (
            <View style={[styles.leaderCard, global.row,]}>
                <View style={[global.rowCenter, styles.profileImage]}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: "https://images.unsplash.com/photo-1536337005238-94b997371b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwxMnx8Ym95JTIwaW4lMjBjbGFzc3xlbnwwfHx8fDE2OTA2Nzg1OTl8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450",
                        }}
                    />
                </View>
                <View>
                    <View style={[global.rowSpaceBetween, { gap: 5 }]}>
                        <Text style={styles.leaderClass}>SSS 1</Text>
                        <CircleIcon />
                        <Text style={styles.leaderLevel}>Level 3</Text>
                        <CircleIcon />
                        <ChartIcon />
                        <Text style={styles.leaderPercent}>Top 1%</Text>
                    </View>
                    <View style={[global.row, { gap: 8}]}>
                        <LeaderBadgeIcon />
                        <Text style={styles.leaderName}>Ire Otumba</Text>
                    </View>
                    <Text style={styles.leaderSchoolName}>Bloomberry College </Text>
                    <View style={[global.row, { gap: 6}]}>
                        <Text style={styles.leaderPointText}>Score:</Text>
                        <Text style={styles.leaderPoint}>98</Text>
                    </View>
                </View>
            </View>
        
    )
}


const styles = StyleSheet.create({
    tinyLogo: {
        borderRadius: 26,
        height: 60,
        width: 60,
    },

    profileImage: {
        borderWidth: 3,
        borderRadius: 26,
        height: 65,
        width: 65,
    },

    leaderCard: {
        height: 140,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        borderLeftWidth: 7,
        borderBottomWidth: 7,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: COLORS.nutralColor,
        gap: 13,
        marginRight: 10,
        paddingHorizontal: 14,
        width: 305,
    },


    assessmentIcon: {
        borderWidth: 3,
        borderRadius: 100,
        height: 45,
        width: 45,
    },

    leaderClass: {
        color: COLORS.dark,
        fontSize: 12,
        fontFamily: "Andika_700Bold",
    },

    leaderLevel: {
        color: COLORS.brandGreen,
        fontSize: 12,
        fontFamily: "Andika_700Bold",
    },

    leaderPercent: {
        color: COLORS.dark,
        fontSize: 12,
        fontFamily: "Andika_700Bold",
        padding: 0
    },

    leaderName: {
        color: COLORS.dark,
        fontSize: 14,
        fontFamily: "Andika_700Bold",
        lineHeight: 23,
        margin: 0,
        padding: 0
    },

    leaderSchoolName: {
        color: COLORS.nutralColor,
        fontSize: 12,
        fontFamily: "Andika_400Regular",
        lineHeight: 17,
        margin: 0,
        padding: 0
    },

    leaderPointText: {
        color: COLORS.nutralColor,
        fontSize: 12,
        fontFamily: "Andika_400Regular",
        lineHeight: 17,
    },

    leaderPoint: {
        color: COLORS.dark,
        fontSize: 12,
        fontFamily: "Andika_700Bold",
        lineHeight: 17,
    },

    assessmentSubTitle: {
        color: COLORS.nutralColor,
        fontSize: 14,
        fontFamily: "Andika_400Regular",
        
    },
    
})