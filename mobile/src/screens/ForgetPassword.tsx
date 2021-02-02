import React, {FC} from 'react'
import {View, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {Container} from "native-base";

const ForgetPasswordScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'ForgetPassword'>}> = ({navigation}) => {
    return (
        <Container>
            <MMHader title='Forget password' useLeftBack leftBackPress = {() => navigation.goBack()}/>
            <MainContainer>

            </MainContainer>
        </Container>
    )
}

export default ForgetPasswordScreen