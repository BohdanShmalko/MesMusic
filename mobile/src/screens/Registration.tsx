import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {RegistrationForm} from "../components/Registration/RegistrationForm";
import {ScrollView} from "react-native";
import {AuthContext} from "../../App";
import {useSelector} from "react-redux";
import {getLanguage} from "../BLL/selectors/settingsSelector";
import vocabulary from "../vocabulary/vocabulary";

const RegistrationScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Registration'> }> = ({navigation}) => {
    const { signUp } = React.useContext(AuthContext);
    const language = useSelector(getLanguage)
    return (
        <Container>
            <MMHader title={vocabulary['registration'][language]} useLeftBack leftPress={() => navigation.goBack()}/>
            <MainContainer>
                <ScrollView>
                    <RegistrationForm signUp={signUp}/>
                </ScrollView>
            </MainContainer>
        </Container>
    )
}

export default RegistrationScreen