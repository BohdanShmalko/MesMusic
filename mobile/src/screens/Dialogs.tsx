import React, { FC, useState } from "react";
import { Container } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import { MMHader } from "../components/Common/MMHader";
import { MainContainer } from "../components/Common/MainContainer";
import { FooterBadge } from "../components/Common/FooterBadge";
import { SearchBar } from "../components/Common/SearchBar";
import { AllMessages } from "../components/Dialogs/AllMessages";
import { RightDownButton } from "../components/Common/RightDownButton";
import { useSelector } from "react-redux";
import { getDialogs } from "../BLL/selectors/dialogsSelector";
import {
  getBackgroundObject,
  getLanguage,
  getTheme,
} from "../BLL/selectors/settingsSelector";
import vocabulary from "../vocabulary/vocabulary";
import { DialogsOverlay } from "../components/Dialogs/DialogsOverlay";

const DialogsScreen: FC<{
  navigation: StackNavigationProp<RootStackParamList, "Dialogs">;
}> = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => setVisible(!visible);

  const language = useSelector(getLanguage);
  const dialogs = useSelector(getDialogs);
  const background = useSelector(getBackgroundObject("dialogsPicture"));
  const { firstMainColor, secondMainColor, secondPrimaryFont } = useSelector(
    getTheme
  );

  return (
    <Container>
      <MainContainer useFooter {...background}>
        <MMHader
          title={vocabulary["dialogs"][language]}
          useLeftBack
          leftPress={() => navigation.navigate("News")}
          color={firstMainColor}
        />
        <SearchBar />
        <AllMessages navigation={navigation} data={dialogs} />
      </MainContainer>
      <RightDownButton iconName="add" onPress={toggleOverlay} />
      <FooterBadge
        navigation={navigation}
        color={firstMainColor}
        activeColor={secondMainColor}
      />
      <DialogsOverlay visible={visible} toggleOverlay={toggleOverlay} />
    </Container>
  );
};

export default DialogsScreen;
