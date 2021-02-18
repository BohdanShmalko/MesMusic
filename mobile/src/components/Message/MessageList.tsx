import React, {FC} from "react";
import {List} from "native-base";
import {FlatList, View} from "react-native";
import {Message} from "./Message";
import {MessageType} from "../../types/types";

type PropType = {
    data : Array<MessageType>
}

export const MessageList: FC<PropType> = ({data}) => {

    return <List>
        <FlatList
            data={data}
            renderItem={({item}) => <Message {...item}/>}
            keyExtractor={item => item.id}
            ListFooterComponent={<View style={{height : 180}}></View>}
        />
    </List>
}