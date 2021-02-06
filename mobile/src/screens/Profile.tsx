import React, {FC} from 'react'
import {Container, Button, Footer, FooterTab, Badge, Icon, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";

const ProfileScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Profile'> }> = ({navigation}) => {
    const isMyProfile: boolean = true
    let navigateTo: 'Settings' | 'Dialogs'
    isMyProfile ? navigateTo = 'Settings' : navigateTo = 'Dialogs'
    // id SERIAL NOT NULL PRIMARY KEY,
    //     name VARCHAR(50) NOT NULL,
    //     lastName VARCHAR(50) NOT NULL,
    //     mainPhoto VARCHAR(255),
    //     status VARCHAR(100),
    //     aboutMe TEXT,
    //     defaultPath VARCHAR(255) NOT NULL,
    //     email VARCHAR(50) NOT NULL,
    //     password VARCHAR(50) NOT NULL,
    //     nickname VARCHAR(50) NOT NULL
    return (
        <Container>
            <MMHader title='Profile' useLeftBack leftPress={() => navigation.navigate('News')}
                     useRigthSettings={isMyProfile} useRightMessage={!isMyProfile}
                     rightPress={() => navigation.navigate(navigateTo)}/>
            <MainContainer>

            </MainContainer>
            <FooterBadge navigation={navigation} active={'profile'}/>
        </Container>
    )
}

export default ProfileScreen