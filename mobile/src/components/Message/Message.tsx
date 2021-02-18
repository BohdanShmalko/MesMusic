import React, {FC, useState} from "react";
import {Icon, Spinner, Text, Thumbnail} from 'native-base';
import {TouchableOpacity, View} from "react-native";
import {MessageType} from "../../types/types";
import {useSelector} from "react-redux";
import {getUserUri} from "../../BLL/selectors/messageSelector";
import {getTheme} from "../../BLL/selectors/settingsSelector";
import {ButtonInOverlay} from "../Common/ButtonInOverlay";
import {Overlay} from "../Common/Overlay";

export const Message: FC<MessageType> = ({id, status, isMyMessage, message,userId}) => {
    const uri = useSelector(getUserUri(userId))
    const {secondPrimaryFont} = useSelector(getTheme)
    let leftComponent, rightComponent
    const emptyComponent = <View style={{flex: 2}}></View>
    const avatarComponent = <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={() => {
            console.log('to profile')
        }}>
            <Thumbnail style={{width: 32, height: 32}}
                       source={{uri}}/>
        </TouchableOpacity>
    </View>

    if (isMyMessage) {
        leftComponent = emptyComponent
        rightComponent = avatarComponent
    } else {
        leftComponent = avatarComponent
        rightComponent = emptyComponent
    }


    return <View style={{flex: 1, flexDirection: 'row', marginVertical: 5}}>
        {leftComponent}
        <View style={{
            flex: 7,
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            justifyContent: 'center',
            padding: 5,
            borderRadius: 10
        }}>
            <TouchableOpacity onLongPress={() => {
                console.log('window menu')
            }}>
                <Text style={{color : secondPrimaryFont}}>{message}</Text>

                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}></View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 12, color : secondPrimaryFont}}>mon 22:00</Text>
                        {status === 'in process' &&
                        // Icon name = 'alert'
                        <Spinner color={secondPrimaryFont} size={12} style={{marginTop: -32, marginBottom: -32, paddingLeft: 5}}/>}
                        {status === 'revised' &&
                        <Icon name='md-mail-open' style={{fontSize: 12, paddingLeft: 5, color : secondPrimaryFont}}/>}
                        {status === 'sent' &&
                        <Icon name='md-checkmark-circle' style={{fontSize: 12, paddingLeft: 5, color : secondPrimaryFont}}/>}
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        {rightComponent}
    </View>
}