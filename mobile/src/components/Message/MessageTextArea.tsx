import React, { FC } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Icon, Textarea } from "native-base";
import { useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = {};

interface Styles {
  mainContainer: ViewStyle;
  textareaContainer: ViewStyle;
  textarea: ViewStyle;
  sendContainer: ViewStyle;
  sendButton: ViewStyle;
  sendIcon: TextStyle;
  widgetsContainer: ViewStyle;
  widget: ViewStyle;
  widgetButton: ViewStyle;
  widgetText: TextStyle;
}

export const MessageTextArea: FC<PropType> = (props) => {
  const language = useSelector(getLanguage);
  const { firstPrimaryFont, secondPrimaryFont, secondMainColor } = useSelector(
    getTheme
  );

  const stl = StyleSheet.create<Styles>({
    mainContainer: {
      flexDirection: "row",
      backgroundColor: firstPrimaryFont,
      margin: 5,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: secondMainColor,
      maxHeight: 120,
    },
    textareaContainer: { flex: 7, padding: 5 },
    textarea: { color: secondPrimaryFont },
    sendContainer: { flex: 1 },
    sendButton: { flex: 1, justifyContent: "center", alignItems: "center" },
    sendIcon: { fontSize: 25, color: secondMainColor },
    widgetsContainer: { flex: 1, flexDirection: "column" },
    widget: { flex: 1 },
    widgetButton: { justifyContent: "center", alignItems: "center" },
    widgetText: { fontSize: 25, color: secondPrimaryFont },
  });

  return (
    <View style={stl.mainContainer}>
      <View style={stl.textareaContainer}>
        <Textarea
          keyboardType={"decimal-pad"}
          rowSpan={3}
          placeholder={vocabulary["enter something"][language]}
          style={stl.textarea}
        />
      </View>
      <View style={stl.sendContainer}>
        <TouchableOpacity style={stl.sendButton}>
          <Icon name="md-send" style={stl.sendIcon} />
        </TouchableOpacity>
      </View>
      <View style={stl.widgetsContainer}>
        <View style={stl.widget}>
          <TouchableOpacity style={stl.widgetButton}>
            <Icon name="md-attach" style={stl.widgetText} />
          </TouchableOpacity>
        </View>
        <View style={stl.widget}>
          <TouchableOpacity style={stl.widgetButton}>
            <Icon name="md-happy" style={stl.widgetText} />
          </TouchableOpacity>
        </View>
        <View style={stl.widget}>
          <TouchableOpacity style={stl.widgetButton}>
            <Icon name="md-mic" style={stl.widgetText} />
            {/*<Icon name="md-camera" style = {{fontSize : 25, color : 'black'}}/>*/}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
