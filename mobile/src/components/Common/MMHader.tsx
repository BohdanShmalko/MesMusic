import React, { FC } from "react";
import { Body, Header, Icon, Left, Right, Thumbnail, Title } from "native-base";
import {
  Image,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import { getTheme } from "../../BLL/selectors/settingsSelector";

type PropType = {
  useLeftBack?: boolean;
  leftPress?: () => void;

  useBodyLogo?: boolean;
  useBodyAvatar?: {
    uri: string;
    title: string;
  };
  title?: string;

  useRightMessage?: boolean;
  useRigthSettings?: boolean;
  useRightMenu?: boolean;
  rightPress?: () => void;
  rightTitle?: string;

  color?: string;
};

interface Styles {
  main: ViewStyle;
  icon: TextStyle;
  body: ViewStyle;
  image: ImageStyle;
  logo: TextStyle;
  title: TextStyle;
  bodyAvatarContainer: ViewStyle;
  thumbnail: ImageStyle;
  thumbnailText: TextStyle;
  rightTitle: TextStyle;
}

export const MMHader: FC<PropType> = ({
  rightTitle,
  color = "#08003d",
  useLeftBack,
  useBodyLogo,
  title,
  useRightMessage,
  leftPress,
  useRigthSettings,
  rightPress,
  useBodyAvatar,
  useRightMenu,
}) => {
  const { firstPrimaryFont } = useSelector(getTheme);

  const stl = StyleSheet.create<Styles>({
    main: { backgroundColor: color },
    icon: { color: firstPrimaryFont },
    body: { flexDirection: "row" },
    image: { width: 64, height: 64 },
    logo: { fontStyle: "italic", marginTop: "15%", color: firstPrimaryFont },
    title: { color: firstPrimaryFont, fontSize: 20 },
    bodyAvatarContainer: { flexDirection: "row" },
    thumbnail: { width: 40, height: 40 },
    thumbnailText: { padding: "5%", fontSize: 20, color: firstPrimaryFont },
    rightTitle: {
      color: firstPrimaryFont,
      textAlign: "center",
      fontStyle: "italic",
      opacity: 0.7,
      fontSize: 10,
    },
  });

  return (
    <Header style={stl.main}>
      <Left>
        {useLeftBack && (
          <TouchableOpacity onPress={leftPress}>
            <Icon name="arrow-back" style={stl.icon} />
          </TouchableOpacity>
        )}
      </Left>
      <Body>
        {useBodyLogo && (
          <View style={stl.body}>
            <Image
              style={stl.image}
              source={require("../../../assets/icon.png")}
            />
            <Title style={stl.logo}>Mesmusic</Title>
          </View>
        )}
        {title && <Text style={stl.title}>{title}</Text>}
        {useBodyAvatar && (
          <View style={stl.bodyAvatarContainer}>
            <Thumbnail
              source={{ uri: useBodyAvatar.uri }}
              style={stl.thumbnail}
            />
            <Text style={stl.thumbnailText}>{useBodyAvatar.title}</Text>
          </View>
        )}
      </Body>

      <Right>
        {useRightMessage && (
          <TouchableOpacity onPress={rightPress}>
            <Icon name="message1" type="AntDesign" style={stl.icon} />
          </TouchableOpacity>
        )}
        {useRigthSettings && (
          <TouchableOpacity onPress={rightPress}>
            <Icon name="setting" type="AntDesign" style={stl.icon} />
          </TouchableOpacity>
        )}
        {rightTitle && <Text style={stl.rightTitle}>{rightTitle}</Text>}
        {useRightMenu && (
          <TouchableOpacity onPress={rightPress}>
            <Icon name="md-menu" style={stl.icon} />
          </TouchableOpacity>
        )}
      </Right>
    </Header>
  );
};
