import React, { FC } from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import { Overlay } from "../Common/Overlay";

type PropType = {
  visible: boolean;
  toggleOverlay: () => void;
};

interface Styles {
  overlayContainer: ViewStyle;
  textInOverlay: TextStyle;
}

export const DialogsOverlay: FC<PropType> = ({ visible, toggleOverlay }) => {
  const language = useSelector(getLanguage);
  const { secondPrimaryFont } = useSelector(getTheme);

  const stl = StyleSheet.create<Styles>({
    overlayContainer: {
      alignItems: "center",
    },
    textInOverlay: {
      color: secondPrimaryFont,
    },
  });

  return (
    <Overlay isDown visible={visible} setVisible={toggleOverlay} transparent>
      <View style={stl.overlayContainer}>
        <Text style={stl.textInOverlay}>In future</Text>
      </View>
    </Overlay>
  );
};
