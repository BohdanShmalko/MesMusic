import React, {FC} from "react";
import {TouchableOpacity, View} from "react-native";
import {Icon, Textarea} from "native-base"
import {useSelector} from "react-redux";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = {}

export const MessageTextArea: FC<PropType> = (props) => {
    const language = useSelector(getLanguage)
    const {firstPrimaryFont, secondPrimaryFont, secondMainColor} = useSelector(getTheme)
    return <View style={{
        flexDirection: 'row',
        backgroundColor: firstPrimaryFont,
        margin: 5,
        borderRadius: 10,
        borderWidth : 1,
        borderColor : secondMainColor,
        maxHeight: 120
    }}>
        <View style={{flex: 7, padding: 5}}>
            <Textarea keyboardType={'decimal-pad'} rowSpan={3} placeholder={vocabulary["enter something"][language]} style={{color : secondPrimaryFont}}/>
        </View>
        <View style={{flex: 1}}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="md-send" style={{fontSize: 25, color: secondMainColor}}/>
            </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1}}>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="md-attach" style={{fontSize: 25, color: secondPrimaryFont}}/>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="md-happy" style={{fontSize: 25, color: secondPrimaryFont}}/>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="md-mic" style={{fontSize: 25, color: secondPrimaryFont}}/>
                    {/*<Icon name="md-camera" style = {{fontSize : 25, color : 'black'}}/>*/}
                </TouchableOpacity>
            </View>
        </View>
    </View>
}