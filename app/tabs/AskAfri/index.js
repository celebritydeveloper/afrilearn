import { Text, View, SafeAreaView, StatusBar, ImageBackground, Image, FlatList, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Pressable, Keyboard } from "react-native";

//import { Message, ChatInputBox } from "../components";
import Message from "../../../components/Message";
import ChatInputBox from "../../../components/ChatInputBox";
import messages from "../../../data/messages.json";
//import bg from "../../assets/BG.png";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../../constants";
import { Asset } from "expo-asset";
import global from "../../../styles/global";
import { AfriCurrencyBlackIcon, AfriHappyIcon, CoinIcon, AfriPounderIcon } from "../../../assets/svgs";
import { Iconify } from "react-native-iconify";
//import moment from "moment";

export default function AskAfri ({  }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        {/* <StatusBar barStyle="dark-content" backgroundColor="lightgray" /> */}
        <View style={styles.header}>
            <View style={[global.rowSpaceBetween]}>
                <View style={[{columnGap: 10}, global.row]}>
                    <AfriPounderIcon />
                    <Text style={styles.userName}>Hi Ire!</Text>
                </View>
                <View style={[global.rowCenter, { gap: 7 }]}>
                    <Iconify icon="octicon:download-16" size={26} />
                </View>
            </View>
            <View style={[global.rowCenter, { gap: 5 }]}>
                <Iconify icon="fluent:info-12-regular" size={19} />
                <Text style={styles.warning}>This convo is monitored by a Tutor</Text>
            </View>
        </View>
        
        <KeyboardAvoidingView style={ styles.bg } keyboardVerticalOffset={50}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={{uri: Asset.fromModule(require("../../../assets/images/pattern.png")).uri}} resizeMode="repeat" style={{  flex: 1, width: "100%"}}>
                    <ScrollView contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 20, paddingBottom: 150, backgroundColor: "rgba(255, 182, 193, 0.1)" }}>
                        
                        { messages.map((item, index)=> (
                            <Message message={item} key={index} />
                        ))}
                    </ScrollView>
                </ImageBackground>
            </TouchableWithoutFeedback>
            
            

            <ChatInputBox />
        </KeyboardAvoidingView>
        
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
    bg:{
        flex: 1
    },
    warning:{
        backgroundColor: COLORS.platinum,
        borderWidth: 0.5,
        borderColor: COLORS.darkGray,
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 20,
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    row: {
        alignItems: "center",
        flexDirection: "row",
        
    },
    rowSpaceBetween: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    list: {
        paddingHorizontal: 10,
        paddingVertical: 0
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10,
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
        fontSize: 17,
        fontFamily: "Andika_700Bold",
    },

    userClass: {
        fontSize: 14,
        fontFamily: "Andika_400Regular",
    },

    warning: {
        fontSize: 12,
        fontFamily: "Andika_400Regular",
    },

    topCard: {
        height: 191,
        backgroundColor: COLORS.brandGreen,
        borderRadius: 30,
        borderLeftWidth: 7,
        borderBottomWidth: 7,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: "black",
        marginBottom: 30,
    },

    topCardImage: {
        flex: 1,
        justifyContent: "center",
        width: "100%"
    },

    wallet: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: "Andika_400Regular",
        fontWeight: "100"
    },

    coin: {
        color: COLORS.dark,
        fontSize: 13,
        fontFamily: "Andika_700Bold"
    },
})


