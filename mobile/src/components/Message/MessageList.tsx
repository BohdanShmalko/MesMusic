import React, {FC} from "react";
import {List} from "native-base";
import {FlatList} from "react-native";
import {Message} from "./Message";

type PropType = {}

export const MessageList : FC<PropType> = (props) => {
    return <List style={{flex : 1, marginBottom : 120}}>
    <FlatList
        data = {[{id : '1', isMyMessage : true}, {id : '2', isMyMessage : false},
            {id : '3', isMyMessage : true}, {id : '4', isMyMessage : false},]}
        renderItem={({item}) => <Message {...item}/>}
        keyExtractor={item => item.id}
    />
    </List>
}