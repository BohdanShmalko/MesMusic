import React, { FC, useState } from "react";
import {
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { LikeType, navigationType } from "../../types/types";
import { Text, Thumbnail } from "native-base";
import { Overlay } from "../Common/Overlay";
import { Post } from "../Common/Post/Post";
import { useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = {
  navigation: navigationType;
  data: LikeType;
};
const screenHeight = Dimensions.get("window").height;

interface Styles {
  mainContainer: ViewStyle;
  mainTouchable: ViewStyle;
  leftContainer: ViewStyle;
  centerContainer: ViewStyle;
  text: TextStyle;
  bold: TextStyle;
  complainButton: ViewStyle;
  rightContainer: ViewStyle;
  rightButton: ViewStyle;
  rightText: TextStyle;
  overlay: ViewStyle;
  overlayContainer: ViewStyle;
}

export const Like: FC<PropType> = ({ data, navigation }) => {
  const { date, id, whatLiked, whoLiked, type } = data;
  const { id: whoLikeId, name: whoLikeName, photo: whoLikePhoto } = whoLiked;
  const language = useSelector(getLanguage);

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => setVisible(!visible);

  const { secondPrimaryFont, secondMainColor } = useSelector(getTheme);

  const stl = StyleSheet.create<Styles>({
    mainContainer: {
      flex: 1,
      flexDirection: "row",
      padding: 15,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: 10,
      margin: 5,
    },
    mainTouchable: { flex: 1, flexDirection: "row" },
    leftContainer: { flex: 1 },
    centerContainer: { flex: 3 },
    text: { color: secondPrimaryFont },
    bold: { fontWeight: "bold", color: secondPrimaryFont },
    complainButton: {
      backgroundColor: secondMainColor,
      padding: 5,
      borderRadius: 5,
    },
    rightContainer: { paddingLeft: 5, alignItems: "center", flex: 1 },
    rightButton: { alignItems: "center" },
    rightText: { fontSize: 10, textAlign: "center", color: secondPrimaryFont },
    overlay: {
      backgroundColor: "rgba(0,0,0,0)",
      maxHeight: screenHeight / 1.3,
    },
    overlayContainer: { alignItems: "center" },
  });

  return (
    <View style={stl.mainContainer}>
      <TouchableOpacity
        style={stl.mainContainer}
        onLongPress={() => {
          console.log("delete like");
        }}
      >
        <View style={stl.leftContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Thumbnail source={{ uri: whoLikePhoto }} />
          </TouchableOpacity>
        </View>
        <View style={stl.centerContainer}>
          {type === "like" && (
            <TouchableOpacity onPress={toggleOverlay}>
              <Text style={stl.text}>
                <Text style={stl.bold}>{whoLikeName} </Text>
                {vocabulary["like post"][language]}
              </Text>
            </TouchableOpacity>
          )}
          {type === "comment" && (
            <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
              <Text style={stl.text}>
                <Text style={stl.bold}>{whoLikeName} </Text>
                {vocabulary["commented post"][language]}
              </Text>
            </TouchableOpacity>
          )}
          {type === "complain" && (
            <TouchableOpacity
              onPress={() => navigation.navigate("Comments")}
              style={stl.complainButton}
            >
              <Text style={stl.text}>
                <Text style={stl.bold}>{whoLikeName} </Text>
                {vocabulary["Complained comments"][language]}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={stl.rightContainer}>
          <TouchableOpacity style={stl.rightButton} onPress={toggleOverlay}>
            <Thumbnail square source={{ uri: whatLiked.uris[0].uri }} />
            <Text style={stl.rightText}>{date}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Overlay
        visible={visible}
        setVisible={toggleOverlay}
        transparent
        style={stl.overlay}
      >
        <View style={stl.overlayContainer}>
          <Post navigation={navigation} {...whatLiked} />
        </View>
      </Overlay>
    </View>
  );
};
