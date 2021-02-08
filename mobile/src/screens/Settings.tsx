import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {AllSettings} from "../components/Settings/AllSettings";

const SettingsScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Settings'> }> = ({navigation}) => {
    return (
        <Container>
            <MMHader title='Settings' useLeftBack leftPress={() => navigation.navigate('Profile')}/>
            <MainContainer minus={90}>
                <AllSettings/>
            </MainContainer>
            <FooterBadge navigation={navigation}/>
        </Container>
    )
}

export default SettingsScreen