import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../constants";
import global from "../styles/global";
import { IndicatorIcon } from "../assets/svgs";
import { Iconify } from 'react-native-iconify';
import StatusBadge from "./StatusBadge";


export default function NoteVideo({ video, status, text }) {
    return (
        <View style={{ marginBottom: 25 }}>
            <View style={[styles.noteVideoContainer, global.rowCenter]}>
                <Image
                    style={{ height: 198, width: "100%", borderRadius: 18, }}
                    resizeMode="contain"
                    source={{
                        uri: video,
                    }}
                />
            </View>

            <View>
                <Text style={styles.noteVideoTitle}>Terrestrial habitat</Text>
                { status == "pending" ? null : <StatusBadge text={text} status={status} />}
                <Text style={styles.noteVideoView}>62k views</Text>
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({

    noteVideoContainer: {
        borderWidth: 2,
        borderColor: COLORS.black,
        borderRadius: 17,
        height: 200,
        marginBottom: 10,
        width: "100%",
    },

    noteVideoTitle: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: "Andika_700Bold",
    },

    noteVideoView: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: "Andika_400Regular",
        lineHeight: 17
    }
    
})