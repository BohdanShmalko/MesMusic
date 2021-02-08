import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {MainProfile} from "../components/Profile/MainProfile";
import {KeyboardAvoidingView, Platform} from "react-native";

const ProfileScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Profile'> }> = ({navigation}) => {
    const isMyProfile: boolean = true
    let navigateTo: 'Settings' | 'Dialogs'
    isMyProfile ? navigateTo = 'Settings' : navigateTo = 'Dialogs'
    return (
        <Container>
            <MMHader title='Profile' useLeftBack leftPress={() => navigation.navigate('News')}
                     useRigthSettings={isMyProfile} useRightMessage={!isMyProfile}
                     rightPress={() => navigation.navigate(navigateTo)}/>

            <MainContainer>
                <KeyboardAvoidingView behavior={Platform.OS ? 'padding' : undefined}>
                <MainProfile/>
                </KeyboardAvoidingView>
            </MainContainer>
            <FooterBadge navigation={navigation} active={'profile'}/>
        </Container>
    )
}

export default ProfileScreen