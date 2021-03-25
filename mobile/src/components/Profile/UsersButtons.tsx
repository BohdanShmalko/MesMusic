import React, { FC } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useSelector } from "react-redux";
import {
  getIsShowMusic,
  getIsShowTrainings,
} from "../../BLL/selectors/profileSelector";
import { navigationType } from "../../types/types";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = { navigation: navigationType };

interface Styles {
  mainContainer: ViewStyle;
  musicButton: ViewStyle;
  text: TextStyle;
  trainingsButton: ViewStyle;
}

export const UsersButtons: FC<PropType> = ({ navigation }) => {
  const isShowMusic = useSelector(getIsShowMusic);
  const isShowTrainings = useSelector(getIsShowTrainings);
  const language = useSelector(getLanguage);

  const { firstMainColor, secondMainColor, firstPrimaryFont } = useSelector(
    getTheme
  );

  const stl = StyleSheet.create<Styles>({
    mainContainer: { flexDirection: "row", padding: 10 },
    musicButton: {
      flex: 1,
      padding: 10,
      alignItems: "center",
      backgroundColor: firstMainColor,
      borderRadius: 10,
    },
    text: { color: firstPrimaryFont },
    trainingsButton: {
      flex: 1,
      padding: 10,
      alignItems: "center",
      backgroundColor: secondMainColor,
      borderRadius: 10,
    },
  });

  return (
    <View style={stl.mainContainer}>
      {isShowMusic && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Music")}
          style={stl.musicButton}
        >
          <Text style={stl.text}>{vocabulary["music"][language]}</Text>
        </TouchableOpacity>
      )}
      {isShowTrainings && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Training")}
          style={stl.trainingsButton}
        >
          <Text style={stl.text}>{vocabulary["trainings"][language]}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
