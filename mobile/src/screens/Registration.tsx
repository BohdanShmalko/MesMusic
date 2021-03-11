import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {RegistrationForm} from "../components/Registration/RegistrationForm";
import {ScrollView} from "react-native";
import {AuthContext} from "../../App";

const RegistrationScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Registration'> }> = ({navigation}) => {
    const { signUp } = React.useContext(AuthContext);
    return (
        <Container>
            <MMHader title='Registration' useLeftBack leftPress={() => navigation.goBack()}/>
            <MainContainer>
                <ScrollView>
                    <RegistrationForm signUp={signUp}/>
                </ScrollView>
            </MainContainer>
        </Container>
    )
}

export default RegistrationScreen