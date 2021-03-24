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
import { useSelector } from "react-redux";
import { getTheme } from "../../BLL/selectors/settingsSelector";

type PropType = {
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
}

export const ListAvatar: FC<PropType> = ({
  navigation,
  howManyNotRead,
  uriAvatar,
  name,
  lastMessage,
  lastMessageTime,
}) => {
  const cut30Symbols = cutText(30);
  const { secondPrimaryFont, firstMainColor, firstPrimaryFont } = useSelector(
    getTheme
  );

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
  });

  return (
    <ListItem avatar>
      <Left>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Thumbnail source={{ uri: uriAvatar }} />
        </TouchableOpacity>
      </Left>
      <Body>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Message");
          }}
        >
          <Text style={stl.textName}>{name}</Text>
          <Text note style={stl.cutText}>
            {cut30Symbols(lastMessage)}
          </Text>
        </TouchableOpacity>
      </Body>
      <Right>
        <Text style={stl.lastMessage} note>
          {lastMessageTime}
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
      </Right>
    </ListItem>
  );
};
