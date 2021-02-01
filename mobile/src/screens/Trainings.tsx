import React, {FC} from 'react'
import {View, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";

const TrainingScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Training'>}> = (props) => {
    return (
        <View>
            <Text>TrainingScreen</Text>
        </View>
    )
}

export default TrainingScreen