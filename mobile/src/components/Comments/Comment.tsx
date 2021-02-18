import React, {FC, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Icon, Thumbnail} from "native-base";
import {cutText} from "../../helpers/cutText";
import {Overlay} from "../Common/Overlay";
import {ButtonInOverlay} from "../Common/ButtonInOverlay";
import {CommentType, navigationType} from "../../types/types";
import {useSelector} from "react-redux";
import {getTheme} from "../../BLL/selectors/settingsSelector";

type PropType = CommentType & { navigation: navigationType }

export const Comment: FC<PropType> = ({navigation, id, text, whoComment, isMy, isComplain}) => {
    const [isAllComment, setIsAllComment] = useState(false)
    const changeAllComment = () => setIsAllComment(!isAllComment)

    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => setVisible(!visible)

    const cut200Symbols = cutText(200)

    const {id: whoCommentId, name: whoCommentName, photo: whoCommentPhoto} = whoComment
    const {secondPrimaryFont, secondMainColor} = useSelector(getTheme)
    return <View style={{
        backgroundColor: isComplain ? secondMainColor :'rgba(255,255,255,0.3)',
        margin: 10,
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row'
    }}>
        <View style={{flex: 3}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View>
                    <Thumbnail
                        source={{uri: whoCommentPhoto}}/>
                </View>
                <View>
                    <Text style={{color: secondPrimaryFont}}>{whoCommentName}</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={{flex: 10}}>
            <TouchableOpacity onPress={changeAllComment}>
                {isAllComment ? <Text style={{color: secondPrimaryFont}}>{text}</Text> :
                    <Text style={{color: secondPrimaryFont}}>{cut200Symbols(text)}</Text>}
            </TouchableOpacity>

        </View>
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={toggleOverlay}>
                <Icon style={{color: secondPrimaryFont}} name='md-menu'/>
            </TouchableOpacity>
        </View>

        <Overlay visible={visible} setVisible={toggleOverlay} transparent>
            <View style={{alignItems: 'center'}}>
                {isMy ?
                    <ButtonInOverlay style={{borderBottomColor : secondPrimaryFont}} textStyle={{color: secondPrimaryFont}} title={'Delete message'}/>:
                    <ButtonInOverlay style={{borderBottomColor : secondPrimaryFont}} textStyle={{color: secondPrimaryFont}} title={'Complain to the author'}/>}
            </View>
        </Overlay>
    </View>
}