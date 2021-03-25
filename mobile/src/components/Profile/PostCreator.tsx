import React, { FC, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { Icon, Textarea } from "native-base";
import { useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = {};

interface Styles {
  mainContainer: ViewStyle;
  textContainer: ViewStyle;
  text: TextStyle;
  nameContainer: ViewStyle;
  nameInput: ViewStyle;
  descriptionContainer: ViewStyle;
  descriptionInput: ViewStyle;
  iconsContainer: ViewStyle;
  empty: ViewStyle;
  iconButton1: ViewStyle;
  iconButton2: ViewStyle;
  icon1: TextStyle;
  icon2: TextStyle;
}

export const PostCreator: FC<PropType> = (props) => {
  const [postName, setPostName] = useState("");

  const language = useSelector(getLanguage);
  const { firstPrimaryFont, secondPrimaryFont, firstMainColor } = useSelector(
    getTheme
  );

  const stl = StyleSheet.create<Styles>({
    mainContainer: { margin: 10 },
    textContainer: { padding: 10 },
    text: {
      color: firstPrimaryFont,
      fontSize: 20,
      textAlign: "center",
    },
    nameContainer: {
      marginBottom: 10,
      backgroundColor: firstPrimaryFont,
      borderRadius: 10,
    },
    nameInput: { padding: 2 },
    descriptionContainer: {
      backgroundColor: firstPrimaryFont,
      borderRadius: 10,
    },
    descriptionInput: { color: secondPrimaryFont },
    iconsContainer: { flexDirection: "row", margin: 10 },
    empty: { flex: 1 },
    iconButton1: {
      backgroundColor: firstMainColor,
      marginTop: 5,
      marginRight: 5,
      borderRadius: 10,
    },
    iconButton2: {
      backgroundColor: firstMainColor,
      marginTop: 5,
      borderRadius: 10,
    },
    icon1: { color: firstPrimaryFont, fontSize: 20, padding: 5 },
    icon2: { color: firstPrimaryFont, fontSize: 17, padding: 5 },
  });

  return (
    <View style={stl.mainContainer}>
      <View style={stl.textContainer}>
        <Text style={stl.text}>{vocabulary["add post"][language]}</Text>
      </View>
      <View style={stl.nameContainer}>
        <TextInput
          style={stl.nameInput}
          value={postName}
          onChangeText={setPostName}
          placeholder={vocabulary["post name"][language]}
        />
      </View>
      <View style={stl.descriptionContainer}>
        <Textarea
          rowSpan={3}
          placeholder={vocabulary["post description"][language]}
          style={stl.descriptionInput}
        />
      </View>
      <View style={stl.iconsContainer}>
        <View style={stl.empty}></View>
        <TouchableOpacity style={stl.iconButton1}>
          <Icon style={stl.icon1} name="md-attach" />
        </TouchableOpacity>
        <TouchableOpacity style={stl.iconButton2}>
          <Text style={stl.icon2}>{vocabulary["add"][language]}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
