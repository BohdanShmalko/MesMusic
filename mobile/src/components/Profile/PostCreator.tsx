import React, {FC} from "react";
import {KeyboardAvoidingView, Platform, Text, TouchableOpacity, View} from "react-native";
import {Icon, Textarea} from "native-base";

type PropType = {}

export const PostCreator: FC<PropType> = (props) => {
    return <View style={{margin : 10}}>
        <View style={{padding : 10}}>
            <Text style={{color : 'white', fontSize : 20, textAlign : "center"}}>Add post</Text>
        </View>
        <View style={{backgroundColor : 'white', borderRadius : 10}}>
            <Textarea rowSpan={3} placeholder="Description of your future post" />
        </View>
        <View style={{flexDirection : 'row', margin : 10}}>
            <View style={{flex : 1}}></View>
            <TouchableOpacity style={{backgroundColor : '#08003d', marginTop : 5, marginRight : 5, borderRadius : 10}}>
                <Icon style={{color : 'white', fontSize : 20, padding : 5}} name = 'md-attach'/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor : '#08003d', marginTop : 5, borderRadius : 10}}>
                <Text style={{color : 'white', fontSize : 17, padding : 5}}>Add</Text>
            </TouchableOpacity>
        </View>
    </View>
}