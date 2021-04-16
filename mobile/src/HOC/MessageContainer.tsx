import React, { Component } from "react";
import Message from "../screens/Message";
import { MessageType, navigationType } from "../types/types";
import { io, Socket } from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { actionCreator, StateType } from "../BLL/storeRedux";
import { compose } from "redux";
import { connect } from "react-redux";
import { getDialogId } from "../BLL/selectors/messageSelector";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

type MapStateToPropsType = {
  dialogId: string;
};

type MapDispatchToPropsType = {
  addConstMessage: (message: MessageType) => void;
};

type OwnPropsType = {
  navigation: navigationType;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

class MessageContainer extends Component<PropsType> {
  socket: any;
  constructor(props: PropsType | Readonly<PropsType>) {
    super(props);
  }

  async componentDidMount() {
    console.log('here')
      const socket = io("http://192.168.0.104:3001", {
      auth: {
        token: await AsyncStorage.getItem("token"),
      },
      query: {
        roomId: this.props.dialogId,
      },
    });
    socket.on("message", (msg: string) => {
      this.props.addConstMessage(JSON.parse(msg));
    });
    this.socket = socket
  }

  sendMessage = (msg : string) => {
    this.socket.emit("message", msg);
  }

  componentWillUnmount() {
    this.socket.emit("close", "goodbye");
    this.socket.close();
  }

  render() {
    return (
      <Message
        navigation={this.props.navigation}
        dialogId={this.props.dialogId}
        sendMessage={this.sendMessage}
      />
    );
  }
}

const stateToProps = (state: StateType): MapStateToPropsType => ({
  dialogId: getDialogId(state),
});

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, StateType>(
    stateToProps,
    { addConstMessage: actionCreator.messageScreen.addConstMessage }
  )
)(MessageContainer);
