import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";

const MusicScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Music'>}> = ({navigation}) => {
    return (
        <Container>
            <MMHader title='Music' useLeftBack leftPress={() => navigation.navigate('News')} useRightMessage rightPress={() => navigation.navigate('Dialogs')}/>
            <MainContainer>

            </MainContainer>
            <FooterBadge navigation={navigation} active={'music'}/>
        </Container>
    )
}

export default MusicScreen