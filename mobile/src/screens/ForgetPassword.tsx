import React, {FC} from 'react'
import {View, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";

const ForgetPasswordScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'ForgetPassword'>}> = (props) => {
    return (
        <View>
            <Text>ForgetPasswordScreen</Text>
        </View>
    )
}

export default ForgetPasswordScreen