import React, {FC} from "react";
import {Text, TouchableOpacity} from "react-native";
import {navigationType} from "../../types/types";

type PropType = {
    navigation: navigationType
    to: any
    title: string
}

export const BlueLink: FC<PropType> = ({navigation, to, title}) => {
    return <TouchableOpacity
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical : 10,
            marginHorizontal : 50,
            padding: 10,
            borderColor: '#147d91',
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }}
        onPress={() => navigation.navigate(to)}>
        <Text style={{textTransform: 'uppercase', color: '#147d91', fontWeight: 'bold'}}>
            {title}
        </Text>
    </TouchableOpacity>
}