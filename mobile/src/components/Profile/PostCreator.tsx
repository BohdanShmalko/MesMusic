import React, {FC} from "react";
import {KeyboardAvoidingView, Platform, Text, TouchableOpacity, View} from "react-native";
import {Icon, Textarea} from "native-base";
import {useSelector} from "react-redux";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = {}

export const PostCreator: FC<PropType> = (props) => {
    const language = useSelector(getLanguage)
    const {firstPrimaryFont, secondPrimaryFont, firstMainColor} = useSelector(getTheme)
    return <View style={{margin : 10}}>
        <View style={{padding : 10}}>
            <Text style={{color : firstPrimaryFont, fontSize : 20, textAlign : "center"}}>{vocabulary['add post'][language]}</Text>
        </View>
        <View style={{backgroundColor : firstPrimaryFont, borderRadius : 10}}>
            <Textarea rowSpan={3} placeholder={vocabulary['post description'][language]} style={{color : secondPrimaryFont}}/>
        </View>
        <View style={{flexDirection : 'row', margin : 10}}>
            <View style={{flex : 1}}></View>
            <TouchableOpacity style={{backgroundColor : firstMainColor, marginTop : 5, marginRight : 5, borderRadius : 10}}>
                <Icon style={{color : firstPrimaryFont, fontSize : 20, padding : 5}} name = 'md-attach'/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor : firstMainColor, marginTop : 5, borderRadius : 10}}>
                <Text style={{color : firstPrimaryFont, fontSize : 17, padding : 5}}>{vocabulary['add'][language]}</Text>
            </TouchableOpacity>
        </View>
    </View>
}