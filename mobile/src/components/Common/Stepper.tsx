import React, {FC} from "react";
import {Text, TouchableOpacity, View} from "react-native";

type PropType = {
    style?: any
    position?: 'right' | 'center' | 'left'
    color?: string,
    fontWidth ?: number
    value : number
    min : number
    max : number
    increment : number
    onChange : (newValue : number) => void
}

export const Stepper: FC<PropType> = ({style, position, color, fontWidth, value, increment, max, min, onChange}) => {

    const minusValue = () => {
        const newValue = value - increment
        min !<= newValue && onChange(newValue)
    }

    const plusValue = () => {
        const newValue = value + increment
        max !>= newValue && onChange(newValue)
    }

    const valueElement = <View style={{flex : 1}}>
        <Text style={{
            color: color || 'green', fontSize: fontWidth || 30, padding: fontWidth ? fontWidth/3 : 10, borderWidth: 1,
            borderColor: color || 'green', textAlign : 'center'
        }}>{value}</Text>
    </View>
    return <View style={{
        justifyContent : 'center',
        flexDirection: 'row',
        backgroundColor: '#cfd0d1',
        borderWidth: 2,
        borderColor: color || 'green', ...style
    }}>
        {position === 'left' && valueElement}
        <TouchableOpacity style={{flex : 1}} onPress={minusValue}>
            <Text style={{
                color: color || 'green', fontSize: fontWidth || 30, padding: fontWidth ? fontWidth/3 : 10, borderWidth: 1,
                borderColor: color || 'green', textAlign : 'center'
            }}>-</Text>
        </TouchableOpacity>
        {position === 'center' && valueElement}
        <TouchableOpacity style={{flex : 1}} onPress={plusValue}>
            <Text style={{
                color: color || 'green', fontSize: fontWidth || 30, padding: fontWidth ? fontWidth/3 : 10, borderWidth: 1,
                borderColor: color || 'green', textAlign : 'center'
            }}>+</Text>
        </TouchableOpacity>
        {position === 'right' && valueElement}
    </View>
}