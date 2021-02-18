import React, {FC, useState} from "react";
import {Text, View} from "react-native";
import {Icon} from "native-base";
import {SettingsItem} from "./SettingsItem";
import {useSelector} from "react-redux";
import {getTheme} from "../../BLL/selectors/settingsSelector";

type PropType = {}

export const Account: FC<PropType> = (props) => {
    const [switchVolume, setSwitchVolume] = useState(true)
    const changeSwitchVolume = () => setSwitchVolume(!switchVolume)

    const {firstMainColor, firstPrimaryFont} = useSelector(getTheme)
    return <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name='md-home' style={{color: firstPrimaryFont}}/>
            <Text style={{color: firstPrimaryFont, textTransform: 'uppercase', fontSize: 20}}>Account</Text>
        </View>
        <View style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
            <SettingsItem icon='md-clipboard' title={'Change personal information'} colorWord={firstPrimaryFont}
                          colorButton={'rgba(0,0,0,0)'} useButton/>
            <SettingsItem icon='md-notifications-off' title={'Sound notifications'} colorWord={firstPrimaryFont}
                          colorButton={firstMainColor} useSwitch
                          switchValue={switchVolume} onPress={changeSwitchVolume}/>
            <SettingsItem icon='md-globe' title={'Change language'} colorWord={firstPrimaryFont}
                          colorButton={'rgba(0,0,0,0)'} useButton buttonTitle='Choose'/>
        </View>
    </View>
}