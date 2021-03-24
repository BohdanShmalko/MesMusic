import React, { FC } from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import vocabulary from "../../vocabulary/vocabulary";
import { useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import { ButtonInOverlay } from "../Common/ButtonInOverlay";
import { Overlay } from "../Common/Overlay";
import { TitleCallbackType } from "../../types/types";

type PropType = {
  toggleOverlay: () => void;
  visible: boolean;
};

interface Styles {
  overlayContainer: ViewStyle;
  textStyle: TextStyle;
  buttonOverlayStyle: ViewStyle;
}

export const MessageOverlay: FC<PropType> = ({ toggleOverlay, visible }) => {
  const language = useSelector(getLanguage);
  const { secondPrimaryFont } = useSelector(getTheme);

  const stl = StyleSheet.create<Styles>({
    overlayContainer: { alignItems: "center" },
    textStyle: { color: secondPrimaryFont },
    buttonOverlayStyle: { borderBottomColor: secondPrimaryFont },
  });

  const overlayButtonsParams: Array<TitleCallbackType> = [
    {
      title: vocabulary["change name"][language],
      callback: () => {},
    },
    {
      title: vocabulary["change photo"][language],
      callback: () => {},
    },
    {
      title: vocabulary["leave chat"][language],
      callback: () => {},
    },
  ];

  return (
    <Overlay visible={visible} setVisible={toggleOverlay} transparent>
      <View style={stl.overlayContainer}>
        {overlayButtonsParams.map((params, index) => (
          <ButtonInOverlay
            key={index}
            style={stl.buttonOverlayStyle}
            textStyle={stl.textStyle}
            title={params.title}
            onPress={params.callback}
          />
        ))}
      </View>
    </Overlay>
  );
};
