import React, {FC, useState} from "react";
import {Text, View} from "react-native";
import {Icon} from "native-base";
import {SettingsItem} from "./SettingsItem";

type PropType = {}

export const Theme: FC<PropType> = (props) => {
    const [switchTheme, setSwitchTheme] = useState(false)
    const changeSwitchTheme = () => setSwitchTheme(!switchTheme)

    const [switchOnlyImage, setSwitchOnlyImage] = useState(false)
    const changeSwitchOnlyImage = () => setSwitchOnlyImage(!switchOnlyImage)
    return <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name='md-color-palette' style={{color: 'white'}}/>
            <Text style={{color: 'white', textTransform: 'uppercase', fontSize: 20}}>Theme</Text>
        </View>
        <View style={{backgroundColor : 'rgba(255,255,255,0.2)'}}>
            <SettingsItem icon='md-color-fill' title='Change the first main color' colorWord={'white'}
                          colorButton={'#08003d'} useButton/>
            <SettingsItem icon='md-color-fill' title='Change the second main color' colorWord={'white'}
                          colorButton={'#f55656'} useButton/>
            <SettingsItem icon='md-create' title='Change the first primary font color' colorWord={'white'}
                          colorButton={'rgba(0,0,0,0)'} useButton/>
            <SettingsItem icon='md-create' title='Change the second primary font color' colorWord={'black'}
                          colorButton={'rgba(0,0,0,0)'} useButton/>
            <SettingsItem icon='md-images' title='Picture on the background' colorWord={'white'}
                          colorButton={'#f55656'} useSwitch switchValue={switchTheme} onPress={changeSwitchTheme}/>
            {switchTheme && <View style={{paddingHorizontal : 20}}>
                {/*TODO to for*/}
                <SettingsItem icon='md-images' title='Picture on the background' colorWord={'white'}
                              colorButton={'#f55656'} useSwitch switchValue={switchOnlyImage} onPress={() => {changeSwitchOnlyImage()}}/>
                <SettingsItem icon='md-image' title='Set comments screen' colorWord={'white'}
                              colorButton={'#08003d'} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set dialogs screen' colorWord={'white'}
                              colorButton={'#08003d'} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set like screen' colorWord={'white'}
                              colorButton={'#08003d'} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set message screen' colorWord={'white'}
                              colorButton={'#08003d'} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set music screen' colorWord={'white'}
                              colorButton={'#08003d'} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set news screen' colorWord={'white'}
                              colorButton={'#08003d'} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set profile screen' colorWord={'white'}
                              colorButton={'#08003d'} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set settings screen' colorWord={'white'}
                              colorButton={'#08003d'} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set training screen' colorWord={'white'}
                              colorButton={'#08003d'} useButton buttonTitle='Set'/>
                <SettingsItem icon='md-image' title='Set user screen' colorWord={'white'}
                              colorButton={'#08003d'} useButton buttonTitle='Set'/>
            </View>}
        </View>

    </View>
}