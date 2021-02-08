import React, {FC} from "react";
import {FlatList, View} from "react-native";
import {Comment} from "./Comment";

type PropType = {}

export const CommentsList: FC<PropType> = (props) => {
    return <View>
        <FlatList data={[{id: '1'}, {id: '2'}]}
                  renderItem={({item}) => <Comment {...item}/>}
                  keyExtractor={item => item.id}
                  ListFooterComponent={<View style={{height: 180}}></View>}
        />
    </View>
}