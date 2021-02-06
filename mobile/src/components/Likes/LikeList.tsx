import React, {FC} from "react";
import {FlatList, Text, View} from "react-native";
import {List} from "native-base";
import {ListAvatar} from "../Dialogs/ListAvatar";
import {Like} from "./Like";
import {navigationType} from "../../types/types";

type PropType = {
    navigation : navigationType
}

export const LikeList : FC<PropType> = ({navigation}) => {
    return <List style={{flex : 1}}>
        <FlatList
            data={[{id : '1'}, {id : '2'}, {id : '3'}, {id : '4'}, {id : '5'}, {id : '6'}, {id : '7'}]}
            renderItem={({item}) => <Like {...item} navigation = {navigation}/>}
            keyExtractor={item => item.id}
        />
    </List>
}