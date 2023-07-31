import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Iconify } from 'react-native-iconify';
import { COLORS } from "../constants";
import global from "../styles/global";
import { StarIcon } from "../assets/svgs";
import { min } from "react-native-reanimated";


export default function Timer({ hours, minutes, seconds }) {
    const Ref = useRef(null);
 
    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');
    const [danger, setDanger] = useState(false);
 
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        if(hours == 0 && minutes == 0 && seconds < 30) setDanger(true);
        return {
            total, hours, minutes, seconds
        };
    }
 
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
 
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
 
    const clearTimer = (e) => {
 
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next   
        setTimer('00:00:00');
 
        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
 
    const getDeadTime = () => {
        let deadline = new Date();
 
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setHours(deadline.getHours() + hours);
        deadline.setMinutes(deadline.getMinutes() + minutes);
        deadline.setSeconds(deadline.getSeconds() + seconds);
        
        return deadline;
    }
 
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
 
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
 
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }

    return (
        <View style={[global.rowCenter, styles.time, { backgroundColor: danger ? "#DF4E4E" : COLORS.dark}]}>
            <Text style={styles.timeText}>{timer}</Text>
        </View> 
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

    timeText: {
        color: COLORS.white,
        fontSize: 12,
        fontFamily: "Andika_700Bold",
    },

    time: {
        borderRadius: 15,
        paddingHorizontal: 10
    },

    
})