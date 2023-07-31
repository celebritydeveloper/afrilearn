import { StyleSheet, View, Image } from "react-native";
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";


export default function UserPicture({ image }) {
    return (
        <View style={[global.rowCenter, styles.profileImage]}>
            <Image
                style={styles.tinyLogo}
                    source={{
                            uri: "https://images.unsplash.com/photo-1536337005238-94b997371b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwxMnx8Ym95JTIwaW4lMjBjbGFzc3xlbnwwfHx8fDE2OTA2Nzg1OTl8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450",
                }}
            />
        </View>
        
    )
}


const styles = StyleSheet.create({

    tinyLogo: {
        borderRadius: 10,
        height: 26,
        width: 26,
    },

    profileImage: {
        borderWidth: 2,
        borderRadius: 10,
        height: 30,
        width: 30,
    },
    
})