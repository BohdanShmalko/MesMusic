import React, {FC} from 'react'
import {View, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";

const MusicScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Music'>}> = (props) => {
    return (
        <View>
            <Text>MusicScreen</Text>
        </View>
    )
}

export default MusicScreen