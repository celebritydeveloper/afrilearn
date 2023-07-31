import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../constants";
import global from "../styles/global";
import { IndicatorIcon } from "../assets/svgs";
import { Iconify } from 'react-native-iconify';


export default function StatusBadge({ text, status }) {
    return (
        <View style={[global.row, styles.indicator, 
            { backgroundColor: status == "completed" ? "#E2FFEF" : COLORS.lightYellow, borderColor: status == "completed" ? "#B2FFD5" : COLORS.yellow,}]
        }>
            { status  == "completed" ? <Iconify icon="material-symbols:check-circle-rounded" size={20} color={COLORS.green} /> : <IndicatorIcon /> }
            <Text style={styles.indicatorText}>{ text }</Text>
        </View>
        
    )
}


const styles = StyleSheet.create({

    indicator: {
        borderRadius: 18,
        borderWidth: 2,
        gap: 6,
        marginBottom: 5,
        marginTop: 0,
        paddingHorizontal: 10,
        paddingVertical: 4,
        maxWidth: 135
        
        
    },
    
    indicatorText: {
        fontFamily: "Andika_700Bold",
        fontSize: 10,
        textTransform: "uppercase"
    },
    
})