import React, { FC } from "react";
import {
  Badge,
  Body,
  Left,
  ListItem,
  Right,
  Text,
  Thumbnail,
} from "native-base";
import { cutText } from "../../helpers/cutText";
import {
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { navigationType } from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import { getTheme } from "../../BLL/selectors/settingsSelector";
import {actionCreator} from "../../BLL/storeRedux";

type PropType = {
  id : string
  uriAvatar: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  howManyNotRead?: number;
  navigation: navigationType;
};

interface Styles {
  textName: TextStyle;
  cutText: TextStyle;
  lastMessage: TextStyle;
  notReadContainer: ViewStyle;
  barge: ViewStyle;
  text: TextStyle;
  mainContainer: ViewStyle;
  left: ViewStyle;
  body: ViewStyle;
  right: ViewStyle;
}

export const ListAvatar: FC<PropType> = ({
  navigation,
  howManyNotRead,
  uriAvatar,
  name,
  lastMessage,
  lastMessageTime,
    id
}) => {
  const cut30Symbols = cutText(30);
  const { secondPrimaryFont, firstMainColor, firstPrimaryFont } = useSelector(
    getTheme
  );
  const dispatch = useDispatch()

  const stl = StyleSheet.create<Styles>({
    textName: { color: secondPrimaryFont },
    cutText: { color: secondPrimaryFont, minHeight: 32 },
    lastMessage: { flex: 1, color: secondPrimaryFont },
    notReadContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    barge: { backgroundColor: firstMainColor },
    text: { color: firstPrimaryFont },
    mainContainer: {
      flexDirection: "row",
      marginTop: 10,
      borderBottomColor: firstPrimaryFont,
      borderBottomWidth: 1,
      padding: 5,
    },
    left: { flex: 3 },
    body: { flex: 8 },
    right: { flex: 6 },
  });

  return (
    <TouchableOpacity
      style={stl.mainContainer}
      onPress={() => {
        dispatch(actionCreator.messageScreen.setDialogId(id))
        navigation.navigate("Message");
      }}
    >
      <View style={stl.left}>
        <View>
          <Thumbnail source={{ uri: uriAvatar }} />
        </View>
      </View>
      <View style={stl.body}>
        <View>
          <Text style={stl.textName}>{name}</Text>
          <Text note style={stl.cutText}>
            {cut30Symbols(lastMessage)}
          </Text>
        </View>
      </View>
      <View style={stl.right}>
        <Text style={stl.lastMessage} note>
          {lastMessageTime.substr(0,10)}
        </Text>
        <View style={stl.notReadContainer}>
          {howManyNotRead ? (
            <Badge style={stl.barge}>
              <Text style={stl.text}>{howManyNotRead}</Text>
            </Badge>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
