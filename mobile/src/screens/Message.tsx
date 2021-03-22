import React, {FC, useState} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {MessageTextArea} from "../components/Message/MessageTextArea";
import {MessageList} from "../components/Message/MessageList";
import {KeyboardAvoidingView, Platform, TextInput, View} from "react-native";
import {useSelector} from "react-redux";
import {
    getLastAction,
    getMessageData,
    getMessageTitle,
    getMessageUri
} from "../BLL/selectors/messageSelector";
import {getBackgroundObject, getTheme} from "../BLL/selectors/settingsSelector";
import {ButtonInOverlay} from "../components/Common/ButtonInOverlay";
import {Overlay} from "../components/Common/Overlay";

const MessageScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Likes'> }> = ({navigation}) => {
    const messageUri = useSelector(getMessageUri)
    const messageTitle = useSelector(getMessageTitle)
    const messageStatus = useSelector(getLastAction)
    const data = useSelector(getMessageData)
    const background = useSelector(getBackgroundObject('messagePicture'))
    const {firstMainColor, secondPrimaryFont} = useSelector(getTheme)

    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => setVisible(!visible)
    return (
        <Container>
            <MMHader useBodyAvatar={{
                uri: messageUri,
                title: messageTitle
            }}
                     useLeftBack leftPress={() => navigation.navigate('Dialogs')}
                     rightTitle={`last action : ${messageStatus}`} useRightMenu
                     rightPress={toggleOverlay} color={firstMainColor}/>
            <MainContainer style={{flex: 1}} image={require('../../assets/background.jpg')} {...background}>
                <KeyboardAvoidingView behavior={Platform.OS ? 'padding' : undefined}>
                    <MessageList data={data}/>
                </KeyboardAvoidingView>
            </MainContainer>
            <MessageTextArea/>

            <Overlay visible={visible} setVisible={toggleOverlay} transparent>
                <View style={{alignItems: 'center'}}>
                    <TextInput placeholder='change chat name'/>
                    <ButtonInOverlay style={{borderBottomColor: secondPrimaryFont}} textStyle={{color: secondPrimaryFont}}
                                     title='Change name' onPress={() => {
                    }}/>
                    <ButtonInOverlay style={{borderBottomColor: secondPrimaryFont}} textStyle={{color: secondPrimaryFont}}
                                     title='Change photo' onPress={() => {
                    }}/>
                    <ButtonInOverlay style={{borderBottomColor: secondPrimaryFont}} textStyle={{color: secondPrimaryFont}}
                                     title='Leave chat' onPress={() => {
                    }}/>
                </View>
            </Overlay>
        </Container>
    )
}

export default MessageScreen