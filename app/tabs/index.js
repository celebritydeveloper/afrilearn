import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../../constants";
import global from "../../styles/global";
import { AfriCurrencyIcon, NairaIcon } from "../../assets/svgs";


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

            
            <View style={styles.container}>
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
            </View>
            
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
        borderLeftWidth: 6,
        borderBottomWidth: 6,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: "black",
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
    }
    
})