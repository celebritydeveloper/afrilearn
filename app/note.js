import React, { useState } from "react";
import { useRouter } from "expo-router";
import { StyleSheet, View, Text, Image, ScrollView, FlatList, TouchableWithoutFeedback, Pressable } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";
import {  IndicatorBlackIcon, StarIcon, CoinIcon, AfriCurrencyBlackIcon, FlatCoinIcon } from "../assets/svgs";
import { Asset } from "expo-asset";
import LearnCard from "../components/LearnCard";
import { Link } from "expo-router";
import QuestionCard from "../components/QuestionCard";
import Animated from "react-native-reanimated";
import QuizData from "../data/exam";
import Timer from "../components/Timer";
import BigButton from "../components/BigButton";
import StatusBadge from "../components/StatusBadge";
import NoteVideo from "../components/NoteVideo";



export default function Note() {
    const examQuestions = QuizData.questions;
    const router = useRouter();
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
                <TouchableWithoutFeedback style={[{columnGap: 10}, global.row]} onPress={() => router.back()}>
                    <Iconify icon="iconamoon:close-bold" size={35} color={COLORS.nutralColor} />
                </TouchableWithoutFeedback>
                <View style={[global.row, {gap: 65 }]}>
                    <View style={[global.row, { gap: 8 }]}>
                        <Iconify icon="fluent:speaker-2-24-filled" size={25} color={COLORS.nutralColor} />
                        <Text style={styles.steps}>Listen</Text>
                    </View>
                    <View style={[global.row, { gap: 8 }]}>
                        <Iconify icon="akar-icons:video" size={27} color={COLORS.nutralColor} />
                        <Text style={styles.steps}>Watch</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.progressBar, global.columnAlignCenter]}>
                <Animated.View style={[styles.progress, { width: progressAnimation }]} >

                </Animated.View>
            </View>



            <ScrollView contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 20, paddingBottom: 70, justifyContent: "space-between", backgroundColor: COLORS.white }}>
                     
                    <View style={{ marginBottom: 25 }}>
                        <Text style={styles.title}>Living things and non-living things</Text>
                        <View style={[global.row, { gap: 10 }]}>
                            <Text style={styles.questionText}>2mins read</Text>
                            <IndicatorBlackIcon />
                            <Text style={styles.questionText}>23k views</Text>
                        </View>
                    </View>

                    <View style={styles.noteImageContainer}>
                        <Image
                            style={styles.noteImage}
                            resizeMode="stretch"
                            source={{ uri: Asset.fromModule(require("../assets/images/biology.png")).uri }}
                        />
                    </View>

                    <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false } style={{ marginBottom: 35 }}>
                        <View style={[global.row, styles.action, { gap: 5 }]}>
                            <Iconify icon="iconamoon:comment-bold" size={28} color={COLORS.dark} />
                            <Text style={styles.actionText}>2.2k</Text>
                        </View>

                        <View style={[global.row, styles.action, { gap: 5 }]}>
                            <Iconify icon="icon-park-outline:like" size={25} color={COLORS.dark} />
                            <Text style={styles.actionText}>2k</Text>
                        </View>

                        <View style={[global.row, styles.action, { gap: 5 }]}>
                            <Iconify icon="solar:play-linear" size={25} color={COLORS.dark} />
                            <Text style={styles.actionText}>Watch</Text>
                        </View>

                        <View style={[global.row, styles.action, { gap: 5 }]}>
                            <Iconify icon="octicon:download-16" size={28} color={COLORS.dark} />
                        </View>

                        <View style={[global.row, styles.action, { gap: 5 }]}>
                            <Iconify icon="icon-park-outline:share-two" size={28} color={COLORS.dark} />
                        </View>

                        <View style={[global.row, styles.action, { gap: 5 }]}>
                            <Iconify icon="icon-park-outline:share-two" size={28} color={COLORS.dark} />
                        </View>
                    </ScrollView>

                    <View style={[styles.comment, global.columnAlignCenter]}>
                        <View style={[global.row, { gap: 14, marginBottom: 10 }]}>
                            <Text style={styles.commentTitle}>Comments</Text>
                            <Text style={styles.commentNumber}>2.2k</Text>
                        </View>
                        <View style={[global.rowSpaceBetween, { gap: 10 }]}>
                            <View style={[global.rowCenter, styles.profileImage]}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1536337005238-94b997371b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwxMnx8Ym95JTIwaW4lMjBjbGFzc3xlbnwwfHx8fDE2OTA2Nzg1OTl8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450",
                                    }}
                                />
                            </View>
                            <Text numberOfLines={2} style={styles.commentText}>I want to ask a question. If you are going to the term non-living things to clasify a creature Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>
                            <Iconify icon="ph:caret-down-bold" size={22} color={COLORS.dark} />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.noteText}>We can find many things around us, from mountains and oceans to plants and animals. The earth in which we live is made up of several things. These “things” can be categorized into two different types – Living and Non-living Things.</Text>
                        
                        <FlatList
                            data={[
                                { key: "All living things breathe, eat, grow, move, reproduce and have senses." },
                                { key: "Non-living things do not eat, grow, breathe, move and reproduce. They do not have senses." },
                            ]}
                            renderItem={({ item }) => {
                                return (
                                <View style={{ marginBottom: 1, padding: 0, paddingHorizontal: 8 }}>
                                    <Text style={styles.noteText}>{`\u2022 ${item.key}`}</Text>
                                </View>
                                );
                            }}
                        />

                        <Text style={styles.noteText}>Living things have “life,” though some might not show its evident signs. For instance, a tree would probably not react the same way a human would. It would not react when we hit it, and it might not be able to walk around. Though the signs of life displayed by them are not very observable, it does not make them non-living.</Text>

                        <Text style={styles.noteText}>Let us have a detailed look at the important characteristics of living and non-living things and the difference between the two.</Text>
                        
                        <Text style={styles.noteSubTitle}>Living things</Text>

                        <Text style={styles.noteText}>Living things exist and are alive and are made of microscopic structures called cells. They grow and exhibit movement or locomotion. They experience metabolism, which includes anabolic and catabolic reactions.</Text>

                        <Text style={styles.noteText}>Living things are capable of producing a new life which is of their own kind through the process of reproduction. Living things have a particular life span and are not immortal.</Text>

                        <Text style={styles.noteText}>Let us have a detailed look at the important characteristics of living and non-living things and the difference between the two.</Text>
                    </View>

                    <View style={styles.lesson}>
                        <View style={[global.row, { gap: 14, marginBottom: 3 }]}>
                            <Iconify icon="healthicons:exercise-weights" size={28} color={COLORS.dark} />
                            <Text style={styles.lessonTitle}>Lesson exercise</Text>
                        </View>

                        <Text style={styles.lessonText}>How well did you understand this topic? Complete the exercise below</Text>

                        <View style={[styles.lessonCard, global.row,]}>
                            <View style={[styles.star, global.rowCenter]}>
                                <StarIcon />
                            </View>
                            <Text style={styles.text}>Living things and non-living things</Text>
                        </View>

                        <View>
                            <Text style={styles.exercise}>Exercise stats:</Text>
                            <View style={[global.row, { gap: 28 }]}>
                                <View style={[global.row, { gap: 5 }]}>
                                    <Iconify icon="ph:question-bold" size={28} color={COLORS.brandGreen} />
                                    <Text style={styles.exerciseNumber}>10</Text>
                                </View>

                                <View style={[global.row, { gap: 5 }]}>
                                    <Iconify icon="ph:hash-bold" size={28} color={COLORS.brandGreen} />
                                    <Text style={styles.exerciseNumber}>20 Pt</Text>
                                </View>

                                <View style={[global.row, { gap: 5 }]}>
                                    <FlatCoinIcon />
                                    <View style={[global.row]}>
                                        <AfriCurrencyBlackIcon />
                                        <Text style={styles.exerciseNumber}>10</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.noteVideoContainer}>
                        <Text style={styles.sectionTitle}>Up next</Text>
                        
                        <NoteVideo text="started" status="started"
                            video="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwzODB8fGFic3RyYWN0fGVufDB8fHx8MTY5MDcxOTEwOXww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />

                        <NoteVideo text="completed" status="completed"
                            video="https://images.unsplash.com/photo-1552250575-e508473b090f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwxODV8fGFic3RyYWN0fGVufDB8fHx8MTY5MDc5MzU0M3ww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />

                        <NoteVideo text="pending" status="pending"
                            video="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw2NHx8YWJzdHJhY3R8ZW58MHx8fHwxNjkwNzE2NTMzfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />

                        <NoteVideo text="pending" status="pending"
                            video="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwzODB8fGFic3RyYWN0fGVufDB8fHx8MTY5MDcxOTEwOXww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />


                    </View>

                    <View style={[styles.buttonContainer]}>
                        <Pressable style={[styles.button, global.rowCenter]} onPress={() => router.push("/score")}>
                            <Text style={styles.buttonText}>Load more</Text>
                        </Pressable>
                    </View>



            </ScrollView>

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
        backgroundColor: "#ECEEF5",
        paddingHorizontal: 15,
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

    action: {
        backgroundColor: COLORS.grayLite,
        borderRadius: 20,
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    actionText: {
        color: COLORS.dark,
        fontSize: 14,
        fontFamily: "Andika_400Regular",
    },

    noteImageContainer: {
        borderRadius: 17,
        height: 196,
        marginBottom: 25,
        width: "100%",
    },

    noteImage: {
        borderRadius: 17,
        height: 196,
        width: "100%",
    },

    tinyLogo: {
        borderRadius: 17,
        height: 40,
        width: 40,
    },

    profileImage: {
        borderWidth: 3,
        borderRadius: 17,
        height: 45,
        width: 45,
    },

    progressBar: {
        backgroundColor: COLORS.nutralColor,
        height: 12,
        width: "100%"
    },

    comment: {
        backgroundColor: COLORS.grayLite,
        borderRadius: 30,
        height: 130,
        marginBottom: 20,
        paddingHorizontal: 15,
        paddingVertical: 5
    },

    commentTitle: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: "Andika_700Bold",
    },

    commentNumber: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: "Andika_400Regular",
    },

    commentText: {
        color: COLORS.dark,
        fontSize: 12,
        fontFamily: "Andika_400Regular",
        maxWidth: 280
    },

    noteText: {
        color: COLORS.nutralColor,
        fontSize: 16,
        fontFamily: "Andika_400Regular",
        lineHeight: 26,
        marginBottom: 30
    },

    noteSubTitle: {
        color: COLORS.dark,
        fontSize: 20,
        fontFamily: "Andika_700Bold",
        marginBottom: 18
    },

    lesson: {
        backgroundColor: COLORS.grayLite,
        borderRadius: 30,
        marginBottom: 35,
        paddingHorizontal: 15,
        paddingVertical: 20
    },

    lessonTitle: {
        color: COLORS.black,
        fontSize: 17,
        fontFamily: "Andika_700Bold",
    },

    lessonText: {
        color: COLORS.dark,
        fontSize: 14,
        fontFamily: "Andika_400Regular",
        lineHeight: 22,
    },

    progress: {
        backgroundColor: COLORS.brandGreen,
        borderRadius: 20,
        height: 7
    },

    title: {
        color: COLORS.dark,
        fontSize: 20,
        fontFamily: "Andika_700Bold",
    },

    time: {
        color: COLORS.dark,
        fontSize: 13,
        fontFamily: "Andika_400Regular",
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

    buttonContainer: {
        marginHorizontal: 45
    },


    buttonText: {
        color: COLORS.black,
        fontSize: 17,
        fontFamily: "Andika_700Bold",
    },


    lessonCard: {
        height: 120,
        backgroundColor: COLORS.brandGreen,
        borderRadius: 30,
        borderLeftWidth: 6,
        borderBottomWidth: 6,
        borderRightWidth: 3,
        borderTopWidth: 3,
        borderColor: COLORS.black,
        gap: 23,
        marginVertical: 18,
        paddingHorizontal: 18,
        width: "100%",
    },

    text: {
        color: COLORS.white,
        fontSize: 17,
        fontFamily: "Andika_700Bold",
        width: 200
    },

    exercise: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: "Andika_700Bold",
        marginBottom: 5
    },

    exerciseNumber: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: "Andika_700Bold"
    },

    button: {
        height: 68,
        backgroundColor: COLORS.white,
        borderRadius: 22,
        borderLeftWidth: 6,
        borderBottomWidth: 6,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: COLORS.black,
        width: "100%",
    },

    star: {
        backgroundColor: "#FBEFE1",
        borderRadius: 100,
        height: 95,
        width: 95
    },

    sectionTitle: {
        color: COLORS.black,
        fontSize: 18,
        fontFamily: "Andika_700Bold",
        marginBottom: 18
    },

    noteVideoContainer: {
        marginBottom: 40,
    },
})