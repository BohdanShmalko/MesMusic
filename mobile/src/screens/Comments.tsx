import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {KeyboardAvoidingView, Platform, Text, View} from "react-native";
import {MessageTextArea} from "../components/Message/MessageTextArea";
import {CommentsList} from "../components/Comments/CommentsList";

const CommentsScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Dialogs'> }> = ({navigation}) => {
    return (
        <Container>
            <MMHader title='Comments' useLeftBack leftPress={() => navigation.navigate('News')}/>
            <MainContainer style={{flex: 1}}
                           image={{uri: 'https://i.pinimg.com/originals/ee/93/2c/ee932c96b927bbcedb7accb2ec617472.jpg'}}>
                <KeyboardAvoidingView behavior={Platform.OS ? 'padding' : undefined}>
                    <CommentsList/>
                </KeyboardAvoidingView>
            </MainContainer>
            <MessageTextArea/>
        </Container>
    )
}

export default CommentsScreen