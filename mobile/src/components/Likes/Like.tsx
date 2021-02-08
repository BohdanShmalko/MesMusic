import React, {FC, useState} from "react";
import {Dimensions, TouchableOpacity, View} from "react-native";
import {navigationType, PostType} from "../../types/types";
import {Text, Thumbnail} from "native-base";
import {Overlay} from "../Common/Overlay";
import {Post} from "../Common/Post";

type PropType = {
    id: string
    navigation: navigationType
    isLike: boolean
    whoLiked: {
        name: string
        photo: string
    }
    whatLiked: PostType
    date: string
}
const screenHeight = Dimensions.get('window').height

export const Like: FC<PropType> = ({date, whatLiked, whoLiked, isLike, id, navigation}) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay: () => void = () => {
        setVisible(!visible);
    };

    return <View style={{
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        margin: 5
    }}>
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Thumbnail
                    source={{uri: whoLiked.photo}}/>
            </TouchableOpacity>
        </View>
        <View style={{flex: 3}}>
            {isLike ?
                //TODO navigation
                <TouchableOpacity onPress={toggleOverlay}>
                    <Text><Text style={{fontWeight: 'bold'}}>{whoLiked.name} </Text>liked your post</Text>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                    <Text><Text style={{fontWeight: 'bold'}}>{whoLiked.name} </Text>has commented on your
                        post</Text>
                </TouchableOpacity>
            }
        </View>
        <View style={{paddingLeft: 5, alignItems: 'center', flex: 1}}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={toggleOverlay}>
                <Thumbnail square
                           source={{uri: whatLiked.uris[0].uri}}/>
                <Text style={{fontSize: 10, textAlign: 'center'}}>{date}</Text>
            </TouchableOpacity>
        </View>
        <Overlay visible={visible} setVisible={toggleOverlay} transparent backStyle={{}}
                 style={{backgroundColor: 'rgba(0,0,0,0)', maxHeight: screenHeight / 1.3}}>
            <View style={{alignItems: 'center'}}>
                <Post {...whatLiked}/>
            </View>
        </Overlay>

    </View>
}