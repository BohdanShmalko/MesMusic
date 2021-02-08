import React, {FC, useState} from "react";
import {Text, View} from "react-native";
import {Icon} from "native-base";
import {SettingsItem} from "./SettingsItem";

type PropType = {}

export const Account: FC<PropType> = (props) => {
    const [switchVolume, setSwitchVolume] = useState(true)
    const changeSwitchVolume = () => setSwitchVolume(!switchVolume)
    return <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name='md-home' style={{color: 'white'}}/>
            <Text style={{color: 'white', textTransform: 'uppercase', fontSize: 20}}>Account</Text>
        </View>
        <View style={{backgroundColor : 'rgba(255,255,255,0.2)'}}>
            <SettingsItem icon='md-clipboard' title={'Change personal information'} colorWord={'white'} colorButton={'rgba(0,0,0,0)'} useButton />
            <SettingsItem icon='md-notifications-off' title={'Sound notifications'} colorWord={'white'} colorButton={'#08003d'} useSwitch
                          switchValue={switchVolume} onPress={changeSwitchVolume} />
            <SettingsItem icon='md-globe' title={'Change language'} colorWord={'white'} colorButton={'rgba(0,0,0,0)'} useButton buttonTitle='Choose'/>
        </View>
    </View>
}