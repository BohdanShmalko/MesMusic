import React, {FC, useState} from "react";
import {Text, View} from "react-native";
import {Icon} from "native-base";
import {SettingsItem} from "./SettingsItem";
import {useSelector} from "react-redux";
import {getTheme} from "../../BLL/selectors/settingsSelector";

type PropType = {}

export const Theme: FC<PropType> = (props) => {
    const [switchTheme, setSwitchTheme] = useState(false)
    const changeSwitchTheme = () => setSwitchTheme(!switchTheme)

    const [switchOnlyImage, setSwitchOnlyImage] = useState(false)
    const changeSwitchOnlyImage = () => setSwitchOnlyImage(!switchOnlyImage)

    const {firstMainColor, secondMainColor, firstPrimaryFont, secondPrimaryFont} = useSelector(getTheme)
    return <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name='md-color-palette' style={{color: firstPrimaryFont}}/>
            <Text style={{color: firstPrimaryFont, textTransform: 'uppercase', fontSize: 20}}>Theme</Text>
        </View>
        <View style={{backgroundColor : 'rgba(255,255,255,0.2)'}}>
            <SettingsItem icon='md-color-fill' title='Change the first main color' colorWord={firstPrimaryFont}
                          colorButton={firstMainColor} useButton/>
            <SettingsItem icon='md-color-fill' title='Change the second main color' colorWord={firstPrimaryFont}
                          colorButton={secondMainColor} useButton/>
            <SettingsItem icon='md-create' title='Change the first primary font color' colorWord={firstPrimaryFont}
                          colorButton={'rgba(0,0,0,0)'} useButton/>
            <SettingsItem icon='md-create' title='Change the second primary font color' colorWord={secondPrimaryFont}
                          colorButton={'rgba(0,0,0,0)'} useButton/>
            <SettingsItem icon='md-images' title='Picture on the background' colorWord={firstPrimaryFont}
                          colorButton={secondMainColor} useSwitch switchValue={switchTheme} onPress={changeSwitchTheme}/>
            {switchTheme && <View style={{paddingHorizontal : 20}}>
                {/*TODO to map in the end*/}
                <SettingsItem icon='md-images' title='Single picture on the background' colorWord={firstPrimaryFont}
                              colorButton={secondMainColor} useSwitch switchValue={switchOnlyImage} onPress={() => {changeSwitchOnlyImage()}}/>
                <SettingsItem icon='md-image' title='Set comments screen' colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set dialogs screen' colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set like screen' colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set message screen' colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set music screen' colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set news screen' colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set profile screen' colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set settings screen' colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set training screen' colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set user screen' colorWord={firstPrimaryFont}
                              colorButton={firstMainColor} useButton buttonTitle='Set'/>
            </View>}
        </View>

    </View>
}