import React, { FC } from "react";
import { Container } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import { MMHader } from "../components/Common/MMHader";
import { MainContainer } from "../components/Common/MainContainer";
import { FooterBadge } from "../components/Common/FooterBadge";
import { MainProfile } from "../components/Profile/MainProfile";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useSelector } from "react-redux";
import {
  getBackgroundObject,
  getLanguage,
  getTheme,
} from "../BLL/selectors/settingsSelector";
import vocabulary from "../vocabulary/vocabulary";

const ProfileScreen: FC<{
  navigation: StackNavigationProp<RootStackParamList, "Profile">;
}> = ({ navigation }) => {
  const isMyProfile: boolean = true;
  let navigateTo: "Settings" | "Dialogs";
  isMyProfile ? (navigateTo = "Settings") : (navigateTo = "Dialogs");
  const background = useSelector(getBackgroundObject("profilePicture"));
  const { firstMainColor, secondMainColor } = useSelector(getTheme);
  const language = useSelector(getLanguage);
  return (
    <Container>
      <MainContainer {...background} useFooter>
        <MMHader
          title={vocabulary["profile"][language]}
          useLeftBack
          leftPress={() => navigation.navigate("News")}
          useRigthSettings={isMyProfile}
          useRightMessage={!isMyProfile}
          rightPress={() => navigation.navigate(navigateTo)}
          color={firstMainColor}
        />
        <KeyboardAvoidingView behavior={Platform.OS ? "padding" : undefined}>
          <MainProfile navigation={navigation} />
        </KeyboardAvoidingView>
      </MainContainer>
      <FooterBadge
        navigation={navigation}
        active={"profile"}
        color={firstMainColor}
        activeColor={secondMainColor}
      />
    </Container>
  );
};

export default ProfileScreen;
