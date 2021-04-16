import React, {FC, useEffect, useState} from "react";
import {Container, Spinner} from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import {RootStackParamList, UserType} from "../types/types";
import { MMHader } from "../components/Common/MMHader";
import { MainContainer } from "../components/Common/MainContainer";
import { FooterBadge } from "../components/Common/FooterBadge";
import { SearchBar } from "../components/Common/SearchBar";
import { AllMessages } from "../components/Dialogs/AllMessages";
import { RightDownButton } from "../components/Common/RightDownButton";
import {useDispatch, useSelector} from "react-redux";
import {getDialogs, getFriends} from "../BLL/selectors/dialogsSelector";
import {
  getBackgroundObject,
  getLanguage,
  getTheme,
} from "../BLL/selectors/settingsSelector";
import vocabulary from "../vocabulary/vocabulary";
import { DialogsOverlay } from "../components/Dialogs/DialogsOverlay";
import {dialogsAPI, usersAPI} from "../DAL/API";
import {actionCreator} from "../BLL/storeRedux";

const DialogsScreen: FC<{
  navigation: StackNavigationProp<RootStackParamList, "Dialogs">;
}> = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => setVisible(!visible);
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(true)

  const language = useSelector(getLanguage);
  const dialogs = useSelector(getDialogs);
  const background = useSelector(getBackgroundObject("dialogsPicture"));
  const friends = useSelector(getFriends)
  const { firstMainColor, secondMainColor, secondPrimaryFont } = useSelector(
    getTheme
  );

  useEffect(() => {
    (async () => {
      const users = await usersAPI.loadFriends(0,10)
      const dialogs = await dialogsAPI.loadDialogs(0,10)
      dispatch(actionCreator.dialogsScreen.loadFriends(users))
      dispatch(actionCreator.dialogsScreen.loadDialogs(dialogs))
      setLoader(false)
    })()
  }, [])

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
        {loader && <Spinner color={firstMainColor}/>}
      </MainContainer>
      <RightDownButton iconName="add" onPress={toggleOverlay} />
      <FooterBadge
        navigation={navigation}
        color={firstMainColor}
        activeColor={secondMainColor}
      />
      <DialogsOverlay visible={visible} toggleOverlay={toggleOverlay} navigation={navigation} friends={friends}/>
    </Container>
  );
};

export default DialogsScreen;
