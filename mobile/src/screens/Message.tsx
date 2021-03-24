import React, { FC, useState } from "react";
import { Container } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import { MMHader } from "../components/Common/MMHader";
import { MainContainer } from "../components/Common/MainContainer";
import { MessageTextArea } from "../components/Message/MessageTextArea";
import { MessageList } from "../components/Message/MessageList";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useSelector } from "react-redux";
import {
  getLastAction,
  getMessageData,
  getMessageTitle,
  getMessageUri,
} from "../BLL/selectors/messageSelector";
import {
  getBackgroundObject,
  getLanguage,
  getTheme,
} from "../BLL/selectors/settingsSelector";
import vocabulary from "../vocabulary/vocabulary";
import { MessageOverlay } from "../components/Message/MessageOverlay";

const MessageScreen: FC<{
  navigation: StackNavigationProp<RootStackParamList, "Likes">;
}> = ({ navigation }) => {
  const language = useSelector(getLanguage);
  const messageUri = useSelector(getMessageUri);
  const messageTitle = useSelector(getMessageTitle);
  const messageStatus = useSelector(getLastAction);
  const data = useSelector(getMessageData);
  const background = useSelector(getBackgroundObject("messagePicture"));
  const { firstMainColor } = useSelector(getTheme);

  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => setVisible(!visible);
  return (
    <Container>
      <MMHader
        useBodyAvatar={{
          uri: messageUri,
          title: messageTitle,
        }}
        useLeftBack
        leftPress={() => navigation.navigate("Dialogs")}
        rightTitle={`${vocabulary["last action"][language]} : ${messageStatus}`}
        useRightMenu
        rightPress={toggleOverlay}
        color={firstMainColor}
      />
      <MainContainer
        style={{ flex: 1 }}
        image={require("../../assets/background.jpg")}
        {...background}
      >
        <KeyboardAvoidingView behavior={Platform.OS ? "padding" : undefined}>
          <MessageList data={data} />
        </KeyboardAvoidingView>
      </MainContainer>
      <MessageTextArea />
      <MessageOverlay visible={visible} toggleOverlay={toggleOverlay} />
    </Container>
  );
};

export default MessageScreen;
