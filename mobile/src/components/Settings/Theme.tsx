import React, {FC, useState} from "react";
import {Text, View} from "react-native";
import {Icon} from "native-base";
import {SettingsItem} from "./SettingsItem";
import {useSelector} from "react-redux";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = {}

export const Theme: FC<PropType> = (props) => {
    const [switchTheme, setSwitchTheme] = useState(false)
    const changeSwitchTheme = () => setSwitchTheme(!switchTheme)

    const [switchOnlyImage, setSwitchOnlyImage] = useState(false)
    const changeSwitchOnlyImage = () => setSwitchOnlyImage(!switchOnlyImage)

    const {firstMainColor, secondMainColor, firstPrimaryFont, secondPrimaryFont} = useSelector(getTheme)
    const language = useSelector(getLanguage)

    return <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name='md-color-palette' style={{color: firstPrimaryFont}}/>
            <Text style={{
                color: firstPrimaryFont,
                textTransform: 'uppercase',
                fontSize: 20
            }}>{vocabulary['theme'][language]}</Text>
        </View>
        <View style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
            <SettingsItem icon='md-color-fill' title={vocabulary['change first color'][language]}
                          colorWord={firstPrimaryFont}
                          colorButton={firstMainColor} useButton buttonTitle={vocabulary['change'][language]}/>
            <SettingsItem icon='md-color-fill' title={vocabulary['change second color'][language]}
                          colorWord={firstPrimaryFont}
                          colorButton={secondMainColor} useButton buttonTitle={vocabulary['change'][language]}/>
            <SettingsItem icon='md-create' title={vocabulary['change first font'][language]}
                          colorWord={firstPrimaryFont}
                          colorButton={'rgba(0,0,0,0)'} useButton buttonTitle={vocabulary['change'][language]}/>
            <SettingsItem icon='md-create' title={vocabulary['change second font'][language]}
                          colorWord={secondPrimaryFont}
                          colorButton={'rgba(0,0,0,0)'} useButton buttonTitle={vocabulary['change'][language]}/>
            <SettingsItem icon='md-images' title={vocabulary['picture background'][language]}
                          colorWord={firstPrimaryFont}
                          colorButton={secondMainColor} useSwitch switchValue={switchTheme}
                          onPress={changeSwitchTheme}/>
            {switchTheme && <View style={{paddingHorizontal: 20}}>
                {/*TODO to map in the end*/}
                <SettingsItem icon='md-images' title={vocabulary['single picture'][language]}
                              colorWord={firstPrimaryFont}
                              colorButton={secondMainColor} useSwitch switchValue={switchOnlyImage} onPress={() => {
                    changeSwitchOnlyImage()
                }}/>
                <SettingsItem icon='md-image' title={vocabulary['comments screen'][language]}
                              colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle={vocabulary['set'][language]}/>
                <SettingsItem icon='md-image' title={vocabulary['dialogs screen'][language]}
                              colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle={vocabulary['set'][language]}/>
                <SettingsItem icon='md-image' title={vocabulary['like screen'][language]} colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle={vocabulary['set'][language]}/>
                <SettingsItem icon='md-image' title={vocabulary['message screen'][language]}
                              colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle={vocabulary['set'][language]}/>
                <SettingsItem icon='md-image' title={vocabulary['music screen'][language]} colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle={vocabulary['set'][language]}/>
                <SettingsItem icon='md-image' title={vocabulary['news screen'][language]} colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle={vocabulary['set'][language]}/>
                <SettingsItem icon='md-image' title={vocabulary['profile screen'][language]}
                              colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle={vocabulary['set'][language]}/>
                <SettingsItem icon='md-image' title={vocabulary['settings screen'][language]}
                              colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle={vocabulary['set'][language]}/>
                <SettingsItem icon='md-image' title={vocabulary['training screen'][language]}
                              colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle={vocabulary['set'][language]}/>
                <SettingsItem icon='md-image' title={vocabulary['user screen'][language]} colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle={vocabulary['set'][language]}/>
            </View>}
        </View>

    </View>
}