import React, {FC} from "react";
import {Body, Header, Icon, Left, Right, Thumbnail, Title} from "native-base";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import {getTheme} from "../../BLL/selectors/settingsSelector";

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
    const {firstPrimaryFont} = useSelector(getTheme)
    return <Header style={{backgroundColor : color}}>
        <Left>
        {useLeftBack &&
        <TouchableOpacity onPress = {leftPress}>
            <Icon name='arrow-back' style = {{color : firstPrimaryFont}}/>
        </TouchableOpacity>
        }
        </Left>
        <Body>
        {useBodyLogo && <View style={{flexDirection : 'row'}}>
            <Image
                style={{width : 64, height : 64}}
                source={require('../../../assets/icon.png')}
            />
            <Title style={{fontStyle : 'italic', marginTop : '15%', color : firstPrimaryFont}}>Mesmusic</Title>
        </View>}
            {title && <Text style={{color : firstPrimaryFont, fontSize : 20}}>{title}</Text>}
            {useBodyAvatar && <View style={{flexDirection : 'row'}}>
                <Thumbnail source={{ uri: useBodyAvatar.uri }} style = {{width : 40, height : 40}}/>
                <Text style={{padding : '5%', fontSize : 20, color : firstPrimaryFont}}>{useBodyAvatar.title}</Text>
            </View>}
        </Body>

        <Right>
        {useRightMessage &&
            <TouchableOpacity onPress={rightPress}>
                <Icon name='message1' type = "AntDesign" style = {{color : firstPrimaryFont}}/>
            </TouchableOpacity>
        }
            {useRigthSettings &&
            <TouchableOpacity onPress = {rightPress}>
                <Icon name='setting' type = "AntDesign" style = {{color : firstPrimaryFont}}/>
            </TouchableOpacity>
            }
            {rightTitle && <Text style={{color : firstPrimaryFont, textAlign : 'center', fontStyle : 'italic', opacity : 0.7, fontSize : 10}}>{rightTitle}</Text>}
            {useRightMenu && <TouchableOpacity onPress = {rightPress}>
                <Icon name = 'md-menu' style = {{color : firstPrimaryFont}}/>
            </TouchableOpacity>}
        </Right>
    </Header>
}