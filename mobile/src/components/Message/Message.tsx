import React, {FC} from "react";
import {Button, Text, Thumbnail} from 'native-base';
import {View} from "react-native";

type PropType = {
    id?: string
    isMyMessage: boolean
}

export const Message: FC<PropType> = ({isMyMessage}) => {
    let leftComponent, rightComponent
    const emptyComponent = <View style={{flex: 2}}></View>
    const avatarComponent = <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Button transparent>
            <Thumbnail style={{width: 32, height: 32}}
                       source={{uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80'}}/>
        </Button>
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
            <Text>skk kdkdk dkkdk kdkdk kdkdk ssc skk kdkdk dkkdk kdkdk kdkdk ssc skk kdkdk dkkdk kdkdk kdkdk ssc skk
                kdkdk dkkdk kdkdk kdkdk ssc skk kdkdk dkkdk kdkdk kdkdk ssc skk kdkdk dkkdk kdkdk kdkdk ssc skk kdkdk
                dkkdk kdkdk kdkdk ssc skk kdkdk dkkdk kdkdk kdkdk ssc skk kdkdk dkkdk kdkdk kdkdk ssc </Text>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}></View>
                <Text style={{fontSize: 12}}>mon 22:00</Text>
            </View>
        </View>
        {rightComponent}
    </View>
}