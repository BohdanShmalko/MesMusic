import React, {FC} from "react";
import {Text, TouchableOpacity, View} from "react-native";

type PropType = {}

export const UsersButtons: FC<PropType> = (props) => {
    return <View style={{flexDirection : 'row', padding : 10}}>
        <TouchableOpacity style={{flex : 1, padding : 10, alignItems : 'center', backgroundColor : '#08003d', borderRadius : 10}}>
            <Text style={{color : 'white'}}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex : 1, padding : 10, alignItems : 'center', backgroundColor : '#f55656', borderRadius : 10}}>
            <Text style={{color : 'white'}}>Trainings</Text>
        </TouchableOpacity>
    </View>
}