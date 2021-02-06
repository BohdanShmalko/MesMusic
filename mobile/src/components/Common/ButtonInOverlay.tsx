import React, {FC} from "react";
import {Text, TouchableOpacity} from "react-native";

type PropType = {
    title: string
    onPress?: () => void
    textStyle?: Object
    style?: Object
}

export const ButtonInOverlay: FC<PropType> = ({title, onPress, textStyle, style}) => {
    return <TouchableOpacity style={{padding: 5, borderBottomWidth: 1, borderBottomColor: '#08003d', ...style}}
                             onPress={onPress}>
        <Text style={{fontSize: 17, ...textStyle}}>
            {title}
        </Text>
    </TouchableOpacity>
}