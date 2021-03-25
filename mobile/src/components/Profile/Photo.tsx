import React, { FC, useState } from "react";
import {
  Dimensions,
  Image,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { Overlay } from "../Common/Overlay";
import { Icon } from "native-base";
import { ButtonInOverlay } from "../Common/ButtonInOverlay";
import { useSelector } from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

interface Styles {
  mainButton: ViewStyle;
  image: ImageStyle;
  overlay: ViewStyle;
  overlayContainer: ViewStyle;
  emptyContainer: ViewStyle;
  iconsContainer: ViewStyle;
  icon: TextStyle;
  overlayImage: ImageStyle;
}

export const Photo: FC<{ uri: string }> = ({ uri }) => {
  const [visible, setVisible] = useState(false);
  const language = useSelector(getLanguage);
  const toggleOverlay = () => setVisible(!visible);

  const [insideVisible, setInsideVisible] = useState(false);
  const toggleInsideOverlay = () => setInsideVisible(!insideVisible);

  const { firstPrimaryFont, secondPrimaryFont } = useSelector(getTheme);

  const stl = StyleSheet.create<Styles>({
    mainButton: { backgroundColor: "rgba(255, 255, 255, 0.3)" },
    image: {
      flexDirection: "row",
      padding: 10,
      justifyContent: "center",
      flex: 1,
      minHeight: screenHeight / 5,
      width: screenHeight / 5,
      margin: 10,
    },
    overlay: { backgroundColor: firstPrimaryFont },
    overlayContainer: { alignItems: "center" },
    emptyContainer: { flex: 1 },
    iconsContainer: { flexDirection: "row" },
    icon: { color: secondPrimaryFont },
    overlayImage: {
      width: screenWidth - 10,
      height: screenWidth - 10,
    },
  });

  return (
    <View>
      <TouchableOpacity style={stl.mainButton} onPress={toggleOverlay}>
        <Image source={{ uri }} style={stl.image} />
      </TouchableOpacity>
      <Overlay
        visible={visible}
        setVisible={toggleOverlay}
        transparent
        style={stl.overlay}
      >
        <View style={stl.overlayContainer}>
          <View style={stl.iconsContainer}>
            <View style={stl.emptyContainer}></View>
            <View style={stl.iconsContainer}>
              <TouchableOpacity onPress={toggleInsideOverlay}>
                <Icon name="menu" style={stl.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleOverlay}>
                <Icon name="close" style={stl.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <Image source={{ uri }} style={stl.overlayImage} />
        </View>
        <Overlay
          setVisible={toggleInsideOverlay}
          visible={insideVisible}
          transparent
        >
          <View style={stl.overlayContainer}>
            <ButtonInOverlay
              textStyle={stl.icon}
              title={vocabulary["change main photo"][language]}
              onPress={() => {
                //TODO change photo
                toggleInsideOverlay();
                toggleOverlay();
              }}
            />
            <ButtonInOverlay
              textStyle={stl.icon}
              title={vocabulary["delete photo"][language]}
              onPress={() => {
                //TODO delete photo
                toggleInsideOverlay();
                toggleOverlay();
              }}
            />
          </View>
        </Overlay>
      </Overlay>
    </View>
  );
};
