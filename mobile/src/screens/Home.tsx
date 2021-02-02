import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {TopText} from "../components/Home/TopText";
import {LoginForm} from "../components/Home/LoginForm";
import {MainContainer} from "../components/Common/MainContainer";

const HomeScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Home'>}> =
    ({navigation}) => {
    return (
        <Container>
            <MMHader useBodyLogo/>
            <MainContainer>
                <TopText />
                <LoginForm navigation={navigation}/>
            </MainContainer>
        </Container>
    )
}

export default HomeScreen