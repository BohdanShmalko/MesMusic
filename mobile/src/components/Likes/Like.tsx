import React, {FC} from "react";
import {TouchableOpacity, View} from "react-native";
import {navigationType} from "../../types/types";
import {Body, Text, Button, Left, ListItem, Right, Thumbnail} from "native-base";

type PropType = {
    id : string
    navigation : navigationType
}

export const Like : FC<PropType> = ({id, navigation}) => {
    return <View style={{flex : 1, flexDirection : 'row', padding : 15, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius : 10, margin : 5}}>
        <View style={{flex : 1}}>
            <TouchableOpacity>
                <Thumbnail source={{uri : 'https://www.westernunion.com/content/dam/wu/jm/responsive/send-money-in-person-from-jamaica-resp.png'}}/>
            </TouchableOpacity>
        </View>
        <View style={{flex : 3}}>
            <TouchableOpacity>
            <Text><Text style={{fontWeight : 'bold'}}>name of this person </Text>liked your post</Text>
            </TouchableOpacity>
            </View>
        <View style={{paddingLeft : 5, alignItems : 'center', flex : 1}}>
            <TouchableOpacity style={{alignItems : 'center'}}>
                <Thumbnail square source={{uri : 'https://www.westernunion.com/content/dam/wu/jm/responsive/send-money-in-person-from-jamaica-resp.png'}}/>
                <Text style={{fontSize : 10, textAlign : 'center'}}>21:01:2001 22:00</Text>
            </TouchableOpacity>
        </View>
    </View>
}