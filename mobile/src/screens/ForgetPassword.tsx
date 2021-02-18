import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";

const ForgetPasswordScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'ForgetPassword'> }> = ({navigation}) => {
    return (
        <Container>
            <MainContainer>
                <MMHader title='Forget password' useLeftBack leftPress={() => navigation.goBack()}/>
            </MainContainer>
        </Container>
    )
}

export default ForgetPasswordScreen