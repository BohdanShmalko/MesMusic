import React, {FC} from "react";
import {FlatList} from "react-native";
import {List} from "native-base";
import {Like} from "./Like";
import {LikeType, navigationType} from "../../types/types";

type PropType = {
    navigation: navigationType
    data : Array<LikeType>
}

export const LikeList: FC<PropType> = ({data, navigation}) => {
    return <List style={{flex: 1}}>
        <FlatList
            data={data}
            renderItem={({item}) => <Like data = {item} navigation={navigation}/>}
            keyExtractor={item => item.id}
        />
    </List>
}