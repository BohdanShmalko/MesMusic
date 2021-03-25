import React, { FC } from "react";
import {
  ColorValue,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Icon, Switch } from "native-base";

type PropType = {
  icon: string;
  title: string;
  colorWord: ColorValue;
  colorButton: ColorValue;
  useButton?: boolean;
  useSwitch?: boolean;
  switchValue?: boolean | string;
  onPress?: () => void;
  buttonTitle?: string | boolean;
};

interface Styles {
  button: ViewStyle;
  buttonText: TextStyle;
  mainContainer: ViewStyle;
  iconContainer: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
  leftContainer: ViewStyle;
}

export const SettingsItem: FC<PropType> = ({
  title,
  colorButton,
  colorWord,
  icon,
  useButton,
  useSwitch,
  switchValue,
  onPress,
  buttonTitle = "Change",
}) => {
  const stl = StyleSheet.create<Styles>({
    button: {
      backgroundColor: colorButton,
      justifyContent: "center",
      borderRadius: 10,
      alignItems: "center",
      borderWidth: 1,
      borderColor: colorWord,
      maxHeight: 30,
    },
    buttonText: { padding: 5, color: colorWord },
    mainContainer: { flexDirection: "row", padding: 10 },
    iconContainer: { flex: 1, justifyContent: "center" },
    icon: { color: colorWord },
    text: { color: colorWord, fontSize: 20, flex: 7 },
    leftContainer: { justifyContent: "center", flex: 2 },
  });

  let leftComponent;
  if (useButton)
    leftComponent = (
      <TouchableOpacity onPress={onPress} style={stl.button}>
        <Text style={stl.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    );
  else if (useSwitch)
    leftComponent = (
      <Switch
        thumbColor={switchValue ? colorButton : "gray"}
        trackColor={{ true: colorWord, false: colorWord }}
        onValueChange={onPress}
        value={!!switchValue}
      />
    );

  return (
    <View style={stl.mainContainer}>
      <View style={stl.iconContainer}>
        <Icon name={icon} style={stl.icon} />
      </View>

      <Text style={stl.text}>{title}</Text>
      <View style={stl.leftContainer}>{leftComponent}</View>
    </View>
  );
};
