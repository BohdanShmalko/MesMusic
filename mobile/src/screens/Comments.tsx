import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {KeyboardAvoidingView, Platform} from "react-native";
import {MessageTextArea} from "../components/Message/MessageTextArea";
import {CommentsList} from "../components/Comments/CommentsList";
import {useSelector} from "react-redux";
import {getComments} from "../BLL/selectors/commentSelector";
import {getBackgroundObject, getTheme} from "../BLL/selectors/settingsSelector";

const CommentsScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Dialogs'> }> = ({navigation}) => {
    const data = useSelector(getComments)
    const background = useSelector(getBackgroundObject('commentsPicture'))
    const {firstMainColor} = useSelector(getTheme)
    return (
        <Container>
            <MMHader color={firstMainColor} title='Comments' useLeftBack leftPress={() => navigation.navigate('News')} />
            <MainContainer style={{flex: 1}} {...background}>
                <KeyboardAvoidingView behavior={Platform.OS ? 'padding' : undefined}>
                    <CommentsList data={data} navigation={navigation}/>
                </KeyboardAvoidingView>
            </MainContainer>
            <MessageTextArea/>
        </Container>
    )
}

export default CommentsScreen