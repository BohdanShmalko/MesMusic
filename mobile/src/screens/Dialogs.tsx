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
            <MMHader title='Dialogs' useLeftBack leftPress={() => navigation.navigate('News')} color='#bd7171'/>
            <MainContainer>
                <BlueLink navigation={navigation} to={'Message'} title={'test to message'} />
            </MainContainer>
            <FooterBadge navigation={navigation} color='#bd7171'/>
        </Container>
    )
}

export default DialogsScreen