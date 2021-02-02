import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";

const LikesScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Likes'>}> = ({navigation}) => {
    return (
        <Container>
            <MMHader title='Likes' useLeftBack leftPress={() => navigation.navigate('News')} useRightMessage rightPress={() => navigation.navigate('Dialogs')}/>
            <MainContainer>

            </MainContainer>
            <FooterBadge navigation={navigation} active={'likes'}/>
        </Container>
    )
}

export default LikesScreen