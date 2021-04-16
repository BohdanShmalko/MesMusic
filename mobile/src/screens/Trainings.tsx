import React, { FC, useState } from "react";
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
import { Video } from "expo-av";
import { Text, TouchableOpacity, View } from "react-native";

const TrainingScreen: FC<{
  navigation: StackNavigationProp<RootStackParamList, "Training">;
}> = ({ navigation }) => {
  const background = useSelector(getBackgroundObject("trainingPicture"));
  const language = useSelector(getLanguage);
  const { firstMainColor, secondMainColor } = useSelector(getTheme);
  const [isMuted, setIsMuted] = useState(false);
  return (
    <Container>
      <MainContainer {...background} useFooter>
        <MMHader
          title={vocabulary["trainings"][language]}
          useLeftBack
          leftPress={() => navigation.navigate("News")}
          useRightMessage
          rightPress={() => navigation.navigate("Dialogs")}
          color={firstMainColor}
        />

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity>
            <Video
              source={{
                uri:
                  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              }}
              rate={1.0}
              volume={1.0}

              isMuted={isMuted}
              resizeMode={"cover"}
              shouldPlay
              isLooping
              style={{ width: 300, height: 300 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsMuted(!isMuted)}>
            {isMuted ? (
              <Icon name={"md-volume-mute"} />
            ) : (
              <Icon name={"md-volume-off"} />
            )}
          </TouchableOpacity>
        </View>
      </MainContainer>
      <FooterBadge
        navigation={navigation}
        active={"study"}
        color={firstMainColor}
        activeColor={secondMainColor}
      />
    </Container>
  );
};

export default TrainingScreen;
