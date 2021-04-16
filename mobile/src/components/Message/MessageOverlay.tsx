import React, {FC, useEffect, useState} from "react";
import {Platform, StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import vocabulary from "../../vocabulary/vocabulary";
import {useDispatch, useSelector} from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import { ButtonInOverlay } from "../Common/ButtonInOverlay";
import { Overlay } from "../Common/Overlay";
import { TitleCallbackType } from "../../types/types";
import * as ImagePicker from "expo-image-picker";
import {actionCreator} from "../../BLL/storeRedux";
import {checkAccess, PickImage} from "../../helpers/imagePicker";
import {messageAPI} from "../../DAL/API";


type PropType = {
  toggleOverlay: () => void;
  visible: boolean;
  dialogId : string
};

interface Styles {
  overlayContainer: ViewStyle;
  textStyle: TextStyle;
  buttonOverlayStyle: ViewStyle;
}

export const MessageOverlay: FC<PropType> = ({ toggleOverlay, visible , dialogId}) => {
  const language = useSelector(getLanguage);
  const { secondPrimaryFont } = useSelector(getTheme);
  const dispatch = useDispatch()

  useEffect(() => {
    checkAccess()
  }, [])



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
      callback: async () => {
        const result = await PickImage()
        if (result){
          const {uriAvatar} = await messageAPI.changePhoto(result.base64, dialogId)
          dispatch(actionCreator.messageScreen.changeGroupPhoto(uriAvatar))
        }
      },
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
