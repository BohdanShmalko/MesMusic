import React, { FC, useEffect, useState } from "react";
import { Container, Spinner } from "native-base";
import { navigationType } from "../types/types";
import { MMHader } from "../components/Common/MMHader";
import { MainContainer } from "../components/Common/MainContainer";
import { MessageTextArea } from "../components/Message/MessageTextArea";
import { MessageList } from "../components/Message/MessageList";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  getLastAction,
  getMessageData,
  getMessageTitle,
  getMessageUri,
  getMyId,
} from "../BLL/selectors/messageSelector";
import {
  getBackgroundObject,
  getLanguage,
  getTheme,
} from "../BLL/selectors/settingsSelector";
import vocabulary from "../vocabulary/vocabulary";
import { MessageOverlay } from "../components/Message/MessageOverlay";
import { messageAPI } from "../DAL/API";
import { actionCreator } from "../BLL/storeRedux";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

const MessageScreen: FC<{
  navigation: navigationType;
  sendMessage : (message : string) => void
  dialogId: string;
}> = ({ navigation, sendMessage, dialogId }) => {
  const language = useSelector(getLanguage);
  const messageUri = useSelector(getMessageUri);
  const messageTitle = useSelector(getMessageTitle);
  const messageStatus = useSelector(getLastAction);
  const data = useSelector(getMessageData);
  const background = useSelector(getBackgroundObject("messagePicture"));
  const { firstMainColor } = useSelector(getTheme);
  const myId = useSelector(getMyId);

  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => setVisible(!visible);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const messagePage = await messageAPI.loadPage(dialogId);
      dispatch(actionCreator.messageScreen.loadMessagePage(messagePage));
      setLoader(false);
    })();
  }, []);

  return (
    <Container>
      <MMHader
        useBodyAvatar={{
          uri: messageUri || "http://192.168.0.104:3001/image/:common/:group",
          title: messageTitle,
        }}
        useLeftBack
        leftPress={() => navigation.navigate("Dialogs")}
        rightTitle={`${vocabulary["last action"][language]} : ${messageStatus.substr(0,10)}`}
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
          {loader && <Spinner color={firstMainColor} />}
          <MessageList data={data} />
        </KeyboardAvoidingView>
      </MainContainer>
      <MessageTextArea
        onSend={(message) => {
          (async () => {
            dispatch(
              actionCreator.messageScreen.addTemporaryMessage({
                userId: myId,
                message,
                id: (data.length + 1).toString(),
                isMyMessage: true,
                status: "in process",
              })
            );
              sendMessage(message);
          })();
        }}
      />
      <MessageOverlay visible={visible} toggleOverlay={toggleOverlay} dialogId={dialogId}/>
    </Container>
  );
};

export default MessageScreen;
