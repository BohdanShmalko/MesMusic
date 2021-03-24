import React, { FC } from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { useSelector } from "react-redux";
import { getTheme } from "../../../BLL/selectors/settingsSelector";
import { Icon } from "native-base";
import { navigationType } from "../../../types/types";

type PropType = {
  isLike: boolean;
  isAdded: boolean;
  toggleOverlayShare: () => void;
  navigation: navigationType;
};

interface Styles {
  mainContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  button: ViewStyle;
  heartIcon: TextStyle;
  leftIcon: TextStyle;
  rightIcon: TextStyle;
}

export const PostLike: FC<PropType> = ({
  isLike,
  isAdded,
  toggleOverlayShare,
  navigation,
}) => {
  const { firstPrimaryFont, secondPrimaryFont, secondMainColor } = useSelector(
    getTheme
  );

  let heartColor, addColor;
  isLike ? (heartColor = secondMainColor) : (heartColor = firstPrimaryFont);
  isAdded ? (addColor = secondPrimaryFont) : (addColor = firstPrimaryFont);

  const stl = StyleSheet.create<Styles>({
    mainContainer: { flexDirection: "row", justifyContent: "center" },
    leftContainer: { flexDirection: "row", flex: 1 },
    rightContainer: {},
    button: { padding: 10 },
    heartIcon: { color: heartColor, fontSize: 25 },
    leftIcon: { color: firstPrimaryFont, fontSize: 25 },
    rightIcon: { color: addColor, fontSize: 25 },
  });
  return (
    <View style={stl.mainContainer}>
      <View style={stl.leftContainer}>
        <TouchableOpacity
          style={stl.button}
          onPress={() => {
            console.log("change heart color");
          }}
        >
          <Icon name="heart" style={stl.heartIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={stl.button} onPress={toggleOverlayShare}>
          <Icon name="md-send" style={stl.leftIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={stl.button}
          onPress={() => {
            navigation.navigate("Comments");
          }}
        >
          <Icon name="chatbubbles" style={stl.leftIcon} />
        </TouchableOpacity>
      </View>
      <View style={stl.rightContainer}>
        <TouchableOpacity
          style={stl.button}
          onPress={() => {
            console.log("add this post to my profile");
          }}
        >
          <Icon name="md-bookmark" style={stl.rightIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
