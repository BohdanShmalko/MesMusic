import React, {FC} from 'react'
import {View, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";

const RegistrationScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Registration'>}> = (props) => {
    return (
        <View>
            <Text>RegistrationScreen</Text>
        </View>
    )
}

export default RegistrationScreen