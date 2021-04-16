import React, { FC, useState } from "react";
import {
  Body,
  Icon,
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
import { Overlay } from "../Common/Overlay";
import { ButtonInOverlay } from "../Common/ButtonInOverlay";
import { navigationType, TitleCallbackType } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import { actionCreator } from "../../BLL/storeRedux";
import vocabulary from "../../vocabulary/vocabulary";
import {usersAPI} from "../../DAL/API";

type PropType = {
  id: string;
  photoUri: string;
  name: string;
  about: string;
  isFriend: boolean;
  navigation: navigationType;
};

interface Styles {
  textName: TextStyle;
  textAbout: TextStyle;
  icon: TextStyle;
  overlayContainer: ViewStyle;
  overlayButton: ViewStyle;
}

export const User: FC<PropType> = ({
  navigation,
  about,
  id,
  isFriend,
  name,
  photoUri,
}) => {
  const cut20Symbols = cutText(20);
  const [visible, setVisible] = useState(false);
  const language = useSelector(getLanguage);

  const toggleOverlay = () => setVisible(!visible);
  const dispatch = useDispatch();

  const { firstPrimaryFont, secondPrimaryFont } = useSelector(getTheme);

  const friendsButtons: Array<TitleCallbackType> = [
    {
      title: vocabulary["unsubscribe"][language],
      callback: () => {
        dispatch(actionCreator.usersScreen.unsubscribeUser(id));
      },
    },
  ];

  const notFriendsButtons: Array<TitleCallbackType> = [
    {
      title: vocabulary["subscribe"][language],
      callback: () => {
        (async() => {
          await usersAPI.subscribe(id)
          dispatch(actionCreator.usersScreen.subscribe(id))
        })()

      },
    },
  ];

  const commonButtons: Array<TitleCallbackType> = [
    {
      title: vocabulary["go to profile"][language],
      callback: () => {
        toggleOverlay();
        navigation.navigate("Profile");
      },
    },
    {
      title: vocabulary["write message"][language],
      callback: () => {
        toggleOverlay();
        navigation.navigate("Message");
      },
    },
    {
      title: vocabulary["block this"][language],
      callback: () => {},
    },
  ];

  const stl = StyleSheet.create<Styles>({
    textName: { color: firstPrimaryFont },
    textAbout: { color: secondPrimaryFont },
    icon: { fontSize: 25, color: firstPrimaryFont },
    overlayContainer: { alignItems: "center" },
    overlayButton: { color: secondPrimaryFont },
  });

  return (
    <ListItem thumbnail>
      <Left>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Thumbnail square source={{ uri: photoUri }} />
        </TouchableOpacity>
      </Left>
      <Body>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Text style={stl.textName}>{name}</Text>
          <Text style={stl.textAbout} numberOfLines={1}>
            {cut20Symbols(about)}
          </Text>
        </TouchableOpacity>
      </Body>
      <Right>
        <TouchableOpacity onPress={toggleOverlay}>
          <Icon name="md-menu" style={stl.icon} />
        </TouchableOpacity>
      </Right>
      <Overlay visible={visible} setVisible={toggleOverlay} transparent>
        <View style={stl.overlayContainer}>
          <Text>{name}</Text>
          {commonButtons.map((item, index) => (
            <ButtonInOverlay
              key={index}
              textStyle={stl.overlayButton}
              title={item.title}
              onPress={item.callback}
            />
          ))}

          {isFriend
            ? friendsButtons.map((item, index) => (
                <ButtonInOverlay
                  key={index}
                  textStyle={stl.overlayButton}
                  title={item.title}
                  onPress={item.callback}
                />
              ))
            : notFriendsButtons.map((item, index) => (
                <ButtonInOverlay
                  key={index}
                  textStyle={stl.overlayButton}
                  title={item.title}
                  onPress={item.callback}
                />
              ))}
        </View>
      </Overlay>
    </ListItem>
  );
};
