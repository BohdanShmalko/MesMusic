import React, { FC, useState } from "react";
import {
  Dimensions,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { Button, Thumbnail } from "native-base";
import { cutText } from "../../helpers/cutText";
import { useSelector } from "react-redux";
import {
  getIsMyProfile,
  getUserInf,
} from "../../BLL/selectors/profileSelector";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

const screenWidth = Dimensions.get("window").width;

const TextWithBold: FC<{ bold: string; title: string; color: string }> = ({
  bold,
  title,
  color,
}) => {
  return (
    <Text style={{ color, fontSize: 15 }}>
      <Text style={{ fontWeight: "bold", color }}>{bold}</Text>
      {title}
    </Text>
  );
};

type PropType = {};

interface Styles {
  mainContainer: ViewStyle;
  thumbnailContainer: ViewStyle;
  thumbnail: ImageStyle;
  buttonsContainer: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  textContainer: TextStyle;
  textButton: TextStyle;
}

export const UserInf: FC<PropType> = (props) => {
  const language = useSelector(getLanguage);

  const [isAllAbout, setIsAllAbout] = useState(false);

  const toggleAbout: () => void = () => {
    setIsAllAbout(!isAllAbout);
  };
  const cut100Symbols = cutText(100);
  const { name, lastName, about, uri, isFriend } = useSelector(getUserInf);
  const isMyProfile = useSelector(getIsMyProfile);

  //TODO set onSubscribe function
  let subscribeText, onSubscribe;
  if (isFriend) {
    subscribeText = vocabulary["unsubscribe"][language];
    onSubscribe = () => {};
  } else {
    subscribeText = vocabulary["subscribe"][language];
    onSubscribe = () => {};
  }

  const { firstPrimaryFont, firstMainColor } = useSelector(getTheme);

  const stl = StyleSheet.create<Styles>({
    mainContainer: { flexDirection: "row" },
    thumbnailContainer: { padding: 10 },
    thumbnail: { width: screenWidth / 2, height: screenWidth / 2 },
    buttonsContainer: {
      justifyContent: "center",
      flexDirection: "row",
      padding: 5,
    },
    button: { backgroundColor: firstMainColor },
    buttonText: { padding: 5, color: firstPrimaryFont },
    textContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      margin: 10,
      padding: 10,
      borderRadius: 10,
      width: screenWidth / 2.5,
    },
    textButton: { flexDirection: "column" },
  });

  return (
    <View style={stl.mainContainer}>
      <View style={stl.thumbnailContainer}>
        <Thumbnail style={stl.thumbnail} source={{ uri }} />
        <View style={stl.buttonsContainer}>
          {isMyProfile ? (
            <Button style={stl.button}>
              <Text style={stl.buttonText}>
                {vocabulary["change main photo"][language]}
              </Text>
            </Button>
          ) : (
            <Button style={stl.button} onPress={onSubscribe}>
              <Text style={stl.buttonText}>{subscribeText}</Text>
            </Button>
          )}
        </View>
      </View>
      <View style={stl.textContainer}>
        <TouchableOpacity style={stl.textButton} onPress={toggleAbout}>
          <TextWithBold
            bold={`${vocabulary["name"][language]} : `}
            title={name}
            color={firstPrimaryFont}
          />
          <TextWithBold
            bold={`${vocabulary["lastname"][language]} : `}
            title={lastName}
            color={firstPrimaryFont}
          />
          {isAllAbout ? (
            <TextWithBold
              bold={`${vocabulary["about me"][language]} : `}
              title={about}
              color={firstPrimaryFont}
            />
          ) : (
            <TextWithBold
              bold={`${vocabulary["about me"][language]} : `}
              title={cut100Symbols(about)}
              color={firstPrimaryFont}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
