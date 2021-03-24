import React, { FC, useEffect } from "react";
import { Container } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import { MMHader } from "../components/Common/MMHader";
import { TopText } from "../components/Home/TopText";
import { LoginForm } from "../components/Home/LoginForm";
import { MainContainer } from "../components/Common/MainContainer";
import { AuthContext } from "../../App";
import { useDispatch } from "react-redux";
import { loadFirstScreens } from "../helpers/loadFirstScreens";

const HomeScreen: FC<{
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}> = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(loadFirstScreens(dispatch), []);

  return (
    <Container>
      <MMHader useBodyLogo />
      <MainContainer
        containerStyle={{ alignItems: "center", justifyContent: "center" }}
      >
        <TopText />
        <LoginForm navigation={navigation} singIn={signIn} />
      </MainContainer>
    </Container>
  );
};

export default HomeScreen;
