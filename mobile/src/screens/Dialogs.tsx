import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {BlueLink} from "../components/Common/BlueLink";

const DialogsScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Dialogs'>}> = ({navigation}) => {
    return (
        <Container>
            <MMHader title='Dialogs' useLeftBack leftPress={() => navigation.navigate('News')}/>
            <MainContainer>
                <BlueLink navigation={navigation} to={'Message'} title={'test to message'} />
            </MainContainer>
            <FooterBadge navigation={navigation}/>
        </Container>
    )
}

export default DialogsScreen