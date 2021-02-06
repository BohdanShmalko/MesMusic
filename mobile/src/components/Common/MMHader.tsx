import React, {FC} from "react";
import {Body, Button, Header, Icon, Left, Right, Title, Thumbnail} from "native-base";
import {Image, Text, TouchableOpacity, View} from "react-native";

type PropType = {
    useLeftBack? : boolean
    leftPress ?: () => void

    useBodyLogo? : boolean
    useBodyAvatar ?: {
        uri : string
        title : string
    }
    title? : string

    useRightMessage? : boolean
    useRigthSettings? : boolean
    useRightMenu? : boolean
    rightPress ?: () => void
    rightTitle ?: string

    color ?: string
}

export const MMHader : FC<PropType> = ({rightTitle, color = '#08003d', useLeftBack, useBodyLogo, title, useRightMessage, leftPress, useRigthSettings, rightPress, useBodyAvatar, useRightMenu}) => {
    return <Header style={{backgroundColor : color}}>
        <Left>
        {useLeftBack &&
        <TouchableOpacity onPress = {leftPress}>
            <Icon name='arrow-back' style = {{color : 'white'}}/>
        </TouchableOpacity>
        }
        </Left>
        <Body>
        {useBodyLogo && <View style={{flexDirection : 'row'}}>
            <Image
                style={{width : 64, height : 64}}
                source={require('../../../assets/icon.png')}
            />
            <Title style={{fontStyle : 'italic', marginTop : '15%'}}>Mesmusic</Title>
        </View>}
            {title && <Text style={{color : 'white', fontSize : 20}}>{title}</Text>}
            {useBodyAvatar && <View style={{flexDirection : 'row'}}>
                <Thumbnail source={{ uri: useBodyAvatar.uri }} style = {{width : 40, height : 40}}/>
                <Text style={{padding : '5%', fontSize : 20, color : 'white'}}>{useBodyAvatar.title}</Text>
            </View>}
        </Body>

        <Right>
        {useRightMessage &&
            <TouchableOpacity onPress={rightPress}>
                <Icon name='message1' type = "AntDesign" style = {{color : 'white'}}/>
            </TouchableOpacity>
        }
            {useRigthSettings &&
            <TouchableOpacity onPress = {rightPress}>
                <Icon name='setting' type = "AntDesign" style = {{color : 'white'}}/>
            </TouchableOpacity>
            }
            {rightTitle && <Text style={{color : 'white', textAlign : 'center', fontStyle : 'italic', opacity : 0.7, fontSize : 10}}>{rightTitle}</Text>}
            {useRightMenu && <TouchableOpacity onPress = {rightPress}>
                <Icon name = 'md-menu' style = {{color : 'white'}}/>
            </TouchableOpacity>}
        </Right>
    </Header>
}