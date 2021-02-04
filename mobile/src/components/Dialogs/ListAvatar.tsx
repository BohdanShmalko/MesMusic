import React, {FC} from "react";
import {Body, Button, Left, ListItem, Right, Text, Thumbnail} from 'native-base';
import {cutText} from "../../helpers/cutText";
import {TouchableOpacity} from "react-native";


type PropType = {
    uriAvatar: string
    name: string
    lastMessage: string
    lastMessageTime: string
}

export const ListAvatar: FC<PropType> = ({uriAvatar, name, lastMessage, lastMessageTime}) => {
    const cut30Symbols = cutText(30)
    return <ListItem avatar>
        <Left>
            <Button transparent onPress={() => {
                console.log('to profile of this person')
            }}>
                <Thumbnail source={{uri: uriAvatar}}/>
            </Button>
        </Left>
        <Body>
            <TouchableOpacity onPress={() => {
                console.log('to message with this user')
            }}>
                <Text style={{color: 'white'}}>{name}</Text>
                <Text note>{cut30Symbols(lastMessage)}</Text>
            </TouchableOpacity>
        </Body>
        <Right>
            <Text note>{lastMessageTime}</Text>
        </Right>
    </ListItem>
}