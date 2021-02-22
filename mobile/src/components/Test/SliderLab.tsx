import React, {FC, useState} from "react";
import {Text, View} from "react-native";
import Slider from '@react-native-community/slider';

type PropType = {}

export const SliderLab: FC<PropType> = (props) => {
    const [value, setValue] = useState(0)
    return <View>
        <Text>Value : {value}</Text>
        <Slider
            style={{width: 200, height: 40}}
            step={2}
            value={value}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#1f8fff"
            maximumTrackTintColor="#fc1c50"
            onValueChange={setValue}
        />
    </View>
}