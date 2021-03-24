import React, { FC, useState } from "react";
import { Icon, Spinner, Text, Thumbnail } from "native-base";
import {
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from "react-native";
import { MessageType } from "../../types/types";
import { useSelector } from "react-redux";
import { getUserUri } from "../../BLL/selectors/messageSelector";
import { getTheme } from "../../BLL/selectors/settingsSelector";

interface Styles {
  mainContainer: ViewStyle;
  container: ViewStyle;
  message: TextStyle;
  view: ViewStyle;
  loadContainer: ViewStyle;
  dateText: TextStyle;
  spinner: TextStyle;
  loader: TextStyle;
  emptyComponent: ViewStyle;
  avatarComponent: ViewStyle;
}

export const Message: FC<MessageType> = ({
  id,
  status,
  isMyMessage,
  message,
  userId,
}) => {
  const uri = useSelector(getUserUri(userId));
  const { secondPrimaryFont } = useSelector(getTheme);
  let leftComponent, rightComponent;

  const stl = StyleSheet.create<Styles>({
    mainContainer: { flex: 1, flexDirection: "row", marginVertical: 5 },
    container: {
      flex: 7,
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      justifyContent: "center",
      padding: 5,
      borderRadius: 10,
    },
    message: { color: secondPrimaryFont },
    view: { flex: 1 },
    loadContainer: { flexDirection: "row" },
    dateText: { fontSize: 12, color: secondPrimaryFont },
    spinner: { marginTop: -32, marginBottom: -32, paddingLeft: 5 },
    loader: { fontSize: 12, paddingLeft: 5, color: secondPrimaryFont },
    avatarComponent: { flex: 1, justifyContent: "flex-end" },
    emptyComponent: { flex: 2 },
  });

  const emptyComponent = <View style={stl.emptyComponent}></View>;
  const avatarComponent = (
    <View style={stl.avatarComponent}>
      <TouchableOpacity
        onPress={() => {
          console.log("to profile");
        }}
      >
        <Thumbnail style={{ width: 32, height: 32 }} source={{ uri }} />
      </TouchableOpacity>
    </View>
  );

  if (isMyMessage) {
    leftComponent = emptyComponent;
    rightComponent = avatarComponent;
  } else {
    leftComponent = avatarComponent;
    rightComponent = emptyComponent;
  }

  return (
    <View style={stl.mainContainer}>
      {leftComponent}
      <View style={stl.container}>
        <TouchableOpacity
          onLongPress={() => {
            console.log("window menu");
          }}
        >
          <Text style={stl.message}>{message}</Text>

          <View style={stl.view}>
            <View style={stl.loadContainer}></View>
            <View style={stl.view}>
              <Text style={stl.dateText}>mon 22:00</Text>
              {status === "in process" && (
                // Icon name = 'alert'
                <Spinner
                  color={secondPrimaryFont}
                  size={12}
                  style={stl.spinner}
                />
              )}
              {status === "revised" && (
                <Icon name="md-mail-open" style={stl.loader} />
              )}
              {status === "sent" && (
                <Icon name="md-checkmark-circle" style={stl.loader} />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {rightComponent}
    </View>
  );
};
