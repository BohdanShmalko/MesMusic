import React, {FC} from "react";
import {Text} from "react-native";

type PropType = {}

export const TopText : FC<PropType> = (props) => {
    return <Text style={{textAlign : 'center', fontStyle : 'italic', textTransform : 'uppercase'}}>
        Let's help to learn to feel music and find people with common interests
    </Text>
}