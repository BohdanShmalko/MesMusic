import React, {FC} from "react";
import {Text} from "react-native";
import {navigationType} from "../../types/types";

type PropType = {
    navigation : navigationType
    to : any
    title : string
}

export const BlueLink : FC<PropType> = ({navigation, to, title}) => {
    return <Text style={{textAlign : 'center', color : '#3849ff', marginTop : 5, textDecorationLine : 'underline'}} onPress={() => navigation.navigate(to)}>
        {title}
    </Text>
}