import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {PostList} from "../components/Common/PostList";

//TODO add variant music player
const NewsScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'News'> }> = ({navigation}) => {
    return (
        <Container>
            <MMHader useBodyLogo useRightMessage rightPress={() => navigation.navigate('Dialogs')}/>
            <MainContainer minus={80}>
                <PostList navigation={navigation}/>
            </MainContainer>
            <FooterBadge navigation={navigation}/>
        </Container>
    )
}

export default NewsScreen