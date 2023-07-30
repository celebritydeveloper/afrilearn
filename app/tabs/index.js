import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../../constants";
import global from "../../styles/global";
import { AfriCurrencyIcon, NairaIcon, BarChartIcon, LeaderBadgeIcon } from "../../assets/svgs";
import LeaderCard from "../../components/LeaderCard";


export default function Home() {
    return (
        <SafeAreaProvider style={{ flex: 1}}>
            <View style={[global.rowSpaceBetween, styles.header ]}>
                <View style={[{columnGap: 10}, global.row]}>
                    <View style={[global.rowCenter, styles.profileImage]}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: "https://images.unsplash.com/photo-1536337005238-94b997371b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwxMnx8Ym95JTIwaW4lMjBjbGFzc3xlbnwwfHx8fDE2OTA2Nzg1OTl8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450",
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.userName}>Ire</Text>
                        <Text style={styles.userClass}>SSS 1</Text>
                    </View>
                    <Iconify icon="ph:caret-right-bold" size={20} color={COLORS.nutralColor} />
                </View>
                <View style={ global.rowSpaceBetween}>
                    <Iconify icon="fa6-regular:bell" size={26} color={COLORS.nutralColor} />
                </View>
            </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 20 }}>
                <View style={styles.card}>
                    <View style={[global.rowFlexEnd, { gap: 12}]}>
                        <Text style={styles.wallet}>AfriWallet</Text>
                        <Iconify icon="maki:arrow" size={20} color={COLORS.white} />
                    </View>

                    <View>
                        <View style={[global.row, { gap: 1}]}>
                            <AfriCurrencyIcon />
                            <Text style={styles.coin}>5260.34</Text>
                        </View>

                        <View style={[global.row, { gap: 3}]}>
                            <NairaIcon />
                            <Text style={styles.amount}>2500.00</Text>
                        </View>
                    </View>

                    <View style={[global.rowFlexEnd, { gap: 6}]}>
                        <Text style={styles.pointText}>Pts:</Text>
                        <Text style={styles.point}>45</Text>
                    </View>
                </View>


                <View style={[styles.assessmentCard, global.rowSpaceBetween]}>
                    <View style={[styles.assessmentIcon, global.rowCenter]}>
                        <BarChartIcon />
                    </View>
                    <View>
                        <Text style={styles.assessmentTitle}>Take assessment test</Text>
                        <Text style={styles.assessmentSubTitle}>See how you perform against all learners</Text>
                    </View>
                    <Iconify icon="maki:arrow" size={24} color={COLORS.nutralColor} />
                </View>

                <View style={[global.rowSpaceBetween, styles.leaderHeader]}>
                    <Text style={styles.leaderTitleLeft}>Top scorers</Text>
                    <View style={[global.row, { gap: 8}]}>
                        <Text style={styles.leaderTitleRight}>Leaderboard</Text>
                        <Iconify icon="maki:arrow" size={22} color={COLORS.blue} />
                    </View>
                </View>

                <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false }>
                    <LeaderCard />
                    <LeaderCard />
                    <LeaderCard />
                </ScrollView>

                
            </ScrollView>

            
            
        </SafeAreaProvider>
        
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20
    },

    header: {
        borderBottomColor: COLORS.nutralColor,
        borderBottomWidth: 2,
        paddingHorizontal: 20,
        paddingBottom: 8,
        paddingTop: 40
    },

    tinyLogo: {
        borderRadius: 22,
        height: 54,
        width: 54,
    },

    profileImage: {
        borderWidth: 3,
        borderRadius: 22,
        height: 58,
        width: 58,
    },

    userName: {
        fontSize: 16,
        fontFamily: "Andika_700Bold",
    },

    userClass: {
        fontSize: 14,
        fontFamily: "Andika_400Regular",
    },

    subTitle: {
        fontSize: 15,
        fontFamily: "Andika_400Regular",
        fontWeight: "normal"
    },

    card: {
        height: 191,
        backgroundColor: "#289B41",
        borderRadius: 30,
        borderLeftWidth: 7,
        borderBottomWidth: 7,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: "black",
        marginBottom: 30,
        padding: 20
    },

    wallet: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: "Andika_400Regular",
        fontWeight: "100"
    },

    coin: {
        color: COLORS.white,
        fontSize: 20,
        fontFamily: "Andika_700Bold"
    },

    amount: {
        color: COLORS.white,
        fontSize: 12,
        fontFamily: "Andika_700Bold"
    },

    pointText: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: "Andika_400Regular",
    },

    point: {
        color: COLORS.white,
        fontSize: 13,
        fontFamily: "Andika_700Bold"
    },

    assessmentCard: {
        height: 120,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        borderLeftWidth: 6,
        borderBottomWidth: 6,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: COLORS.nutralColor,
        gap: 10,
        marginBottom: 40,
        padding: 12,
        width: "100%",
        
    },

    assessmentIcon: {
        borderWidth: 3,
        borderRadius: 100,
        height: 45,
        width: 45,
    },

    assessmentTitle: {
        color: COLORS.dark,
        fontSize: 16,
        fontFamily: "Andika_700Bold",
    },

    assessmentSubTitle: {
        color: COLORS.nutralColor,
        fontSize: 14,
        fontFamily: "Andika_400Regular",
        
    },

    leaderHeader: {
        marginBottom: 17
    },

    leaderTitleLeft: {
        color: COLORS.dark,
        fontSize: 18,
        fontFamily: "Andika_700Bold",
    },

    leaderTitleRight: {
        color: COLORS.blue,
        fontSize: 14,
        fontFamily: "Andika_700Bold",
    },
    
})