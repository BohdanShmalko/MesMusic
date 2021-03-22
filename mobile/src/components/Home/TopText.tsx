import React, {FC} from "react";
import {Text} from "react-native";
import vocabulary from "../../vocabulary/vocabulary";
import {useSelector} from "react-redux";
import {getLanguage} from "../../BLL/selectors/settingsSelector";

type PropType = {}

export const TopText: FC<PropType> = (props) => {
    const language = useSelector(getLanguage)
    return <Text style={{
        textAlign: 'center',
        fontStyle: 'italic',
        textTransform: 'uppercase',
        color: 'white',
        marginTop: '-30%'
    }}>
        {vocabulary['home top text'][language]}
    </Text>
}