import React, {FC} from "react";
import {Text, View} from "react-native";
import {Icon} from "native-base";
import {SettingsItem} from "./SettingsItem";
import {useSelector} from "react-redux";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = {
    signOut: () => Promise<void>
}

export const LogOut: FC<PropType> = ({signOut}) => {
    const {firstPrimaryFont} = useSelector(getTheme)
    const language = useSelector(getLanguage)
    return <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name='md-log-out' style={{color: firstPrimaryFont}}/>
            <Text style={{
                color: firstPrimaryFont,
                textTransform: 'uppercase',
                fontSize: 20
            }}>{vocabulary['logout'][language]}</Text>
        </View>
        <View style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
            <SettingsItem icon='md-log-out' title={vocabulary['exit'][language]} colorWord={firstPrimaryFont}
                          colorButton={'rgba(0,0,0,0)'}
                          useButton buttonTitle={vocabulary['logout'][language]} onPress={signOut}/>
        </View>
    </View>
}