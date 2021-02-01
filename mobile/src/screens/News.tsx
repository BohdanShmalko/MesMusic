import React, {FC} from 'react'
import {View, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";

const NewsScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'News'>}> = (props) => {
    return (
        <View>
            <Text>NewsScreen</Text>
        </View>
    )
}

export default NewsScreen