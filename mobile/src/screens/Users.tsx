import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";

const UsersScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Users'>}> = ({navigation}) => {
    return (
        <Container>
            <MMHader title='Users' useLeftBack leftPress={() => navigation.navigate('News')} useRightMessage rightPress={() => navigation.navigate('Dialogs')}/>
            <MainContainer>

            </MainContainer>
            <FooterBadge navigation={navigation} active={'friends'}/>
        </Container>
    )
}

export default UsersScreen