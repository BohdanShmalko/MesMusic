import React, {FC} from "react";
import {List} from "native-base";
import {FlatList} from "react-native";
import {Message} from "./Message";
import {MessageType} from "../../types/types";

type PropType = {}

export const MessageList : FC<PropType> = (props) => {
    const data : Array<MessageType> = [{id : '1', isMyMessage : true, status : 'in process'},
        {id : '2', isMyMessage : false, status : 'sent'},
        {id : '3', isMyMessage : true, status : 'revised'},
        {id : '4', isMyMessage : false, status : 'in process'}]
    return <List style={{flex : 1, marginBottom : 120}}>
    <FlatList
        data = {data}
        renderItem={({item}) => <Message {...item}/>}
        keyExtractor={item => item.id}
    />
    </List>
}