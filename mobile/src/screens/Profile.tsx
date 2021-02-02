import React, {FC} from 'react'
import {Container, Button, Footer, FooterTab, Badge, Icon, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";

const ProfileScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Profile'>}> = ({navigation}) => {
    return (
        <Container>
            <MMHader title='Profile' useLeftBack leftPress={() => navigation.navigate('News')} useRigthSettings rightPress={() => navigation.navigate('Settings')}/>
            <MainContainer>

            </MainContainer>
            <FooterBadge navigation={navigation} active={'profile'}/>
        </Container>
    )
}

export default ProfileScreen