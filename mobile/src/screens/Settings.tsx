import React, {FC} from 'react'
import {View, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";

const SettingsScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Settings'>}> = (props) => {
    return (
        <View>
            <Text>SettingsScreen</Text>
        </View>
    )
}

export default SettingsScreen