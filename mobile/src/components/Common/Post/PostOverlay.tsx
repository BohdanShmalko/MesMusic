import React, { FC } from "react";
import { Text, TextStyle, View, ViewStyle, StyleSheet } from "react-native";
import vocabulary from "../../../vocabulary/vocabulary";
import { useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../../BLL/selectors/settingsSelector";
import { ButtonInOverlay } from "../ButtonInOverlay";
import { Overlay } from "../Overlay";
import { navigationType, TitleCallbackType } from "../../../types/types";

type PropType = {
  visible: boolean;
  toggleOverlay: () => void;
  isMy: boolean;
  navigation: navigationType;
};

interface Styles {
  container: ViewStyle;
  buttonOverlay: ViewStyle;
  textOverlay: TextStyle;
}

export const PostOverlay: FC<PropType> = ({
  toggleOverlay,
  visible,
  isMy,
  navigation,
}) => {
  const language = useSelector(getLanguage);
  const { secondPrimaryFont } = useSelector(getTheme);

  const stl = StyleSheet.create<Styles>({
    container: { alignItems: "center" },
    buttonOverlay: { borderBottomColor: secondPrimaryFont },
    textOverlay: { color: secondPrimaryFont },
  });

  const myButtons: Array<TitleCallbackType> = [
    {
      title: vocabulary["delete"][language],
      callback: () => {
        toggleOverlay();
      },
    },
    {
      title: vocabulary["hidden"][language],
      callback: () => {
        toggleOverlay();
      },
    },
  ];
  const notMyButtons: Array<TitleCallbackType> = [
    {
      title: vocabulary["complain"][language],
      callback: () => {
        toggleOverlay();
      },
    },
    {
      title: vocabulary["unsubscribe"][language],
      callback: () => {
        toggleOverlay();
      },
    },
    {
      title: vocabulary["add yourself"][language],
      callback: () => {
        toggleOverlay();
      },
    },
  ];
  const commonButtons: Array<TitleCallbackType> = [
    { title: vocabulary["share"][language], callback: () => {} },
    {
      title: vocabulary["leave comment"][language],
      callback: () => {
        toggleOverlay();
        navigation.navigate("Comments");
      },
    },
  ];

  return (
    <Overlay visible={visible} setVisible={toggleOverlay} transparent>
      <View style={stl.container}>
        {isMy
          ? myButtons.map((button, index) => (
              <ButtonInOverlay
                key={index}
                style={stl.buttonOverlay}
                textStyle={stl.textOverlay}
                title={button.title}
                onPress={button.callback}
              />
            ))
          : notMyButtons.map((button, index) => (
              <ButtonInOverlay
                key={index}
                style={stl.buttonOverlay}
                textStyle={stl.textOverlay}
                title={button.title}
                onPress={button.callback}
              />
            ))}

        {commonButtons.map((button, index) => (
          <ButtonInOverlay
            key={index}
            style={stl.buttonOverlay}
            textStyle={stl.textOverlay}
            title={button.title}
            onPress={button.callback}
          />
        ))}
      </View>
    </Overlay>
  );
};
