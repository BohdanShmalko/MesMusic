import React, { FC, useState } from "react";
import { Text, TextStyle, View, ViewStyle, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { SettingsItem } from "./SettingsItem";
import { useDispatch, useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";
import { Overlay } from "../Common/Overlay";
import { ButtonInOverlay } from "../Common/ButtonInOverlay";
import { changeLanguageTo } from "../../helpers/changeLanguage";
import { SettingsItemType, TitleCallbackType } from "../../types/types";

type PropType = {};

export interface Styles {
  container: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
  settingsContainer: ViewStyle;
}

export const Account: FC<PropType> = (props) => {
  const dispatch = useDispatch();
  const [switchVolume, setSwitchVolume] = useState(true);
  const changeSwitchVolume = () => setSwitchVolume(!switchVolume);

  const [changeLanguage, setChangeLanguage] = useState(false);
  const toggleChangeLanguage = () => setChangeLanguage(!changeLanguage);

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
      icon: "md-clipboard",
      title: vocabulary["change inf"][language],
      colorButton: "rgba(0,0,0,0)",
      useButton: true,
      value: vocabulary["change"][language],
      onPress: () => {},
    },
    {
      icon: "md-notifications-off",
      title: vocabulary["sound"][language],
      colorButton: firstMainColor,
      useSwitch: true,
      value: switchVolume,
      onPress: changeSwitchVolume,
    },
    {
      icon: "md-globe",
      title: vocabulary["change language"][language],
      colorButton: "rgba(0,0,0,0)",
      useButton: true,
      value: vocabulary["choose"][language],
      onPress: toggleChangeLanguage,
    },
  ];

  const overlayButtons: Array<TitleCallbackType> = [
    {
      callback: changeLanguageTo("en", dispatch, toggleChangeLanguage),
      title: "English",
    },
    {
      callback: changeLanguageTo("en", dispatch, toggleChangeLanguage),
      title: "Українська",
    },
  ];

  return (
    <View>
      <View style={stl.container}>
        <Icon name="md-home" style={stl.icon} />
        <Text style={stl.text}>{vocabulary["account"][language]}</Text>
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

      <Overlay
        setVisible={toggleChangeLanguage}
        visible={changeLanguage}
        transparent
      >
        <View>
          {overlayButtons.map((button, index) => (
            <ButtonInOverlay
              key={index}
              title={button.title}
              onPress={button.callback}
            />
          ))}
        </View>
      </Overlay>
    </View>
  );
};
