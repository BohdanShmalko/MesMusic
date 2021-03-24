import React, { FC } from "react";
import { Badge, Button, Footer, FooterTab, Icon, Text } from "native-base";
import {
  FooterButtonType,
  FooterType,
  navigationType,
  PagesType,
} from "../../types/types";
import { useSelector } from "react-redux";
import { getTheme } from "../../BLL/selectors/settingsSelector";
import { Dimensions, TextStyle, ViewStyle, StyleSheet } from "react-native";

const displayHeight = Dimensions.get("window").height;

type PropType = {
  active?: FooterType;
  navigation: navigationType;
  color?: string;
  activeColor?: string;
};

type ButtonPropsType = PropType & {
  count: number;
  icon: string;
  currentActive?: FooterType;
  moveTo: PagesType;
};

interface Styles {
  button: ViewStyle;
  badge: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
}

const FooterButton: FC<ButtonPropsType> = ({
  color = "#08003d",
  active,
  navigation,
  activeColor = "white",
  count,
  icon,
  currentActive,
  moveTo,
}) => {
  const { firstPrimaryFont } = useSelector(getTheme);

  const stl = StyleSheet.create<Styles>({
    button: {
      backgroundColor: active === currentActive ? activeColor : undefined,
    },
    badge: { backgroundColor: activeColor, borderWidth: 1, borderColor: color },
    icon: { color: firstPrimaryFont },
    text: { color: firstPrimaryFont },
  });

  return (
    <Button
      badge={!!count}
      vertical
      style={stl.button}
      onPress={() => navigation.navigate(moveTo)}
    >
      {!!count && (
        <Badge style={stl.badge}>
          <Text style={stl.text}>{count}</Text>
        </Badge>
      )}
      <Icon active name={icon} style={stl.icon} />
      <Text></Text>
    </Button>
  );
};

export const FooterBadge: FC<PropType> = (props) => {
  const { color } = props;

  const buttons: Array<FooterButtonType> = [
    {
      count: 10,
      currentActive: "friends",
      icon: "man",
      moveTo: "Users",
    },
    {
      count: 0,
      currentActive: "music",
      icon: "md-headset",
      moveTo: "Music",
    },
    {
      count: 7,
      currentActive: "study",
      icon: "book",
      moveTo: "Training",
    },
    {
      count: 0,
      currentActive: "likes",
      icon: "heart",
      moveTo: "Likes",
    },
    {
      count: 0,
      currentActive: "profile",
      icon: "person",
      moveTo: "Profile",
    },
  ];

  return (
    <Footer style={{ maxHeight: displayHeight / 10 }}>
      <FooterTab style={{ backgroundColor: color }}>
        {buttons.map((button, index) => (
          <FooterButton
            key={index}
            {...props}
            count={button.count}
            icon={button.icon}
            currentActive={button.currentActive}
            moveTo={button.moveTo}
          />
        ))}
      </FooterTab>
    </Footer>
  );
};
