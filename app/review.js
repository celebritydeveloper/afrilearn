import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableWithoutFeedback, Pressable, Switch } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";
import { AfriSadIcon, } from "../assets/svgs";
import { Asset } from "expo-asset";
import LearnCard from "../components/LearnCard";
import { Link, useRouter } from "expo-router";
import QuestionCard from "../components/ReviewQuestionCard";
import Animated, { interpolate, useSharedValue } from "react-native-reanimated";
import QuizData from "../data/exam";
import Timer from "../components/Timer";
import * as Progress from 'react-native-progress';



export default function ReviewExam() {
    const examQuestions = QuizData.questions;
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    // const progress = useSharedValue(0);
    const [currentQuestionIndex, setCurrentQuestionIndex ] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    

    // const progressAnimation = interpolate(progress, [0, examQuestions.length], ["0%", "100%"]);

    const handlePrev = () => {
        setProgress(currentQuestionIndex - (examQuestions.length / 100))
        setCurrentQuestionIndex(currentQuestionIndex - 1)
    }

    const handleNext = () => {
        setProgress(currentQuestionIndex + (examQuestions.length / 100))
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }


    

    return (
        <SafeAreaProvider style={{ flex: 1}}>
            <View style={[global.rowSpaceBetween, styles.header ]}>
                <TouchableWithoutFeedback style={[{columnGap: 10}, global.row]} onPress={() => router.back()}>
                    <Iconify icon="iconamoon:close-bold" size={35} color={COLORS.nutralColor} />
                </TouchableWithoutFeedback>
                <Text style={styles.steps}>{ currentQuestionIndex + 1}/{ examQuestions.length }</Text>
            </View>

            <Progress.Bar progress={progress} 
                animationConfig={{ bounciness: 10 }}
                width={500} height={12} borderWidth={0} color={COLORS.brandGreen} unfilledColor={COLORS.nutralColor} />

            <ImageBackground source={{uri: Asset.fromModule(require("../assets/images/pattern.png")).uri}} resizeMode="repeat" style={{  flex: 1, width: "100%"}}>

                <ScrollView contentContainerStyle={{  paddingHorizontal: 12, paddingTop: 10, paddingBottom: 180 }}>
                     
                    <View style={{ marginBottom: 25 }}>
                        <Text style={styles.questionTitle}>Question {currentQuestionIndex + 1}</Text>
                        <Text style={styles.questionText}>{ examQuestions[currentQuestionIndex].question}</Text>
                    </View>

                    <View style={styles.explanation}>
                        <View style={[global.rowSpaceBetween, { marginBottom: 18}]}>
                            <Text style={styles.explanationTitle}>Explanation</Text>
                            <View style={[global.rowCenter, {gap: 5 }]}>
                                <Text style={styles.more}>More</Text>
                                <Switch
                                    trackColor={{ false: "#B4B9CA", true: "#B4B9CA" }}
                                    thumbColor={isEnabled ? "white" : COLORS.white}
                                    ios_backgroundColor={ COLORS.background }
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>
                        <Text style={styles.explanationText}>The study of animals. Other branches include Anatomy (the study of the structure of organisms)</Text>
                    </View>

                    <QuestionCard options={examQuestions[currentQuestionIndex].options} />

                </ScrollView>
            </ImageBackground>

            <View style={styles.bottomCard}>
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

                <View style={[global.rowSpaceBetween]}>
                    <View style={[global.row, { gap: 7 }]}>
                        <AfriSadIcon />
                        <Text style={styles.answer}>Incorrect!</Text>
                    </View>
                    <View style={[styles.button, global.rowCenter]}>
                        <Text style={styles.buttonText}>Done</Text>
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
        paddingHorizontal: 20,
        paddingBottom: 8,
        paddingTop: 40
    },

    steps: {
        fontSize: 15,
        fontFamily: "Andika_700Bold",
    },

    more: {
        fontSize: 18,
        fontFamily: "Andika_400Regular",
    },

    answer: {
        color: "#DF4E4E",
        fontSize: 17,
        fontFamily: "Andika_700Bold",
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

    explanation: {
        backgroundColor: "#E7F4EA",
        borderRadius: 20,
        borderWidth: 2,
        marginBottom: 30,
        paddingHorizontal: 15,
        paddingVertical: 10
    },

    explanationTitle: {
        color: COLORS.dark,
        fontSize: 18,
        fontFamily: "Andika_700Bold",
    },

    explanationText: {
        color: COLORS.dark,
        fontSize: 17,
        fontFamily: "Andika_400Regular",
        lineHeight: 23
    },

    bottomCard: {
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
        height: 60,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        borderLeftWidth: 5,
        borderBottomWidth: 5,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: COLORS.black,
        width: 160,
    },

    buttonText: {
        color: COLORS.black,
        fontSize: 19,
        fontFamily: "Andika_700Bold",
    },


    
})