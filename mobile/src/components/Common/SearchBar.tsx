import React, {FC} from "react";
import {Form, Icon, Input, Item, Picker, Text} from 'native-base';
import {TouchableOpacity, View} from "react-native";
import {ChoiceType} from "../../types/types";
import {useSelector} from "react-redux";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = {
    useChoice?: Array<ChoiceType>
}

export const SearchBar: FC<PropType> = ({useChoice}) => {
    const language = useSelector(getLanguage)
    const {firstPrimaryFont, secondPrimaryFont} = useSelector(getTheme)
    return <View style={{flexDirection: 'row', marginBottom: 5}}>
        <Item style={{flex: 4, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 20}}>
            <Icon name="ios-search" style={{color : secondPrimaryFont}}/>
            <Input placeholder={vocabulary['search'][language]} style={{color : secondPrimaryFont}}/>
            <Icon name="ios-people" style={{color : secondPrimaryFont}}/>
        </Item>
        <TouchableOpacity style={{flex: 1, padding: 5, justifyContent: 'center'}}>
            <Text style={{color: firstPrimaryFont, textTransform: 'uppercase'}}>{vocabulary['search'][language]}</Text>
        </TouchableOpacity>
        {useChoice?.length &&
        <Form style={{flex: 1}}>
            <Picker
                note
                mode="dropdown"
                style={{width: 120}}
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