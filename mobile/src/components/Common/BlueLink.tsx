import React, { FC } from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from "react-native";
import {navigationType, PagesType} from "../../types/types";

type PropType = {
  navigation: navigationType;
  to: PagesType;
  title: string;
};

interface Style {
  container: ViewStyle;
  text: TextStyle;
}

const stl = StyleSheet.create<Style>({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 50,
    padding: 10,
    borderColor: "#147d91",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  text: { textTransform: "uppercase", color: "#147d91", fontWeight: "bold" },
});

export const BlueLink: FC<PropType> = ({ navigation, to, title }) => {
  return (
    <TouchableOpacity
      style={stl.container}
      onPress={() => navigation.navigate(to)}
    >
      <Text style={stl.text}>{title}</Text>
    </TouchableOpacity>
  );
};
