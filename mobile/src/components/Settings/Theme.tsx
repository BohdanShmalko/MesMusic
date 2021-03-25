import React, { FC, useState } from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { Icon } from "native-base";
import { SettingsItem } from "./SettingsItem";
import { useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";
import { ModalColorPicker } from "../Common/ModalColorPicker";
import { SettingsItemType } from "../../types/types";

type PropType = {};

interface Styles {
  headContainer: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
  themeContainer: ViewStyle;
  pictures: ViewStyle;
}

export const Theme: FC<PropType> = (props) => {
  const [isFirstColor, setIsFirstColor] = useState(false);
  const changeIsFirstColor = () => setIsFirstColor(!isFirstColor);

  const [switchTheme, setSwitchTheme] = useState(false);
  const changeSwitchTheme = () => setSwitchTheme(!switchTheme);

  const [switchOnlyImage, setSwitchOnlyImage] = useState(false);
  const changeSwitchOnlyImage = () => setSwitchOnlyImage(!switchOnlyImage);

  const {
    firstMainColor,
    secondMainColor,
    firstPrimaryFont,
    secondPrimaryFont,
  } = useSelector(getTheme);
  const language = useSelector(getLanguage);

  const stl = StyleSheet.create<Styles>({
    headContainer: { flexDirection: "row", justifyContent: "center" },
    icon: { color: firstPrimaryFont },
    text: {
      color: firstPrimaryFont,
      textTransform: "uppercase",
      fontSize: 20,
    },
    themeContainer: { backgroundColor: "rgba(255,255,255,0.2)" },
    pictures: { paddingHorizontal: 20 },
  });

  const themeItems: Array<SettingsItemType> = [
    {
      icon: "md-color-fill",
      title: vocabulary["change first color"][language],
      colorButton: firstMainColor,
      useButton: true,
      value: vocabulary["change"][language],
      onPress: changeIsFirstColor,
    },
    {
      icon: "md-color-fill",
      title: vocabulary["change second color"][language],
      colorButton: secondMainColor,
      useButton: true,
      value: vocabulary["change"][language],
      onPress: () => {},
    },
    {
      icon: "md-create",
      title: vocabulary["change first font"][language],
      colorButton: "rgba(0,0,0,0)",
      useButton: true,
      value: vocabulary["change"][language],
      onPress: () => {},
    },
    {
      icon: "md-create",
      title: vocabulary["change second font"][language],
      colorButton: "rgba(0,0,0,0)",
      useButton: true,
      value: vocabulary["change"][language],
      onPress: () => {},
    },
    {
      icon: "md-images",
      title: vocabulary["picture background"][language],
      colorButton: secondMainColor,
      useSwitch: true,
      value: switchTheme,
      onPress: changeSwitchTheme,
    },
  ];

  const backgroundItems: Array<SettingsItemType> = [
    {
      icon: "md-images",
      title: vocabulary["single picture"][language],
      colorButton: secondMainColor,
      useSwitch: true,
      value: switchOnlyImage,
      onPress: () => {
        changeSwitchOnlyImage();
      },
    },
    {
      icon: "md-image",
      title: vocabulary["comments screen"][language],
      colorButton: firstMainColor,
      useButton: true,
      value: vocabulary["set"][language],
      onPress: () => {},
    },
    {
      icon: "md-image",
      title: vocabulary["dialogs screen"][language],
      colorButton: firstMainColor,
      useButton: true,
      value: vocabulary["set"][language],
      onPress: () => {},
    },
    {
      icon: "md-image",
      title: vocabulary["like screen"][language],
      colorButton: firstMainColor,
      useButton: true,
      value: vocabulary["set"][language],
      onPress: () => {},
    },
    {
      icon: "md-image",
      title: vocabulary["message screen"][language],
      colorButton: firstMainColor,
      useButton: true,
      value: vocabulary["set"][language],
      onPress: () => {},
    },
    {
      icon: "md-image",
      title: vocabulary["music screen"][language],
      colorButton: firstMainColor,
      useButton: true,
      value: vocabulary["set"][language],
      onPress: () => {},
    },
    {
      icon: "md-image",
      title: vocabulary["news screen"][language],
      colorButton: firstMainColor,
      useButton: true,
      value: vocabulary["set"][language],
      onPress: () => {},
    },
    {
      icon: "md-image",
      title: vocabulary["profile screen"][language],
      colorButton: firstMainColor,
      useButton: true,
      value: vocabulary["set"][language],
      onPress: () => {},
    },
    {
      icon: "md-image",
      title: vocabulary["settings screen"][language],
      colorButton: firstMainColor,
      useButton: true,
      value: vocabulary["set"][language],
      onPress: () => {},
    },
    {
      icon: "md-image",
      title: vocabulary["training screen"][language],
      colorButton: firstMainColor,
      useButton: true,
      value: vocabulary["set"][language],
      onPress: () => {},
    },
    {
      icon: "md-image",
      title: vocabulary["user screen"][language],
      colorButton: firstMainColor,
      useButton: true,
      value: vocabulary["set"][language],
      onPress: () => {},
    },
  ];

  return (
    <View>
      <View style={stl.headContainer}>
        <Icon name="md-color-palette" style={stl.icon} />
        <Text style={stl.text}>{vocabulary["theme"][language]}</Text>
      </View>
      <View style={stl.themeContainer}>
        {themeItems.map((item, index) => (
          <SettingsItem
            key={index}
            icon={item.icon}
            title={item.title}
            colorWord={index !== 3 ? firstPrimaryFont : secondPrimaryFont}
            colorButton={item.colorButton}
            useSwitch={item.useSwitch}
            useButton={item.useButton}
            switchValue={item.value}
            buttonTitle={item.value}
            onPress={item.onPress}
          />
        ))}

        {switchTheme && (
          <View style={stl.pictures}>
            {/*TODO to map in the end*/}
            {backgroundItems.map((item, index) => (
              <SettingsItem
                key={index}
                icon={item.icon}
                title={item.title}
                colorWord={firstPrimaryFont}
                colorButton={item.colorButton}
                useSwitch={item.useSwitch}
                useButton={item.useButton}
                switchValue={item.value}
                buttonTitle={item.value}
                onPress={item.onPress}
              />
            ))}
          </View>
        )}
      </View>

      <ModalColorPicker
        setVisible={changeIsFirstColor}
        visible={isFirstColor}
        defaultColor={firstMainColor}
        buttonBackground={firstMainColor}
        buttonFont={firstPrimaryFont}
        onChoose={(color) => {
          console.log(color);
        }}
      />
    </View>
  );
};
