import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";
import { AfriHappyBigIcon, QuestionIcon, CheckMarkIcon, XMarkIcon, SkipIcon, CircleIcon } from "../assets/svgs";
import { Asset } from "expo-asset";
import LearnCard from "../components/LearnCard";
import { Link, useRouter } from "expo-router";
import QuestionCard from "../components/QuestionCard";
import QuizData from "../data/exam";
import Timer from "../components/Timer";



export default function Score() {
    const examQuestions = QuizData.questions;
    const router = useRouter();

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: COLORS.white}}>

                <ScrollView contentContainerStyle={{ paddingHorizontal: 35, paddingTop: 20, paddingBottom: 70, justifyContent: "space-between" }}>
                    <View style={[styles.header, global.columnCenter]}>
                        <AfriHappyBigIcon />
                        <Text style={styles.title}>You crushed it!</Text>
                        <View style={[global.rowCenter, { gap: 3 }]}>
                            <Text style={styles.subject}>WAEC</Text>
                            <Text style={styles.dot}>.</Text>
                            <Text style={styles.subject}>2018</Text>
                            <Text style={styles.dot}>.</Text>
                            <Text style={styles.subject}>Biology</Text>
                        </View>
                    </View>

                    <View style={[styles.badge, global.rowCenter]}>
                        <Iconify icon="ph:exam-fill" size={35} />
                    </View>


                    <View style={[styles.scoreBoard, global.rowCenter]}>
                        <Text style={styles.scoreBoardText}>98%</Text>
                    </View>

                    <View style={{ paddingHorizontal: 13, marginBottom: 30 }}>
                        <View style={[global.row, { gap: 5 }]}>
                            <Text style={styles.grade}>Grade</Text>
                            <CircleIcon />
                            <Text style={styles.grade}>A1</Text>
                        </View>
                        <View style={[global.rowSpaceBetween,]}>
                            <View style={styles.gradePercent}></View>
                            <View style={styles.gradePercent}></View>
                            <View style={styles.gradePercent}></View>
                            <View style={styles.gradePercent}></View>
                            <View style={styles.gradePercent}></View>
                            <View style={styles.gradePercent}></View>
                            <View style={styles.gradePercent}></View>
                            <View style={styles.gradePercent}></View>
                            <View style={styles.gradePercent}></View>
                        </View>
                    </View>

                    
                    <View style={{ marginVertical: 25, paddingHorizontal: 20 }}>
                        <View style={[global.rowSpaceBetween, { marginBottom: 25}]}>
                            <View style={[global.row, { gap: 12 }]}>
                                <QuestionIcon />    
                                <Text style={styles.scoreTitle}>Questions</Text>
                            </View>
                            <View style={[styles.scoreMark, global.rowCenter]}>
                                <Text style={styles.scoreMarkText}>60</Text>
                            </View>
                        </View>

                        <View style={[global.rowSpaceBetween, { marginBottom: 25}]}>
                            <View style={[global.row, { gap: 12 }]}>
                                <CheckMarkIcon />    
                                <Text style={styles.scoreTitle}>Correct</Text>
                            </View>
                            <View style={[styles.scoreMark, global.rowCenter]}>
                                <Text style={styles.scoreMarkText}>56</Text>
                            </View>
                        </View>

                        <View style={[global.rowSpaceBetween, { marginBottom: 25}]}>
                            <View style={[global.row, { gap: 12 }]}>
                                <XMarkIcon />    
                                <Text style={styles.scoreTitle}>Wrong</Text>
                            </View>
                            <View style={[styles.scoreMark, global.rowCenter]}>
                                <Text style={styles.scoreMarkText}>2</Text>
                            </View>
                        </View>

                        <View style={[global.rowSpaceBetween, { marginBottom: 25}]}>
                            <View style={[global.row, { gap: 12 }]}>
                                <SkipIcon />    
                                <Text style={styles.scoreTitle}>Skipped</Text>
                            </View>
                            <View style={[styles.scoreMark, global.rowCenter]}>
                                <Text style={styles.scoreMarkText}>2</Text>
                            </View>
                        </View>

                        <View style={[global.rowSpaceBetween, { marginBottom: 25}]}>
                            <View style={[global.row, { gap: 12 }]}>
                                <Iconify icon="ph:hash-bold" size={45} /> 
                                <Text style={styles.scoreTitle}>Points</Text>
                            </View>
                            <View style={[styles.scoreMark, global.rowCenter]}>
                                <Text style={styles.scoreMarkText}>50 Pt</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>

            <View style={styles.bottomCard}>
                <View style={[global.rowSpaceBetween]}>
                    <TouchableOpacity style={[global.columnCenter]} onPress={() => router.push("/review")}>
                        <Iconify icon="ic:round-manage-search" size={35} />
                        <Text style={styles.bottomCardText}>Review</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[global.columnCenter]}>
                        <Iconify icon="material-symbols:refresh-rounded" size={35} />
                        <Text style={styles.bottomCardText}>Retake</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[global.columnCenter]}>
                        <Iconify icon="majesticons:share-line" size={35} />
                        <Text style={styles.bottomCardText}>Share</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[global.columnCenter]}>
                        <Iconify icon="fluent:data-bar-vertical-16-regular" size={35} />
                        <Text style={styles.bottomCardText}>Report</Text>
                    </TouchableOpacity>
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
        marginBottom: 20,
        paddingBottom: 8,
        paddingTop: 20
    },

    badge: {
        borderRadius: 20,
        borderLeftWidth: 5,
        borderBottomWidth: 5,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: COLORS.black,
        height: 53,
        left: 30,
        position: "absolute",
        top: 35,
        width: 53
    },

    title: {
        color: COLORS.dark,
        fontSize: 24,
        fontFamily: "Andika_700Bold",
    },

    scoreTitle: {
        color: COLORS.dark,
        fontSize: 16,
        fontFamily: "Andika_700Bold",
    },

    scoreMark: {
        backgroundColor: COLORS.grayLite,
        borderRadius: 13,
        height: 36,
        paddingHorizontal: 20
    },

    scoreMarkText: {
        color: COLORS.dark,
        fontSize: 16,
        fontFamily: "Andika_700Bold",
    },

    subject: {
        color: COLORS.dark,
        fontSize: 12,
        fontFamily: "Andika_700Bold",
        lineHeight: 17,
        textTransform: "uppercase"
    },

    dot: {
        color: COLORS.dark,
        fontSize: 13,
        fontFamily: "Andika_700Bold",
        lineHeight: 17,
    },

    scoreBoard: {
        backgroundColor: "#7CF5B2",
        borderColor: COLORS.black,
        borderRadius: 50,
        borderWidth: 3,
        height: 130,
        marginBottom: 10,
        width: "100%"
    },

    scoreBoardText: {
        fontSize: 49,
        fontFamily: "Andika_700Bold",
    },

    grade: {
        color: COLORS.dark,
        fontSize: 16,
        fontFamily: "Andika_700Bold",
        marginBottom: 3
    },

    gradePercent: {
        backgroundColor: COLORS.brandGreen,
        borderColor: COLORS.black,
        borderRadius: 20,
        borderWidth: 1,
        height: 9,
        width: 26
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



    bottomCard: {
        height: 99,
        backgroundColor: COLORS.grayLite,
        borderTopWidth: 3,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        paddingTop: 15,
        paddingHorizontal: 25,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    },

    bottomCardText: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: "Andika_700Bold",
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