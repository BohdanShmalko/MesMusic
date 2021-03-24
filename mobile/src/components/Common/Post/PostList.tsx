import React, {FC} from "react";
import {FlatList, Text} from "react-native";
import {Post} from "./Post";
import {navigationType, PostType} from "../../../types/types";

type PropType = {
    navigation : navigationType
    headerComponent ?: FC
    data : Array<PostType>
}

export const PostList: FC<PropType> = ({headerComponent, navigation, data}) => {
    return <FlatList
        ListHeaderComponent={headerComponent}
        data={data}
        renderItem={({item}) => <Post {...item} navigation={navigation}/>}
        keyExtractor={item => item.id}
    />
}