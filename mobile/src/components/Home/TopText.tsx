import React, { FC } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import vocabulary from "../../vocabulary/vocabulary";
import { useSelector } from "react-redux";
import { getLanguage } from "../../BLL/selectors/settingsSelector";

type PropType = {};

interface Styles {
  text: TextStyle;
}

const stl = StyleSheet.create<Styles>({
  text: {
    textAlign: "center",
    fontStyle: "italic",
    textTransform: "uppercase",
    color: "white",
    marginTop: "-30%",
  },
});

export const TopText: FC<PropType> = (props) => {
  const language = useSelector(getLanguage);
  return <Text style={stl.text}>{vocabulary["home top text"][language]}</Text>;
};
