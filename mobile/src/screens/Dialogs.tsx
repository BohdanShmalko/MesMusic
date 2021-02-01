import React, {FC} from 'react'
import {View, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";

const DialogsScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Dialogs'>}> = (props) => {
    return (
        <View>
            <Text>DialogsScreen</Text>
        </View>
    )
}

export default DialogsScreen