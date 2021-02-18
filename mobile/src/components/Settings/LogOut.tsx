import React, {FC} from "react";
import {Text, View} from "react-native";
import {Icon} from "native-base";
import {SettingsItem} from "./SettingsItem";
import {useSelector} from "react-redux";
import {getTheme} from "../../BLL/selectors/settingsSelector";

type PropType = {}

export const LogOut: FC<PropType> = (props) => {
    const {firstPrimaryFont} = useSelector(getTheme)
    return <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name='md-log-out' style={{color: firstPrimaryFont}}/>
            <Text style={{color: firstPrimaryFont, textTransform: 'uppercase', fontSize: 20}}>Log out</Text>
        </View>
        <View style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
            <SettingsItem icon='md-log-out' title={'Exit'} colorWord={firstPrimaryFont} colorButton={'rgba(0,0,0,0)'}
                          useButton buttonTitle='Log out'/>
        </View>
    </View>
}