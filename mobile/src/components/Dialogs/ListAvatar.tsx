import React, {FC} from "react";
import {Badge, Body, Left, ListItem, Right, Text, Thumbnail} from 'native-base';
import {cutText} from "../../helpers/cutText";
import {TouchableOpacity, View} from "react-native";
import {navigationType} from "../../types/types";


type PropType = {
    uriAvatar: string
    name: string
    lastMessage: string
    lastMessageTime: string
    howManyNotRead ?: number
    navigation : navigationType
}

export const ListAvatar: FC<PropType> = ({navigation, howManyNotRead, uriAvatar, name, lastMessage, lastMessageTime}) => {
    const cut30Symbols = cutText(30)
    return <ListItem avatar>
        <Left>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Profile')
            }}>
                <Thumbnail source={{uri: uriAvatar}}/>
            </TouchableOpacity>
        </Left>
        <Body>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Message')
            }}>
                <Text style={{color: '#08003d'}}>{name}</Text>
                <Text note style={{color : '#08003d', minHeight : 32}}>{cut30Symbols(lastMessage)}</Text>
            </TouchableOpacity>
        </Body>
        <Right>
            <Text style = {{flex : 1, color: '#08003d'}} note>{lastMessageTime}</Text>
            <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                {howManyNotRead ?
                    <Badge style = {{backgroundColor : '#08003d'}}><Text>{howManyNotRead}</Text></Badge> :
                    <View></View>
                }
            </View>
        </Right>
    </ListItem>
}