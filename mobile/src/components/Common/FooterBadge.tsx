import React, {FC} from "react";
import {Button, Footer, FooterTab, Badge, Icon, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";

type PropType = {
    active ?: 'friends' | 'music' | 'study' | 'likes' | 'profile'
    navigation : StackNavigationProp<RootStackParamList, "Home" | "Dialogs" | "ForgetPassword" | "Music" | "News" | "Profile" | "Registration" | "Settings" | "Training" | "Users" | "Likes" | "Message">
    color ?: string
}

export const FooterBadge : FC<PropType> = ({color = '#08003d', active, navigation}) => {

    return <Footer>
        <FooterTab style = {{backgroundColor : color}}>
            <Button badge vertical {...{active: active === 'friends'}} style={{marginTop : -5}} onPress = {() => navigation.navigate('Users')}>
                <Badge style = {{backgroundColor : 'green'}}><Text>2</Text></Badge>
                <Icon name="man" />
                <Text></Text>
            </Button>
            <Button vertical {...{active: active === 'music'}} style={{marginTop : -5}} onPress = {() => navigation.navigate('Music')}>
                <Icon name="play" />
                <Text></Text>
            </Button>
            <Button  badge vertical {...{active: active === 'study'}} style={{marginTop : -5}} onPress = {() => navigation.navigate('Training')}>
                <Badge style = {{backgroundColor : 'green'}}><Text>51</Text></Badge>
                <Icon active name="book" />
                <Text></Text>
            </Button>
            <Button vertical badge {...{active: active === 'likes'}} style={{marginTop : -5}} onPress = {() => navigation.navigate('Likes')}>
                <Badge style = {{backgroundColor : 'green'}}><Text>51</Text></Badge>
                <Icon name="heart" />
                <Text></Text>
            </Button>
            <Button vertical {...{active: active === 'profile'}} style={{marginTop : -5}} onPress = {() => navigation.navigate('Profile')}>
                <Icon name="person" />
                <Text></Text>
            </Button>
        </FooterTab>
    </Footer>
}