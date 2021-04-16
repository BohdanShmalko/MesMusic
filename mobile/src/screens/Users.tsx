import React, {FC, useEffect, useState} from "react";
import {Container, Spinner} from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import { MMHader } from "../components/Common/MMHader";
import { MainContainer } from "../components/Common/MainContainer";
import { FooterBadge } from "../components/Common/FooterBadge";
import { SearchBar } from "../components/Common/SearchBar";
import { UsersList } from "../components/Users/UsersList";
import {useDispatch, useSelector} from "react-redux";
import { getUsers } from "../BLL/selectors/usersSelector";
import {
  getBackgroundObject,
  getLanguage,
  getTheme,
} from "../BLL/selectors/settingsSelector";
import vocabulary from "../vocabulary/vocabulary";
import { chooseUsers } from "../helpers/choicers";
import {usersAPI} from "../DAL/API";
import {actionCreator} from "../BLL/storeRedux";

const UsersScreen: FC<{
  navigation: StackNavigationProp<RootStackParamList, "Users">;
}> = ({ navigation }) => {
  const language = useSelector(getLanguage);
  const userChoices = chooseUsers(language);
  const users = useSelector(getUsers);
  const background = useSelector(getBackgroundObject("userPicture"));
  const { firstMainColor, secondMainColor } = useSelector(getTheme);
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(true)

  useEffect(() => {
      (async() => {
          const users = await usersAPI.loadAllUsers(0,10)
          dispatch(actionCreator.usersScreen.loadUsers(users))
        setLoader(false)
      })()
  }, [])

    return (
    <Container>
      <MainContainer {...background} useFooter>
        <MMHader
          title={vocabulary["users"][language]}
          useLeftBack
          leftPress={() => navigation.navigate("News")}
          useRightMessage
          rightPress={() => navigation.navigate("Dialogs")}
          color={firstMainColor}
        />
        <SearchBar useChoice={userChoices} />
        <UsersList navigation={navigation} data={users} />
        {loader && <Spinner color={firstMainColor}/>}
      </MainContainer>
      <FooterBadge
        navigation={navigation}
        active={"friends"}
        color={firstMainColor}
        activeColor={secondMainColor}
      />
    </Container>
  );
};

export default UsersScreen;
