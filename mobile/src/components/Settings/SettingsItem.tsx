import React, {FC} from "react";
import {ColorValue, Text, TouchableOpacity, View} from "react-native";
import {Icon, Switch} from "native-base";

type PropType = {
    icon: string
    title: string
    colorWord: ColorValue
    colorButton: ColorValue
    useButton?: boolean
    useSwitch?: boolean
    switchValue?: boolean
    onPress?: () => void
    buttonTitle?: string
}

export const SettingsItem: FC<PropType> =
    ({title, colorButton, colorWord, icon, useButton, useSwitch, switchValue, onPress, buttonTitle = 'Change'}) => {
        let leftComponent
        if (useButton) leftComponent = <TouchableOpacity onPress={onPress} style={{
            backgroundColor: colorButton,
            justifyContent: 'center',
            borderRadius: 10,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colorWord,
            maxHeight: 30
        }}>
            <Text style={{padding: 5, color: colorWord}}>{buttonTitle}</Text>
        </TouchableOpacity>
        else if (useSwitch) leftComponent =
            <Switch thumbColor={switchValue ? colorButton : "gray"} trackColor={{true: colorWord, false: colorWord}}
                    onValueChange={onPress} value={switchValue}/>


        return <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Icon name={icon} style={{color: colorWord}}/>
            </View>

            <Text style={{color: colorWord, fontSize: 20, flex: 7}}>
                {title}
            </Text>
            <View style={{justifyContent: 'center', flex: 2,}}>
                {leftComponent}
            </View>
        </View>
    }