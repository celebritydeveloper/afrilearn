import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";
import { StarIcon } from "../assets/svgs";


export default function ReviewQuestionCard({ questions, answer }) {

    return (
        <>
        {questions.options.map((option, index) => (
            <View style={[styles.card, global.rowSpaceBetween, 
                { backgroundColor: questions.answer === option.option ? COLORS.brandGreen : COLORS.gray, 
                    borderColor: questions.answer === option.option ? COLORS.nutralColor : answer === option.option ? COLORS.darkRed : COLORS.nutralColor, }
            ]} 
                key={index}
            >
                <View style={[global.row,{ gap: 5}]}>
                    <Text style={[styles.text, { color: questions.answer === option.option ? COLORS.white : COLORS.dark }]}>{option.id}.</Text>
                    <Text style={[styles.text, { color: questions.answer === option.option ? COLORS.white : COLORS.dark }]}>{ option.option }</Text>
                </View>
                { questions.answer === option.option && <Iconify icon="material-symbols:check-circle-rounded" size={35} color={COLORS.white} />}
                
            </View>
        ))}
        </>   
    )
}


const styles = StyleSheet.create({

    card: {
        height: 70,
        borderRadius: 30,
        borderLeftWidth: 5,
        borderBottomWidth: 5,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: COLORS.nutralColor,
        gap: 8,
        marginBottom: 13,
        paddingHorizontal: 15,
        width: "100%",
    },

    text: {
        fontSize: 15,
        fontFamily: "Andika_700Bold"
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

    star: {
        backgroundColor: COLORS.darkGray,
        borderRadius: 100,
        borderWidth: 4,
        height: 95,
        width: 95
    },
    
})