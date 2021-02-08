import React, {FC} from "react";
import {Text, View} from "react-native";
import {Icon} from "native-base";
import {SettingsItem} from "./SettingsItem";

type PropType = {}

export const LogOut: FC<PropType> = (props) => {
    return <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name='md-log-out' style={{color: 'white'}}/>
            <Text style={{color: 'white', textTransform: 'uppercase', fontSize: 20}}>Log out</Text>
        </View>
        <View style={{backgroundColor : 'rgba(255,255,255,0.2)'}}>
            <SettingsItem icon='md-log-out' title={'Exit'} colorWord={'white'} colorButton={'rgba(0,0,0,0)'} useButton buttonTitle='Log out'/>

        </View>
    </View>
}