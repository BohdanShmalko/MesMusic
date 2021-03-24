import React, { FC, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";

import { useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../../BLL/selectors/settingsSelector";
import vocabulary from "../../../vocabulary/vocabulary";
import { cutText } from "../../../helpers/cutText";

type PropType = {
  LikeCount: number;
  urisLength: number;
  description: string;
};

interface Styles {
  mainContainer: ViewStyle;
  likes: ViewStyle;
  textLikeCount: TextStyle;
  textPublicationsCount: TextStyle;
  text: TextStyle;
  bold: TextStyle;
}

export const PostDescription: FC<PropType> = ({
  description,
  LikeCount,
  urisLength,
}) => {
  const language = useSelector(getLanguage);
  const { secondPrimaryFont } = useSelector(getTheme);
  const cut50Symbols = cutText(50);

  const [isAllText, setIsAllText] = useState(false);
  const toggleAllText = () => setIsAllText(!isAllText);

  const stl = StyleSheet.create<Styles>({
    mainContainer: { paddingHorizontal: 10, paddingBottom: 10 },
    likes: { flexDirection: "row" },
    textLikeCount: {
      fontWeight: "bold",
      flex: 1,
      color: secondPrimaryFont,
    },
    textPublicationsCount: {
      fontWeight: "bold",
      color: secondPrimaryFont,
    },
    text: { color: secondPrimaryFont },
    bold: {
      fontWeight: "bold",
      color: secondPrimaryFont,
    },
  });
  return (
    <View style={stl.mainContainer}>
      <View style={stl.likes}>
        <Text style={stl.textLikeCount}>
          {vocabulary["like"][language]} : {LikeCount}
        </Text>
        <Text style={stl.textPublicationsCount}>
          {vocabulary["publications"][language]} : {urisLength}
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={toggleAllText}>
          {isAllText ? (
            <Text style={stl.text}>
              <Text style={stl.bold}>{name} : </Text>
              {description}
            </Text>
          ) : (
            <Text style={stl.text}>
              <Text style={stl.bold}>{name} : </Text>
              {cut50Symbols(description)}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
