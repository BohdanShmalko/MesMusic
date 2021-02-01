import React, {FC} from 'react'
import {Container, Header, Left, Body, Right, Title, Button, Icon} from "native-base";
import {Image, Text} from 'react-native'
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {TopText} from "../components/Home/TopText";
import {LoginForm} from "../components/Home/LoginForm";

const HomeScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Home'>}> =
    (props) => {
    return (
        <Container>
            <MMHader useBodyLogo/>
            <Container style={{padding : 20, backgroundColor : '#e6e6e6'}}>
                <TopText />
                <LoginForm />
            </Container>
        </Container>
    )
}

export default HomeScreen