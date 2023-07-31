import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
// dayjs.extend(relativeTime);
// import { Auth, JS, Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import { COLORS } from "../constants";
import global from "../styles/global";
// import ImageAttachments from "./ImageAttachments";
// import VideoAttachments from "./VideoAttachments";
// import moment from "moment";

export default function Message ({ message }) {
  const [isMe, setIsMe] = useState(false);
  const [downloadAttachments, setDownloadedAttachments] = useState([]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    const isMyMessage = () => {
      //const authUser = await Auth.currentAuthenticatedUser();

      setIsMe(message.user.name === "Lukas");
    };

    isMyMessage();
  }, []);

//   useEffect(() => {
//     const downloadAttachments = async () => {
//       if (message.Attachments.items) {
//         const downloadedAttachments = await Promise.all(
//           message.Attachments.items.map((attachment) =>
//             Storage.get(attachment.storageKey).then((uri) => ({
//               ...attachment,
//               uri,
//             }))
//           )
//         );

//         setDownloadedAttachments(downloadedAttachments);
//       }
//     };
//     downloadAttachments();
//   }, [JSON.stringify(message.Attachments.items)]);

//   const imageContainerWidth = width * 0.8 - 30;

//   const imageAttachments = downloadAttachments.filter(
//     (at) => at.type === "IMAGE"
//   );
//   const videoAttachments = downloadAttachments.filter(
//     (at) => at.type === "VIDEO"
//   );

  return (
    <View style={[global.row]}>
      <View
        style={[ isMe ? styles.bubbleMe : styles.bubble,
          {
            backgroundColor: isMe ? "#DCF8C5" : "white",
            alignSelf: isMe ? "flex-start" : "flex-end",
          },
        ]}
      >
        {downloadAttachments.length > 0 && (
          <View style={[{ width: imageContainerWidth }, styles.images]}>
            {/* <ImageAttachments attachments={imageAttachments} />

            <VideoAttachments
              attachments={videoAttachments}
              width={imageContainerWidth}
            /> */}
          </View>
        )}
        <Text>{ message.text }</Text>
        {/* <Text style={styles.time}>{moment(message.createdAt).toObject().hours}:{moment(message.createdAt).toObject().minutes}</Text> */}
      </View>
      { isMe ? <Text>Me</Text> : <Text>You</Text> }
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    margin: 5,
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 30,
    maxWidth: "80%",
    borderRadius: 20,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderColor: COLORS.black,
  },

  bubbleMe: {
    margin: 5,
    padding: 10,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 35,
    maxWidth: "80%",
    borderRadius: 20,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderColor: COLORS.black,
  },



  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
  images: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: "50%",
    aspectRatio: 1,
    padding: 3,
  },
  image: {
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
  },
});
