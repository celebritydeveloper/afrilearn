import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable, Dimensions } from "react-native";
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";
import { LeaderBadgeIcon, ChartIcon, CircleIcon, AfriCurrencyColorIcon } from "../assets/svgs";
const {width, height} = Dimensions.get('screen');
import Svg, { G, Path, Mask, Defs, ClipPath, Rect, Circle, } from "react-native-svg";
const Circle_Length = 100;
const Radius = Circle_Length / (2 * Math.PI);
import Animated, {
    useAnimatedProps,
    withSpring,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming,
  } from "react-native-reanimated";

import * as Progress from 'react-native-progress';


export default function PerformanceCard() {
    const [progress, setProgress] = useState(0);
    const [indeterminate, setIndeterminate] = useState(true);


    function animate() {
        let progress = 0;
        setProgress(progress);
        setTimeout(() => {
          setIndeterminate(false);
          setInterval(() => {
            progress += Math.random() / 5;
            if (progress > 1) {
              progress = 1;
            }
            setProgress(progress);
          }, 500);
        }, 1500);
    }


    useEffect(() => {
     //animate()
    }, [])

    return (
        <View style={[styles.progressCard, global.rowCenter,]}>
            {/* <View style={[styles.progressContainer, global.rowCenter]}>
                <View style={[styles.progressBar, global.rowCenter]}>
                    <View style={[styles.progressInner, global.rowCenter]}>
                        <Text>50%</Text>
                    </View>
                </View>
            </View> */}
            <Progress.Circle size={30} indeterminate={indeterminate} progress={progress}  />
        </View>
        
    )
}


const styles = StyleSheet.create({

    progressCard: {
        height: 120,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: COLORS.nutralColor,
        width: 120
    },

    progressContainer: {
        height: 90,
        backgroundColor: COLORS.dark,
        borderRadius: 100,
        width: 90
    },


    progressInner: {
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 100,
        width: 50
    },


    progressBar: {
        height: 80,
        backgroundColor: COLORS.dark,
        borderRadius: 100,
        borderWidth: 10,
        borderColor: "yellow",
        width: 80
    },



    text: {
        color: COLORS.dark,
        fontSize: 16,
        fontFamily: "Andika_700Bold",
        lineHeight: 23,
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

    amount: {
        color: COLORS.darkBrown,
        fontSize: 16,
        fontFamily: "Andika_700Bold",
        lineHeight: 35
    },
    
})