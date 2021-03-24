import React, {FC} from "react";
import {Form, Icon, Input, Item, Picker, Text} from 'native-base';
import {TextStyle, TouchableOpacity, View, ViewStyle, StyleSheet} from "react-native";
import {TitleCallbackType} from "../../types/types";
import {useSelector} from "react-redux";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = {
    useChoice?: Array<TitleCallbackType>
}

interface Styles {
    mainContainer : ViewStyle
    item : ViewStyle
    icon : TextStyle
    input : ViewStyle
    button : ViewStyle
    text : TextStyle
    form : ViewStyle
    picker : ViewStyle
}

export const SearchBar: FC<PropType> = ({useChoice}) => {
    const language = useSelector(getLanguage)
    const {firstPrimaryFont, secondPrimaryFont} = useSelector(getTheme)

    const stl = StyleSheet.create<Styles>({
        mainContainer : {flexDirection: 'row', marginBottom: 5},
        item : {flex: 4, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 20},
        icon : {color : secondPrimaryFont},
        input : {color : secondPrimaryFont},
        button : {flex: 1, padding: 5, justifyContent: 'center'},
        text : {color: firstPrimaryFont, textTransform: 'uppercase'},
        form : {flex: 1},
        picker : {width: 120}
    })

    return <View style={stl.mainContainer}>
        <Item style={stl.item}>
            <Icon name="ios-search" style={stl.icon}/>
            <Input placeholder={vocabulary['search'][language]} style={stl.input}/>
            <Icon name="ios-people" style={stl.icon}/>
        </Item>
        <TouchableOpacity style={stl.button}>
            <Text style={stl.text}>{vocabulary['search'][language]}</Text>
        </TouchableOpacity>
        {useChoice?.length &&
        <Form style={stl.form}>
            <Picker
                note
                mode="dropdown"
                style={stl.picker}
                selectedValue={true}
                onValueChange={(e) => {

                    console.log(e) //key1 key2 key3
                }}
            >
                {useChoice.map((choice, index) =>
                    <Picker.Item color={secondPrimaryFont} key={index} label={choice.title} value={choice.title}/>)}
            </Picker>
        </Form>
        }
    </View>
}