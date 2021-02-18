import React, {FC} from "react";
import {Dimensions, FlatList} from "react-native";
import {List} from "native-base";
import {User} from "./User";
import {navigationType, UserType} from "../../types/types";

type PropType = {
    navigation: navigationType
    data : Array<UserType>
}

export const UsersList: FC<PropType> = ({navigation, data}) => {
    const screenWidth = Dimensions.get('window').width
    return <List style={{
        flex: 1,
        marginTop: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: screenWidth
    }}>
        <FlatList
            data={data}
            renderItem={({item}) => <User {...item} navigation={navigation}/>}
            keyExtractor={item => item.id}
        />

    </List>
}