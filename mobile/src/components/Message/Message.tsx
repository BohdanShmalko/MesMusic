import React, {FC} from "react";
import {Button, Text, Thumbnail, Icon, Spinner} from 'native-base';
import {TouchableOpacity, View} from "react-native";

type PropType = {
    id?: string
    isMyMessage: boolean
    status : 'in process' | 'sent' | 'revised'
}

export const Message: FC<PropType> = ({isMyMessage, status}) => {
    let leftComponent, rightComponent
    const emptyComponent = <View style={{flex: 2}}></View>
    const avatarComponent = <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={() => {
            console.log('to profile')}}>
            <Thumbnail style={{width: 32, height: 32}}
                       source={{uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80'}}/>
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
                console.log('window menu')}}>
            <Text>skk kdkdk dkkdk kdkdk kdkdk ssc skk kdkdk dkkdk kdkdk kdkdk ssc skk kdkdk dkkdk kdkdk kdkdk ssc skk
                kdkdk dkkdk kdkdk kdkdk ssc skk kdkdk dkkdk kdkdk kdkdk ssc skk kdkdk dkkdk kdkdk kdkdk ssc skk kdkdk
                dkkdk kdkdk kdkdk ssc skk kdkdk dkkdk kdkdk kdkdk ssc skk kdkdk dkkdk kdkdk kdkdk ssc </Text>

            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}></View>
                <View style={{flexDirection : 'row'}}>
                <Text style={{fontSize: 12}}>mon 22:00</Text>
                    {status === 'in process' &&
                        // Icon name = 'alert'
                    <Spinner color = 'black' size = {12} style = {{marginTop : -32, marginBottom : -32, paddingLeft : 5}}/>}
                    {status === 'revised' &&
                    <Icon name = 'md-mail-open' style={{fontSize: 12, paddingLeft : 5}}/>}
                    {status === 'sent' &&
                    <Icon name = 'md-checkmark-circle' style={{fontSize: 12, paddingLeft : 5}}/>}
                </View>
            </View>
            </TouchableOpacity>
        </View>
        {rightComponent}
    </View>
}