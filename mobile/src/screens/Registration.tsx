import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {RegistrationForm} from "../components/Registration/RegistrationForm";
import {ScrollView} from "react-native";

const RegistrationScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Registration'> }> = ({navigation}) => {
    return (
        <Container>
            <MMHader title='Registration' useLeftBack leftPress={() => navigation.goBack()}/>
            <MainContainer>
                <ScrollView>
                    <RegistrationForm/>
                </ScrollView>
            </MainContainer>
        </Container>
    )
}

export default RegistrationScreen