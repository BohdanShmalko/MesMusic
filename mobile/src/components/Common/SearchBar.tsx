import React, {FC} from "react";
import {Form, Icon, Input, Item, Picker, Text} from 'native-base';
import {TouchableOpacity, View} from "react-native";
import {ChoiceType} from "../../types/types";

type PropType = {
    useChoice?: Array<ChoiceType>
    chouser?: (key: string) => void
}

export const SearchBar: FC<PropType> = ({useChoice}) => {
    return <View style={{flexDirection: 'row', marginBottom: 5}}>
        <Item style={{flex: 4, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 20}}>
            <Icon name="ios-search"/>
            <Input placeholder="Search"/>
            <Icon name="ios-people"/>
        </Item>
        <TouchableOpacity style={{flex: 1, padding: 5, justifyContent: 'center'}}>
            <Text style={{color: 'white', textTransform: 'uppercase'}}>Search</Text>
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
                    <Picker.Item key={index} label={choice.title} value={choice.selector}/>)}
            </Picker>
        </Form>
        }
    </View>
}