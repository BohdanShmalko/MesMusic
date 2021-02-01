import React, {FC} from 'react'
import {View, Text} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";

const ProfileScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Profile'>}> = (props) => {
    return (
        <View>
            <Text>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen