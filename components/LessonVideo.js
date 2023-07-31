import React, { useState, useRef } from 'react';
import { View, StyleSheet, Button, Pressable, Text, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';
import { Iconify } from 'react-native-iconify';
import { COLORS } from '../constants';
import { IndicatorIcon } from '../assets/svgs';
import global from '../styles/global';
import ProgressBar from "react-native-progress/Bar";


export default function LessonVideo({ subject, topic }) {
  const player = useRef();
  const [status, setStatus] = useState({});
  const [paused, setPaused] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleMainButtonTouch = () => {
    if(progress >= 1) {
      player.current.seek(0);
    }
    setPaused(!paused)
  }

  const handleProgressTouch = (e) => {
    const position = e.nativeEvent.locationX;
    const progress = (position / 250) * duration;
    player.current.seek(progress)
  }

  const handleLoad = (meta) => {
    setDuration(meta.duration)
  }

  const handleProgress = (progress) => {
    setProgress(progress.currentTime / duration)
  }

  const handleEnd = () => {
    setPaused(true);
  }


  return (
    <View style={{ marginRight: 15, flex: 1, width: 160 }}>
      <View style={styles.container}>
        {/* <Video
          ref={player}
          paused={paused}
          onLoad={handleLoad}
          onProgress={handleProgress}
          onTouchEnd={handleEnd}
          style={styles.video}
          
          source={{
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
        /> */}
        
        {/* <Pressable style={styles.buttons} onPress={handleMainButtonTouch}>
          { paused ? <Iconify icon="solar:pause-bold" size={36} color={COLORS.dark} /> : <Iconify icon="solar:play-bold" size={36} color={COLORS.dark} />}
        </Pressable> */}


        <TouchableWithoutFeedback style={styles.control} onPress={handleProgressTouch}>
          <View>
            <ProgressBar 
              progress={progress}
              color="red" 
              unfilledColor="#B2B7CB" 
              borderColor="transparent"
              borderBottomLeftRadius={190}
              borderBottomRightRadius={190}
              width={153}
              height={15}
            />
          </View>
        </TouchableWithoutFeedback>
        
      </View>
      <Text style={styles.subject}>{ subject }</Text>
      
      <Text style={styles.topic}>{ topic }</Text>

      <View style={[global.rowCenter, styles.indicator]}>
        <IndicatorIcon />
        <Text style={styles.indicatorText}>Started</Text>
      </View>

      <Text style={styles.views}>62k views</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    borderWidth: 3,
    marginBottom: 10,
  },

  video: {
    borderRadius: 25,
    width: "100%",
    maxWidth: 160,
    height: 120,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    top: 45,
    left: 60
  },

  subject: {
    color: COLORS.nutralColor,
    fontFamily: "Andika_400Regular",
    fontSize: 12,
    textTransform: "uppercase"
  },

  topic: {
    fontFamily: "Andika_700Bold",
    fontSize: 13,
    lineHeight: 26,
  },

  views: {
    color: COLORS.nutralColor,
    fontFamily: "Andika_400Regular",
    fontSize: 12,
  },

  indicator: {
    backgroundColor: COLORS.lightYellow,
    borderColor: COLORS.yellow,
    borderRadius: 18,
    borderWidth: 2,
    gap: 6,
    marginBottom: 5,
    marginTop: 0,
    paddingVertical: 4,
    width: 100
  },

  indicatorText: {
    fontFamily: "Andika_700Bold",
    fontSize: 10,
    textTransform: "uppercase"
  },

  control: {
    bottom: 0,
    position: "absolute",
    left: 0,
    right: 0
  },

});