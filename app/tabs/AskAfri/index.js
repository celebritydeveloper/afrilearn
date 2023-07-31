import { Text, View, SafeAreaView, StatusBar, ImageBackground, Image, FlatList, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Pressable } from "react-native";

//import { Message, ChatInputBox } from "../components";
import Message from "../../../components/Message";
import ChatInputBox from "../../../components/ChatInputBox";
import messages from "../../../data/messages.json";
//import bg from "../../assets/BG.png";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../../constants";
//import moment from "moment";

export default function AskAfri ({  }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        {/* <StatusBar barStyle="dark-content" backgroundColor="lightgray" /> */}
        <View style={ [ styles.rowSpaceBetween, { paddingVertical: 14, paddingHorizontal: 8 } ] }>
            <View style={ styles.row }>
                {/* <Pressable onPress={ () => navigation.goBack() }>
                    <Ionic name="arrow-back-outline" style={{ marginRight: 2 }} size={22} />
                </Pressable> */}
                {/* <Image source={{ uri: route.params.image }} style={ styles.image } />
                <Text>{ route.params.name }</Text> */}
            </View>
            {/* <View>
                <Ionic name="home-outline" size={25}  />
            </View> */}
        </View>
        
        <KeyboardAvoidingView style={ styles.bg }>
            {/* <ImageBackground source={bg} style={ styles.bg }>
                
            </ImageBackground> */}
            <ScrollView>
                <View style={[ styles.warning, styles.row  ]}>
                    {/* <Ionic name="warning-outline" size={25} style={{ marginRight: 10 }}  /> */}
                    <View style={{ paddingRight: 20 }}>
                        <Text numberOfLines={3}>To protect your payment and guarantee you receive your order, always chat and pay through PallyPaddy.</Text>
                        <Pressable style={{ marginTop: 5, borderBottomWidth: 1, borderBottomColor: COLORS.blue, width: "29%" }}>
                            <Text style={{ color: COLORS.blue, padding: 0 }}>Learn more</Text>
                        </Pressable>
                    </View>
                </View>
                { messages.map((item, index)=> (
                    <Message message={item} key={index} />
                ))}
            </ScrollView>
            
            {/* <FlatList
                data={ messages }
                renderItem={({ item }) => <Message message={item} /> }
                style={ styles.list }
                inverted
            /> */}
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
})


