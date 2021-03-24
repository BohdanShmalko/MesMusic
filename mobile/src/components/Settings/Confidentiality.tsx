import React, {FC, useState} from "react";
import {Text, View} from "react-native";
import {Icon} from "native-base";
import {SettingsItem} from "./SettingsItem";
import {useSelector} from "react-redux";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = {}

export const Confidentiality: FC<PropType> = (props) => {
    const [switchClose, setSwitchClose] = useState(false)
    const changeSwitchClose = () => setSwitchClose(!switchClose)
    const language = useSelector(getLanguage)

    const {firstMainColor, firstPrimaryFont} = useSelector(getTheme)
    return <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name='md-glasses' style={{color: firstPrimaryFont}}/>
            <Text style={{
                color: firstPrimaryFont,
                textTransform: 'uppercase',
                fontSize: 20
            }}>{vocabulary['confidentiality'][language]}</Text>
        </View>
        <View style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
            <SettingsItem icon='md-glasses' title={vocabulary['block for unsigned'][language]}
                          colorWord={firstPrimaryFont}
                          colorButton={firstMainColor} useSwitch
                          switchValue={switchClose} onPress={changeSwitchClose}/>
            <SettingsItem icon='chatbubbles' title={vocabulary['prohibit comments'][language]}
                          colorWord={firstPrimaryFont}
                          colorButton={'rgba(0,0,0,0)'} useButton buttonTitle={vocabulary['choose'][language]}/>
            <SettingsItem icon='md-headset' title={vocabulary['prohibit music'][language]}
                          colorWord={firstPrimaryFont} colorButton={'rgba(0,0,0,0)'} useButton
                          buttonTitle={vocabulary['choose'][language]}/>
            <SettingsItem icon='book' title={vocabulary['prohibit trainings'][language]}
                          colorWord={firstPrimaryFont} colorButton={'rgba(0,0,0,0)'} useButton
                          buttonTitle={vocabulary['choose'][language]}/>
            <SettingsItem icon='md-close-circle' title={vocabulary['block users'][language]}
                          colorWord={firstPrimaryFont}
                          colorButton={'rgba(0,0,0,0)'} useButton buttonTitle={vocabulary['choose'][language]}/>

        </View>
    </View>
}