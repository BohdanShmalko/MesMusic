import React, {FC, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";

type PropType = {
    color?: string
    onStop?: (value: string) => void
    onStart?: (value: string) => void
    onReset?: (value: string) => void
    size?: number
}

export const Timer: FC<PropType> = ({color, onReset, onStart, onStop, size}) => {
    const [value, setValue] = useState(0)
    const [timerId, setTimerId] = useState<any>(undefined)
    const renderTimeMs = 100
    const valueToString = (value: number) => {
        let hours = Math.floor(value / 1000 / 60 / 60)
        let minutes = Math.floor(value / 1000 / 60 - 60 * hours)
        let seconds = Math.floor(value / 1000 - 3600 * hours - 60 * minutes)
        let mSeconds = value - Math.floor(value / 1000) * 1000

        return `${hours}:${minutes}:${seconds}:${mSeconds}`
    }

    const onPressStart = () => {
        onStart && onStart(valueToString(value))
        let CurrentTimerId = setInterval(() => {
            setValue((previous) => previous + renderTimeMs)
        }, renderTimeMs)
        setTimerId(CurrentTimerId)
    }
    const onPressStop = () => {
        onStop && onStop(valueToString(value))
        timerId && clearInterval(timerId)
    }
    const onPressReset = () => {
        onReset && onReset(valueToString(value))
        setValue(0)
    }
    return <View>
        <View style={{flex: 1}}>
            <Text style={{
                textAlign: 'center',
                color: color || 'blue',
                fontSize: size || 20
            }}>{valueToString(value)}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1}} onPress={onPressStart}>
                <Text style={{textAlign: 'center', color: color || 'blue', fontSize: size || 20}}>Start</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flex: 1}} onPress={onPressStop}>
                <Text style={{textAlign: 'center', color: color || 'blue', fontSize: size || 20}}>Pause</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flex: 1}} onPress={onPressReset}>
                <Text style={{textAlign: 'center', color: color || 'blue', fontSize: size || 20}}>Reset</Text>
            </TouchableOpacity>
        </View>
    </View>
}