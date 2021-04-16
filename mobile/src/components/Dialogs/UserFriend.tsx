import React, {FC, useState} from "react";
import {StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import vocabulary from "../../vocabulary/vocabulary";
import { useSelector } from "react-redux";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import {Icon, Thumbnail} from "native-base";
import {navigationType} from "../../types/types";
import {cutText} from "../../helpers/cutText";

type PropType = {
    onPress : () => void
    isChoose ?: boolean
    name : string
    photoUri : string
    about : string
};

interface Styles {
    mainContainer : ViewStyle
    mainButton : ViewStyle
    imageContainer : ViewStyle
    textContainer : ViewStyle
    text : TextStyle
    iconContainer : TextStyle
    positive : TextStyle
    negative : TextStyle
}

export const UserFriend: FC<PropType> = ({onPress, about, name, photoUri, isChoose = false}) => {
    const { secondPrimaryFont } = useSelector(getTheme);
    const cut20Symbols = cutText(20);

    const stl = StyleSheet.create<Styles>({
        mainContainer : {
            flex : 1,
            marginTop : 10
        },
        mainButton : {
            flexDirection : "row"
        },
        imageContainer : {
            paddingHorizontal : 10,
        },
        textContainer : {
            flex : 1,
            justifyContent : "center"
        },
        text : {
            color : secondPrimaryFont
        },
        iconContainer : {
            paddingHorizontal : 10,
            justifyContent : "center"
        },
        negative : {
            color : 'red'
        },
        positive : {
            color : 'green'
        }
    });

    return <View style={stl.mainContainer}>
        <TouchableOpacity style={stl.mainButton} onPress={onPress}>
            <View style={stl.imageContainer}>
                <Thumbnail source={{uri : photoUri}} />
            </View>
            <View style={stl.textContainer}>
                <Text style={stl.text}>{name}</Text>
                <Text style={stl.text}>{cut20Symbols(about)}</Text>
            </View>
            <View style={stl.iconContainer}>
                {isChoose ? <Icon style={stl.positive} name={'md-checkmark-circle'}/> : <Icon style={stl.negative} name={'md-close-circle'}/>}
            </View>
        </TouchableOpacity>
    </View>;
};
