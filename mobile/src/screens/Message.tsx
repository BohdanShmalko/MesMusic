import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {MessageTextArea} from "../components/Message/MessageTextArea";
import {MessageList} from "../components/Message/MessageList";

const MessageScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Likes'>}> = ({navigation}) => {
    return (
        <Container>
            <MMHader useBodyAvatar = {{uri : 'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon-thumbnail.png', title: 'user name'}}
                     useLeftBack leftPress={() => navigation.navigate('Dialogs')} rightTitle = 'status : was online at 22:00' useRightMenu/>
            <MainContainer style={{flex : 1}}>
                <MessageList/>
            </MainContainer>
        <MessageTextArea />
        </Container>
    )
}

export default MessageScreen