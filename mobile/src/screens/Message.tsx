import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";

const MessageScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Likes'>}> = ({navigation}) => {
    return (
        <Container>
            <MMHader useBodyAvatar = {{uri : 'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon-thumbnail.png', title: 'user name'}}
                     useLeftBack leftPress={() => navigation.navigate('Dialogs')} color={'#808235'}/>
            <MainContainer>

            </MainContainer>
        </Container>
    )
}

export default MessageScreen