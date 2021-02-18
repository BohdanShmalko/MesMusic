import React, {FC} from "react";
import {FlatList, View} from "react-native";
import {Comment} from "./Comment";
import {CommentType, navigationType} from "../../types/types";

type PropType = {
    navigation : navigationType
    data : Array<CommentType>}

export const CommentsList: FC<PropType> = ({data, navigation}) => {
    return <View>
        <FlatList data={data}
                  renderItem={({item}) => <Comment navigation={navigation} {...item}/>}
                  keyExtractor={item => item.id}
                  ListFooterComponent={<View style={{height: 180}}></View>}
        />
    </View>
}