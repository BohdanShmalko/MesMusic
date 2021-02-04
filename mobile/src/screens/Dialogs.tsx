import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {SearchBar} from "../components/Common/SearchBar";
import {BlueLink} from "../components/Common/BlueLink";
import {AllMessages} from "../components/Dialogs/AllMessages";

const DialogsScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Dialogs'> }> = ({navigation}) => {
    return (
        <Container>
            <MMHader title='Dialogs' useLeftBack leftPress={() => navigation.navigate('News')} useRightMenu/>
            <MainContainer minus={90} style={{flex : 1}}>
                <SearchBar />
                <BlueLink navigation={navigation} to={'Message'} title={'test to message'}/>
                <AllMessages />
            </MainContainer>
            <FooterBadge navigation={navigation}/>
        </Container>
    )
}

export default DialogsScreen