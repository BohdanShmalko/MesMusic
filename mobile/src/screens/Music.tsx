import React, { FC, useEffect, useRef, useState } from "react";
import { Container, Icon } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import { MMHader } from "../components/Common/MMHader";
import { MainContainer } from "../components/Common/MainContainer";
import { FooterBadge } from "../components/Common/FooterBadge";
import { useSelector } from "react-redux";
import {
  getBackgroundObject,
  getLanguage,
  getTheme,
} from "../BLL/selectors/settingsSelector";
import vocabulary from "../vocabulary/vocabulary";
import styles from "react-native-webview/lib/WebView.styles";
import { TouchableOpacity, View, Text, Dimensions, Image } from "react-native";
import { Camera } from "expo-camera";

const displayHeight = Dimensions.get("window").height;

const MusicScreen: FC<{
  navigation: StackNavigationProp<RootStackParamList, "Music">;
}> = ({ navigation }) => {
  const background = useSelector(getBackgroundObject("musicPicture"));
  const language = useSelector(getLanguage);
  const { firstMainColor, secondMainColor } = useSelector(getTheme);

  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [viewCamera, setViewCamera] = useState(false);
  const [photo, setPhoto] = useState<null | string>(null);
  let cam = useRef<any>().current;

  const takePicture = async () => {
    const option = {};
    const picture = await cam.takePictureAsync();
    setPhoto(picture.uri);
    //console.log(picture);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Container>
      <MainContainer {...background}>
        <MMHader
          title={vocabulary["music"][language]}
          useLeftBack
          leftPress={() => navigation.navigate("News")}
          useRightMessage
          rightPress={() => navigation.navigate("Dialogs")}
          color={firstMainColor}
        />
        {viewCamera && (
          <View>
            <Camera
              type={type}
              ref={(ref) => {
                cam = ref;
              }}
            >
              <View
                style={{
                  height: (displayHeight / 10) * 9,
                  justifyContent: "center",
                  padding: 30,
                  alignItems: "flex-end",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                  style={{
                    backgroundColor: firstMainColor,
                    padding: 10,
                    borderRadius: 20,
                    margin: 10,
                  }}
                >
                  <Icon name={"md-sync"} />
                </TouchableOpacity>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <TouchableOpacity
                    onPress={async () => {
                      await takePicture();
                      setViewCamera(false);
                    }}
                    style={{
                      backgroundColor: firstMainColor,
                      padding: 10,
                      borderRadius: 20,
                      margin: 10,
                    }}
                  >
                    <Icon name={"md-aperture"} />
                  </TouchableOpacity>
                </View>
              </View>
            </Camera>
          </View>
        )}
        <View style={{alignItems: "center"}}>
          <TouchableOpacity
            onPress={() => {
              setViewCamera(true);
            }}
            style={{

              backgroundColor: firstMainColor,
              padding: 10,
              borderRadius: 20,
              margin: 10,
            }}
          >
            <Icon name={"md-aperture"} style={{ color: secondMainColor }} />
          </TouchableOpacity>
          {photo && (
            <Image
              style={{ width: 300, height: 400 }}
              source={{ uri: photo }}
            />
          )}
        </View>
      </MainContainer>
      <FooterBadge
        navigation={navigation}
        active={"music"}
        color={firstMainColor}
        activeColor={secondMainColor}
      />
    </Container>
  );
};

export default MusicScreen;
