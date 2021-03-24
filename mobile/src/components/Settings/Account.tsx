import React, {FC, useState} from "react";
import {Text, View} from "react-native";
import {Icon} from "native-base";
import {SettingsItem} from "./SettingsItem";
import {useDispatch, useSelector} from "react-redux";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";
import {Overlay} from "../Common/Overlay";
import {ButtonInOverlay} from "../Common/ButtonInOverlay";
import {changeLanguageTo} from "../../helpers/changeLanguage";

type PropType = {}

export const Account: FC<PropType> = (props) => {
    const dispatch = useDispatch()
    const [switchVolume, setSwitchVolume] = useState(true)
    const changeSwitchVolume = () => setSwitchVolume(!switchVolume)

    const [changeLanguage, setChangeLanguage] = useState(false)
    const toggleChangeLanguage = () => setChangeLanguage(!changeLanguage);

    const language = useSelector(getLanguage)

    const {firstMainColor, firstPrimaryFont} = useSelector(getTheme)
    return <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name='md-home' style={{color: firstPrimaryFont}}/>
            <Text style={{
                color: firstPrimaryFont,
                textTransform: 'uppercase',
                fontSize: 20
            }}>{vocabulary['account'][language]}</Text>
        </View>
        <View style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
            <SettingsItem icon='md-clipboard' title={vocabulary['change inf'][language]} colorWord={firstPrimaryFont}
                          colorButton={'rgba(0,0,0,0)'} useButton buttonTitle={vocabulary['change'][language]}/>
            <SettingsItem icon='md-notifications-off' title={vocabulary['sound'][language]} colorWord={firstPrimaryFont}
                          colorButton={firstMainColor} useSwitch
                          switchValue={switchVolume} onPress={changeSwitchVolume}/>
            <SettingsItem icon='md-globe' title={vocabulary['change language'][language]} colorWord={firstPrimaryFont}
                          colorButton={'rgba(0,0,0,0)'} useButton buttonTitle={vocabulary['choose'][language]}
                          onPress={toggleChangeLanguage}/>
        </View>

        <Overlay setVisible={toggleChangeLanguage} visible={changeLanguage} transparent>
            <View>
                <ButtonInOverlay title={'English'} onPress={changeLanguageTo('en', dispatch, toggleChangeLanguage)}/>
                <ButtonInOverlay title={'Українська'} onPress={changeLanguageTo('ua', dispatch, toggleChangeLanguage)}/>
            </View>
        </Overlay>
    </View>
}