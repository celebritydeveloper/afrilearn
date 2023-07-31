import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Text,
} from "react-native";
// import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import global from "../styles/global"
import { Iconify } from "react-native-iconify";
// import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
// import {
//   createMessage,
//   updateChatRoom,
//   createAttachment,
// } from "../../graphql/mutations";
// import * as ImagePicker from "expo-image-picker";

// import "react-native-get-random-values";
// import { v4 as uuidv4 } from "uuid";

export default function ChatInputBox ({ chatroom }) {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [progresses, setProgresses] = useState({});

  const onSend = async () => {
    // const authUser = await Auth.currentAuthenticatedUser();

    // const newMessage = {
    //   chatroomID: chatroom.id,
    //   text,
    //   userID: authUser.attributes.sub,
    // };

    // const newMessageData = await API.graphql(
    //   graphqlOperation(createMessage, { input: newMessage })
    // );

    // setText("");

    // // create attachments
    // await Promise.all(
    //   files.map((file) =>
    //     addAttachment(file, newMessageData.data.createMessage.id)
    //   )
    // );
    // setFiles([]);

    // // set the new message as LastMessage of the ChatRoom
    // await API.graphql(
    //   graphqlOperation(updateChatRoom, {
    //     input: {
    //       _version: chatroom._version,
    //       chatRoomLastMessageId: newMessageData.data.createMessage.id,
    //       id: chatroom.id,
    //     },
    //   })
    // );
  };

  const addAttachment = async (file, messageID) => {
    // const types = {
    //   image: "IMAGE",
    //   video: "VIDEO",
    // };

    // const newAttachment = {
    //   storageKey: await uploadFile(file.uri),
    //   type: types[file.type],
    //   width: file.width,
    //   height: file.height,
    //   duration: file.duration,
    //   messageID,
    //   chatroomID: chatroom.id,
    // };
    // return API.graphql(
    //   graphqlOperation(createAttachment, { input: newAttachment })
    // );
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   quality: 1,
    //   allowsMultipleSelection: true,
    // });

    // if (!result.cancelled) {
    //   if (result.selected) {
    //     setFiles(result.selected);
    //   } else {
    //     setFiles([result]);
    //   }
    // }
  };

  const uploadFile = async (fileUri) => {
    // try {
    //   const response = await fetch(fileUri);
    //   const blob = await response.blob();
    //   const key = `${uuidv4()}.png`;

    //   await Storage.put(key, blob, {
    //     contentType: "image/png", // contentType is optional
    //     progressCallback: (progress) => {
    //       console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
    //       setProgresses((p) => ({
    //         ...p,
    //         [fileUri]: progress.loaded / progress.total,
    //       }));
    //     },
    //   });
    //   return key;
    // } catch (err) {
    //   console.log("Error uploading file:", err);
    // }
  };

  return (
    <>
      {/* {files.length > 0 && (
        <View style={styles.attachmentsContainer}>
          <FlatList
            data={files}
            horizontal
            renderItem={({ item }) => (
              <>
                <Image
                  source={{ uri: item.uri }}
                  style={styles.selectedImage}
                  resizeMode="contain"
                />

                {progresses[item.uri] && (
                  <View
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      backgroundColor: "#8c8c8cAA",
                      padding: 5,
                      borderRadius: 50,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      {(progresses[item.uri] * 100).toFixed(0)} %
                    </Text>
                  </View>
                )}

                <MaterialIcons
                  name="highlight-remove"
                  onPress={() =>
                    setFiles((existingFiles) =>
                      existingFiles.filter((file) => file !== item)
                    )
                  }
                  size={20}
                  color="gray"
                  style={styles.removeSelectedImage}
                />
              </>
            )}
          />
        </View>
      )} */}

      <View style={[styles.container, global.rowSpaceBetween, { gap: 5 }]}>
        {/* Text Input */}
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder="How can I help you today?"
        />

        {/* Icon */}
        <View style={[styles.send, global.rowCenter ]}>
            <Iconify icon="noto:rocket" size={32} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    
    height: 76,
    paddingHorizontal: 20,
    alignItems: "center",
    position: "absolute",
    bottom: 70,
    borderTopWidth: 2,
    width: "100%"
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    height: 56,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: COLORS.black
  },

  send: {
    borderRadius: 20,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderColor: COLORS.black,
    height: 53,
    width: 53
  },


  attachmentsContainer: {
    alignItems: "flex-end",
  },
  selectedImage: {
    height: 100,
    width: 200,
    margin: 5,
  },
  removeSelectedImage: {
    position: "absolute",
    right: 10,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
});
