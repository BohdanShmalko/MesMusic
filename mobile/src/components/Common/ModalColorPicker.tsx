import React, { FC, useState } from "react";
import {
  Dimensions,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
} from "react-native";
import vocabulary from "../../vocabulary/vocabulary";
import { useSelector } from "react-redux";
import { getLanguage } from "../../BLL/selectors/settingsSelector";
import { Overlay } from "./Overlay";
import { ColorPicker, fromHsv } from "react-native-color-picker";

type PropType = {
  setVisible: () => void;
  visible: boolean;
  onChoose?: (color: string) => void;
  buttonFont?: string;
  buttonBackground?: string;
  defaultColor?: string;
};

interface Styles {
  colorPicker: ViewStyle;
  button: ViewStyle;
  text: TextStyle;
}

const displayHeight = Dimensions.get("window").height;
const displayWidth = Dimensions.get("window").width;

export const ModalColorPicker: FC<PropType> = ({
  setVisible,
  visible,
  buttonFont,
  buttonBackground,
  defaultColor,
  onChoose,
}) => {
  const language = useSelector(getLanguage);
  const [color, setColor] = useState("");

  const stl = StyleSheet.create<Styles>({
    text: { color: buttonFont || "white", padding: 5 },
    button: { backgroundColor: buttonBackground || "blue", borderRadius: 5 },
    colorPicker: { width: displayWidth / 2, height: displayHeight / 2 },
  });

  return (
    <Overlay setVisible={setVisible} visible={visible} transparent>
      <View>
        <ColorPicker
          style={stl.colorPicker}
          defaultColor={defaultColor}
          onColorChange={(color) => {
            setColor(fromHsv(color));
          }}
        />
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={stl.button}
            onPress={() => {
              onChoose && onChoose(color);
              setVisible();
            }}
          >
            <Text style={stl.text}>{vocabulary["choose"][language]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Overlay>
  );
};
