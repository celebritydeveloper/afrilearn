import { StyleSheet } from "react-native";
import { COLORS } from "../constants";



const global = StyleSheet.create({
    flexOne: {
        flex: 1
    },
    textCenter: {
        textAlign: "center"
    },
    textBold: {
        fontWeight: "bold"
    },
    columnCenter: {
        alignItems: "center",
        justifyContent: "center",
    },
    columnAlignCenter: {
        justifyContent: "center",
    },
    columnBetween: {
        alignItems: "center",
        justifyContent: "space-between",
    },
    columnStartBetween: {
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    columnFlexEnd: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    row: {
        alignItems: "center",
        flexDirection: "row",
    },
    rowFlexEnd: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    rowFlexStart: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    rowSpaceBetween: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowSpaceAround: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    rowSpaceEvenly: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    rowCenter: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    header: {
        marginBottom: 15,
    },
    headerTitle: {
        color: COLORS.black,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 18
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    headerLink: {
        color: COLORS.black,
        fontSize: 15,
        marginRight: 3
    }
});


export default global;