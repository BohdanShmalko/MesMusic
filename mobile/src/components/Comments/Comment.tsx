import React, { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Icon, Thumbnail } from "native-base";
import { cutText } from "../../helpers/cutText";
import { Overlay } from "../Common/Overlay";
import { ButtonInOverlay } from "../Common/ButtonInOverlay";
import { CommentType, navigationType } from "../../types/types";
import { useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = CommentType & { navigation: navigationType };

interface Styles {
  mainContainer: ViewStyle;
  left: ViewStyle;
  center: ViewStyle;
  right: ViewStyle;
  text: TextStyle;
  overlayContainer: ViewStyle;
  overlayButton: ViewStyle;
  overlayText: TextStyle;
}

export const Comment: FC<PropType> = ({
  navigation,
  id,
  text,
  whoComment,
  isMy,
  isComplain,
}) => {
  const [isAllComment, setIsAllComment] = useState(false);
  const changeAllComment = () => setIsAllComment(!isAllComment);

  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => setVisible(!visible);

  const cut200Symbols = cutText(200);
  const {
    id: whoCommentId,
    name: whoCommentName,
    photo: whoCommentPhoto,
  } = whoComment;
  const { secondPrimaryFont, secondMainColor } = useSelector(getTheme);
  const language = useSelector(getLanguage);

  const stl = StyleSheet.create<Styles>({
    mainContainer: {
      backgroundColor: isComplain ? secondMainColor : "rgba(255,255,255,0.3)",
      margin: 10,
      padding: 5,
      borderRadius: 5,
      flexDirection: "row",
    },
    left: { flex: 3 },
    center: { flex: 10 },
    right: { flex: 1 },
    text: { color: secondPrimaryFont },
    overlayContainer: { alignItems: "center" },
    overlayButton: { borderBottomColor: secondPrimaryFont },
    overlayText: { color: secondPrimaryFont },
  });

  return (
    <View style={stl.mainContainer}>
      <View style={stl.left}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View>
            <Thumbnail source={{ uri: whoCommentPhoto }} />
          </View>
          <View>
            <Text style={stl.text}>{whoCommentName}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={stl.center}>
        <TouchableOpacity onPress={changeAllComment}>
          {isAllComment ? (
            <Text style={stl.text}>{text}</Text>
          ) : (
            <Text style={stl.text}>{cut200Symbols(text)}</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={stl.center}>
        <TouchableOpacity onPress={toggleOverlay}>
          <Icon style={{ color: secondPrimaryFont }} name="md-menu" />
        </TouchableOpacity>
      </View>

      <Overlay visible={visible} setVisible={toggleOverlay} transparent>
        <View style={stl.overlayContainer}>
          {isMy ? (
            <ButtonInOverlay
              style={stl.overlayButton}
              textStyle={stl.overlayText}
              title={vocabulary["delete comment"][language]}
            />
          ) : (
            <ButtonInOverlay
              style={stl.overlayButton}
              textStyle={stl.overlayText}
              title={vocabulary["complain author"][language]}
            />
          )}
        </View>
      </Overlay>
    </View>
  );
};
