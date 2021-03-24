import React, { FC } from "react";
import { Container } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import { MMHader } from "../components/Common/MMHader";
import { MainContainer } from "../components/Common/MainContainer";
import { useSelector } from "react-redux";
import { getLanguage } from "../BLL/selectors/settingsSelector";
import vocabulary from "../vocabulary/vocabulary";

const ForgetPasswordScreen: FC<{
  navigation: StackNavigationProp<RootStackParamList, "ForgetPassword">;
}> = ({ navigation }) => {
  const language = useSelector(getLanguage);
  return (
    <Container>
      <MainContainer>
        <MMHader
          title={vocabulary["forget password"][language]}
          useLeftBack
          leftPress={() => navigation.goBack()}
        />
      </MainContainer>
    </Container>
  );
};

export default ForgetPasswordScreen;
