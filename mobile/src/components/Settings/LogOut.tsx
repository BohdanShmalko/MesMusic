import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "native-base";
import { SettingsItem } from "./SettingsItem";
import { useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";
import { Styles } from "./Account";

type PropType = {
  signOut: () => Promise<void>;
};

export const LogOut: FC<PropType> = ({ signOut }) => {
  const { firstPrimaryFont } = useSelector(getTheme);
  const language = useSelector(getLanguage);

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

  return (
    <View>
      <View style={stl.container}>
        <Icon name="md-log-out" style={stl.icon} />
        <Text style={stl.text}>{vocabulary["logout"][language]}</Text>
      </View>
      <View style={stl.settingsContainer}>
        <SettingsItem
          icon="md-log-out"
          title={vocabulary["exit"][language]}
          colorWord={firstPrimaryFont}
          colorButton={"rgba(0,0,0,0)"}
          useButton
          buttonTitle={vocabulary["logout"][language]}
          onPress={signOut}
        />
      </View>
    </View>
  );
};
