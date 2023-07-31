import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableWithoutFeedback, Pressable } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";
import { AfriHappyIcon, AskAfriGreenIcon, CoinIcon, AfriCurrencyBlackIcon } from "../assets/svgs";
import { Asset } from "expo-asset";
import LearnCard from "../components/LearnCard";
import { Link } from "expo-router";
import QuestionCard from "../components/QuestionCard";
import Animated from "react-native-reanimated";
import QuizData from "../data/QuizData";
import Timer from "../components/Timer";



export default function Note() {
    const examQuestions = QuizData.questions;
    const [progress, setProgress] = useState(new Animated.Value(0));
    const [currentQuestionIndex, setCurrentQuestionIndex ] = useState(0);
    

    const progressAnimation = progress.interpolate({
        inputRange: [0, examQuestions.length],
        outputRange: ["0%", "100%"]
    });

    const handlePrev = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1)
    }

    const handleNext = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }


    

    return (
        <SafeAreaProvider style={{ flex: 1}}>
            <View style={[global.rowSpaceBetween, styles.header ]}>
                <View style={[{columnGap: 10}, global.row]}>
                    <Iconify icon="iconamoon:close-bold" size={35} color={COLORS.nutralColor} />
                </View>
                <View style={[global.rowCenter, { gap: 20 }]}>
                    <Text style={styles.steps}>{ currentQuestionIndex + 1}/{ examQuestions.length }</Text>
                    <Timer hours={2} minutes={30} seconds={0} />
                </View>
            </View>
            <View style={[styles.progressBar, global.columnAlignCenter]}>
                <Animated.View style={[styles.progress, { width: progressAnimation }]} >

                </Animated.View>
            </View>

            <ImageBackground source={{uri: Asset.fromModule(require("../assets/images/pattern.png")).uri}} resizeMode="repeat" style={{  flex: 1, width: "100%"}}>

                <ScrollView contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 20, paddingBottom: 70, justifyContent: "space-between" }}>
                     
                    <View style={{ marginBottom: 25 }}>
                        <Text style={styles.questionTitle}>Question {currentQuestionIndex + 1}</Text>
                        <Text style={styles.questionText}>{ examQuestions[currentQuestionIndex].question}</Text>
                    </View>

                    <QuestionCard options={examQuestions[currentQuestionIndex].options} />


                    <View style={[global.rowCenter, { gap: 6, paddingVertical: 40 }]}>
                        <Text style={styles.friend}>Ask a friend</Text>
                        <Iconify icon="humbleicons:user-asking" size={35} color={COLORS.blue} />
                    </View>

                </ScrollView>
            </ImageBackground>

            <View style={styles.topCard}>
                <View style={[global.rowSpaceBetween, { marginBottom: 25 }]}>
                    <Pressable onPress={handlePrev}
                        style={[styles.arrow, global.rowCenter, { backgroundColor: currentQuestionIndex == 0 ? "#ECEEF5" : COLORS.white, borderColor: currentQuestionIndex == 0 ? "#B4B9CA" : COLORS.black, }]}>
                        <Iconify icon="material-symbols:arrow-back-rounded" size={35} color={currentQuestionIndex == 0 ? "#B4B9CA" : COLORS.nutralColor} />
                    </Pressable>

                    <Iconify icon="material-symbols:page-info-rounded" size={35} color={COLORS.black} />
                    <Iconify icon="fluent:speaker-2-24-regular" size={35} color={COLORS.black} />
                    <Iconify icon="tabler:flag" size={35} color={COLORS.black} />

                    <Pressable onPress={handleNext}
                        style={[styles.arrow, global.rowCenter, { backgroundColor: currentQuestionIndex + 1 == examQuestions.length ? "#ECEEF5" : COLORS.white, borderColor: currentQuestionIndex + 1 == examQuestions.length ? "#B4B9CA" : COLORS.black, }]}>
                        <Iconify icon="material-symbols:arrow-forward-rounded" size={35} color={ currentQuestionIndex + 1 == examQuestions.length ? "#B4B9CA" : COLORS.nutralColor} />
                    </Pressable>
                </View>

                <View style={[styles.button, global.rowCenter]}>
                    <Text style={styles.buttonText}>Submit</Text>
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
        paddingHorizontal: 20,
        paddingBottom: 8,
        paddingTop: 40
    },

    steps: {
        fontSize: 15,
        fontFamily: "Andika_700Bold",
    },

    timeText: {
        color: COLORS.white,
        fontSize: 12,
        fontFamily: "Andika_700Bold",
    },

    time: {
        backgroundColor: COLORS.dark,
        borderRadius: 15,
        paddingHorizontal: 10
    },

    progressBar: {
        backgroundColor: COLORS.nutralColor,
        height: 12,
        width: "100%"
    },

    progress: {
        backgroundColor: COLORS.brandGreen,
        borderRadius: 20,
        height: 7
    },

    questionTitle: {
        color: COLORS.dark,
        fontSize: 17,
        fontFamily: "Andika_700Bold",
    },

    questionText: {
        color: COLORS.dark,
        fontSize: 16,
        fontFamily: "Andika_400Regular",
    },

    friend: {
        color: COLORS.blue,
        fontSize: 17,
        fontFamily: "Andika_700Bold",
    },

    topCard: {
        height: 170,
        backgroundColor: COLORS.gray,
        borderTopWidth: 2,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        paddingTop: 15,
        paddingHorizontal: 25,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    },

    topCardImage: {
        flex: 1,
        justifyContent: "center",
        width: "100%"
    },

    arrow: {
        height: 50,
        borderRadius: 18,
        borderWidth: 2,
        width: 50
    },


    button: {
        height: 65,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        borderLeftWidth: 5,
        borderBottomWidth: 5,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: COLORS.black,
        width: "100%",
    },

    buttonText: {
        color: COLORS.black,
        fontSize: 19,
        fontFamily: "Andika_700Bold",
    },


    
})