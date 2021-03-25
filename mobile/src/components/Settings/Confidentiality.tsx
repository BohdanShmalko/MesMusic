import React, { FC, useState } from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { Icon } from "native-base";
import { SettingsItem } from "./SettingsItem";
import { useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";
import { Styles } from "./Account";
import { SettingsItemType } from "../../types/types";

type PropType = {};

export const Confidentiality: FC<PropType> = (props) => {
  const [switchClose, setSwitchClose] = useState(false);
  const changeSwitchClose = () => setSwitchClose(!switchClose);
  const language = useSelector(getLanguage);

  const { firstMainColor, firstPrimaryFont } = useSelector(getTheme);

  const stl = StyleSheet.create<Styles>({
    container: { flexDirection: "row", justifyContent: "center" },
    icon: { color: firstPrimaryFont },
    text: {
      color: firstPrimaryFont,
      textTransform: "uppercase",
      fontSize: 20,
    },
    settingsContainer: { backgroundColor: "rgba(255,255,255,0.2)" },
  });

  const settingsItems: Array<SettingsItemType> = [
    {
      icon: "md-glasses",
      title: vocabulary["block for unsigned"][language],
      colorButton: firstMainColor,
      useSwitch: true,
      value: switchClose,
      onPress: changeSwitchClose,
    },

    {
      icon: "chatbubbles",
      title: vocabulary["prohibit comments"][language],
      colorButton: "rgba(0,0,0,0)",
      useButton: true,
      value: vocabulary["choose"][language],
      onPress: () => {},
    },

    {
      icon: "md-headset",
      title: vocabulary["prohibit music"][language],
      colorButton: "rgba(0,0,0,0)",
      useButton: true,
      value: vocabulary["choose"][language],
      onPress: () => {},
    },
    {
      icon: "book",
      title: vocabulary["prohibit trainings"][language],
      colorButton: "rgba(0,0,0,0)",
      useButton: true,
      value: vocabulary["choose"][language],
      onPress: () => {},
    },
    {
      icon: "md-close-circle",
      title: vocabulary["block users"][language],
      colorButton: "rgba(0,0,0,0)",
      useButton: true,
      value: vocabulary["choose"][language],
      onPress: () => {},
    },
  ];

  return (
    <View>
      <View style={stl.container}>
        <Icon name="md-glasses" style={stl.icon} />
        <Text style={stl.text}>{vocabulary["confidentiality"][language]}</Text>
      </View>
      <View style={stl.settingsContainer}>
        {settingsItems.map((item, index) => (
          <SettingsItem
            key={index}
            icon={item.icon}
            title={item.title}
            colorWord={firstPrimaryFont}
            colorButton={item.colorButton}
            useButton={item.useButton}
            useSwitch={item.useSwitch}
            buttonTitle={item.value}
            switchValue={item.value}
            onPress={item.onPress}
          />
        ))}
      </View>
    </View>
  );
};
