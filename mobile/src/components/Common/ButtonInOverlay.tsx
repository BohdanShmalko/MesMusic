import React, { FC } from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from "react-native";

type PropType = {
  title: string;
  onPress?: () => void;
  textStyle?: Object;
  style?: Object;
};

interface Styles {
  text: TextStyle;
  container: ViewStyle;
}

export const ButtonInOverlay: FC<PropType> = ({
  title,
  onPress,
  textStyle,
  style,
}) => {
  const stl = StyleSheet.create<Styles>({
    text: { fontSize: 17, ...textStyle },
    container: {
      padding: 5,
      borderBottomWidth: 1,
      borderBottomColor: "#08003d",
      ...style,
    },
  });
  return (
    <TouchableOpacity style={stl.container} onPress={onPress}>
      <Text style={stl.text}>{title}</Text>
    </TouchableOpacity>
  );
};
