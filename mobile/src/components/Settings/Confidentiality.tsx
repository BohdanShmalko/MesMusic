import React, {FC, useState} from "react";
import {Text, View} from "react-native";
import {Icon} from "native-base";
import {SettingsItem} from "./SettingsItem";

type PropType = {}

export const Confidentiality: FC<PropType> = (props) => {
    const [switchClose, setSwitchClose] = useState(false)
    const changeSwitchClose = () => setSwitchClose(!switchClose)
    return <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name='md-glasses' style={{color: 'white'}}/>
            <Text style={{color: 'white', textTransform: 'uppercase', fontSize: 20}}>Confidentiality</Text>
        </View>
        <View style={{backgroundColor : 'rgba(255,255,255,0.2)'}}>
            <SettingsItem icon='md-glasses' title={'Block account for unsigned users'} colorWord={'white'} colorButton={'#08003d'} useSwitch
            switchValue={switchClose} onPress={changeSwitchClose}/>
            <SettingsItem icon='chatbubbles' title={'Prohibit comments from some users'} colorWord={'white'} colorButton={'rgba(0,0,0,0)'} useButton buttonTitle='Choose'/>
            <SettingsItem icon='md-headset' title={'Do not allow some users to view my music'} colorWord={'white'} colorButton={'rgba(0,0,0,0)'} useButton buttonTitle='Choose'/>
            <SettingsItem icon='book' title={'Do not allow some users to view my trainings'} colorWord={'white'} colorButton={'rgba(0,0,0,0)'} useButton buttonTitle='Choose'/>
            <SettingsItem icon='md-close-circle' title={'Block some users'} colorWord={'white'} colorButton={'rgba(0,0,0,0)'} useButton buttonTitle='Choose'/>

        </View>
    </View>
}