import React, {FC} from 'react'
import {View, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";

const UsersScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Users'>}> = (props) => {
    return (
        <View>
            <Text>UsersScreen</Text>
        </View>
    )
}

export default UsersScreen