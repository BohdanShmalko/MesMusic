import React, {FC} from "react";
import {Badge, Button, Footer, FooterTab, Icon, Text} from "native-base";
import {navigationType,} from "../../types/types";
import {useSelector} from "react-redux";
import {getTheme} from "../../BLL/selectors/settingsSelector";
import {Dimensions} from "react-native";

const displayHeight = Dimensions.get('window').height

type PropType = {
    active?: 'friends' | 'music' | 'study' | 'likes' | 'profile'
    navigation: navigationType
    color?: string
    activeColor?: string
}

type ButtonPropsType = PropType & {
    count: number
    icon: string
    currentActive?: 'friends' | 'music' | 'study' | 'likes' | 'profile'
    moveTo: "Home" | "Dialogs" | "ForgetPassword" | "Music" | "News" | "Profile" | "Registration" | "Settings" | "Training" | "Users" | "Likes" | "Message" | "Comments"}

const FooterButton: FC<ButtonPropsType> = ({
                                               color = '#08003d',
                                               active,
                                               navigation,
                                               activeColor = 'white',
                                               count,
                                               icon,
                                               currentActive,
                                               moveTo
                                           }) => {
    const {firstPrimaryFont} = useSelector(getTheme)
    return <Button badge={!!count} vertical
                   style={{backgroundColor: active === currentActive ? activeColor : undefined}}
                   onPress={() => navigation.navigate(moveTo)}>
        {!!count &&
        <Badge style={{backgroundColor: activeColor, borderWidth: 1, borderColor: color}}><Text
            style={{color: firstPrimaryFont}}>{count}</Text></Badge>}
        <Icon active name={icon} style={{color: firstPrimaryFont}}/>
        <Text></Text>
    </Button>
}

export const FooterBadge: FC<PropType> = (props) => {
    const {color} = props
    return <Footer style={{maxHeight : displayHeight/10}}>
        <FooterTab style={{backgroundColor: color}}>
            <FooterButton {...props} count={10} icon='man' currentActive='friends' moveTo='Users'/>
            <FooterButton {...props} count={0} icon='md-headset' currentActive='music' moveTo='Music'/>
            <FooterButton {...props} count={7} icon='book' currentActive='study' moveTo='Training'/>
            <FooterButton {...props} count={0} icon='heart' currentActive='likes' moveTo='Likes'/>
            <FooterButton {...props} count={0} icon='person' currentActive='profile' moveTo='Profile'/>
        </FooterTab>
    </Footer>
}