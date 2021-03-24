import React, { FC, useEffect } from "react";
import { Container } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import { MMHader } from "../components/Common/MMHader";
import { MainContainer } from "../components/Common/MainContainer";
import { FooterBadge } from "../components/Common/FooterBadge";
import { PostList } from "../components/Common/Post/PostList";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../BLL/selectors/newsSelector";
import {
  getBackgroundObject,
  getTheme,
} from "../BLL/selectors/settingsSelector";
import { loadFirstScreens } from "../helpers/loadFirstScreens";

//TODO add variant music player
const NewsScreen: FC<{
  navigation: StackNavigationProp<RootStackParamList, "News">;
}> = ({ navigation }) => {
  const data = useSelector(getNews);
  const background = useSelector(getBackgroundObject("newsPicture"));
  const { firstMainColor, secondMainColor } = useSelector(getTheme);
  const dispatch = useDispatch();

  useEffect(loadFirstScreens(dispatch), []);

  return (
    <Container>
      <MainContainer {...background} useFooter>
        <MMHader
          useBodyLogo
          useRightMessage
          rightPress={() => navigation.navigate("Dialogs")}
          color={firstMainColor}
        />
        <PostList navigation={navigation} data={data} />
      </MainContainer>
      <FooterBadge
        navigation={navigation}
        color={firstMainColor}
        activeColor={secondMainColor}
      />
    </Container>
  );
};

export default NewsScreen;
