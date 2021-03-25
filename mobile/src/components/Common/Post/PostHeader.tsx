import React, { FC } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from "react-native";

import { useSelector } from "react-redux";
import { getTheme } from "../../../BLL/selectors/settingsSelector";
import { Icon, Thumbnail } from "native-base";
import { navigationType } from "../../../types/types";

type PropType = {
  userUri: string;
  publicationTime: string;
  useMenu: boolean;
  toggleOverlay: () => void;
  name: string;
  navigation: navigationType;
};

interface Styles {
  mainContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  photoContainer: ViewStyle;
  photo: ImageStyle;
  nameText: TextStyle;
  timeText: TextStyle;
  menuButton: ViewStyle;
  menuIcon: TextStyle;
}

export const PostHeader: FC<PropType> = ({
  toggleOverlay,
  userUri,
  publicationTime,
  useMenu,
  name,
  navigation,
}) => {
  const { secondPrimaryFont } = useSelector(getTheme);

  const stl = StyleSheet.create<Styles>({
    mainContainer: {
      flexDirection: "row",
      padding: 10,
      justifyContent: "center",
    },
    leftContainer: { flexDirection: "row", flex: 1 },
    rightContainer: {},
    photoContainer: { paddingRight: 10 },
    photo: { width: 32, height: 32 },
    nameText: { color: secondPrimaryFont },
    timeText: { fontSize: 10, color: secondPrimaryFont },
    menuButton: { padding: 5 },
    menuIcon: { fontSize: 25, color: secondPrimaryFont },
  });
  return (
    <View style={stl.mainContainer}>
      <View style={stl.leftContainer}>
        <View style={stl.photoContainer}>
          <TouchableOpacity
            onPress={() => {
              // ...
              navigation.navigate("Profile");
            }}
          >
            <Thumbnail style={stl.photo} source={{ uri: userUri }} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={stl.nameText}>{name}</Text>
          <Text style={stl.timeText}>{publicationTime}</Text>
        </View>
      </View>
      <View style={stl.rightContainer}>
        {useMenu && (
          <TouchableOpacity style={stl.menuButton} onPress={toggleOverlay}>
            <Icon name="md-menu" style={stl.menuIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
