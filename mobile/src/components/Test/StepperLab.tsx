import React, {FC, useState} from "react";
import {Text, View} from "react-native";
import {Stepper} from "../Common/Stepper";

type PropType = {}

export const StepperLab: FC<PropType> = (props) => {
    const [value, setValue] = useState(20)
    return <View>
        <Stepper position={'center'} color={'#1f8fff'} fontWidth={20} style={{width: 200}} value={value} increment={10}
                 max={100} min={0} onChange={setValue}/>
    </View>
}