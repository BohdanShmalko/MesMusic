import React, {FC} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import {getIsShowMusic, getIsShowTrainings} from "../../BLL/selectors/profileSelector";
import {navigationType} from "../../types/types";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = { navigation: navigationType }

export const UsersButtons: FC<PropType> = ({navigation}) => {
    const isShowMusic = useSelector(getIsShowMusic)
    const isShowTrainings = useSelector(getIsShowTrainings)
    const language = useSelector(getLanguage)

    const {firstMainColor, secondMainColor, firstPrimaryFont} = useSelector(getTheme)
    return <View style={{flexDirection: 'row', padding: 10}}>
        {isShowMusic && <TouchableOpacity onPress={() => navigation.navigate('Music')} style={{
            flex: 1,
            padding: 10,
            alignItems: 'center',
            backgroundColor: firstMainColor,
            borderRadius: 10
        }}>
            <Text style={{color: firstPrimaryFont}}>{vocabulary['music'][language]}</Text>
        </TouchableOpacity>}
        {isShowTrainings && <TouchableOpacity onPress={() => navigation.navigate('Training')} style={{
            flex: 1,
            padding: 10,
            alignItems: 'center',
            backgroundColor: secondMainColor,
            borderRadius: 10
        }}>
            <Text style={{color: firstPrimaryFont}}>{vocabulary['trainings'][language]}</Text>
        </TouchableOpacity>}
    </View>
}