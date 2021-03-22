import React, {FC, useState} from "react";
import {Dimensions, TouchableOpacity, View} from "react-native";
import {LikeType, navigationType} from "../../types/types";
import {Text, Thumbnail} from "native-base";
import {Overlay} from "../Common/Overlay";
import {Post} from "../Common/Post";
import {useSelector} from "react-redux";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = {
    navigation: navigationType
    data: LikeType
}
const screenHeight = Dimensions.get('window').height

export const Like: FC<PropType> = ({data, navigation}) => {
    const {date, id, whatLiked, whoLiked, type} = data
    const {id: whoLikeId, name: whoLikeName, photo: whoLikePhoto} = whoLiked
    const language = useSelector(getLanguage)

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => setVisible(!visible)

    const {secondPrimaryFont, secondMainColor} = useSelector(getTheme)

    return <View style={{
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        margin: 5
    }}>
        <TouchableOpacity style={{flex : 1, flexDirection: 'row'}} onLongPress={() => {
            console.log('delete like')
        }}>
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Thumbnail
                    source={{uri: whoLikePhoto}}/>
            </TouchableOpacity>
        </View>
        <View style={{flex: 3}}>
            {type === 'like' &&
            <TouchableOpacity onPress={toggleOverlay}>
                <Text style={{color: secondPrimaryFont}}><Text
                    style={{fontWeight: 'bold', color: secondPrimaryFont}}>{whoLikeName} </Text>{vocabulary['like post'][language]}</Text>
            </TouchableOpacity>}
            {type === 'comment' &&
            <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
                <Text style={{color: secondPrimaryFont}}><Text
                    style={{fontWeight: 'bold', color: secondPrimaryFont}}>{whoLikeName} </Text>{vocabulary['commented post'][language]}</Text>
            </TouchableOpacity>}
            {type === 'complain' &&
            <TouchableOpacity onPress={() => navigation.navigate('Comments')}
                              style={{backgroundColor: secondMainColor, padding: 5, borderRadius: 5}}>
                <Text style={{color: secondPrimaryFont}}><Text
                    style={{fontWeight: 'bold', color: secondPrimaryFont}}>{whoLikeName} </Text>{vocabulary['Complained comments'][language]}</Text>
            </TouchableOpacity>}
        </View>
        <View style={{paddingLeft: 5, alignItems: 'center', flex: 1}}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={toggleOverlay}>
                <Thumbnail square
                           source={{uri: whatLiked.uris[0].uri}}/>
                <Text style={{fontSize: 10, textAlign: 'center', color: secondPrimaryFont}}>{date}</Text>
            </TouchableOpacity>
        </View>
        </TouchableOpacity>
        <Overlay visible={visible} setVisible={toggleOverlay} transparent backStyle={{}}
                 style={{backgroundColor: 'rgba(0,0,0,0)', maxHeight: screenHeight / 1.3}}>
            <View style={{alignItems: 'center'}}>
                <Post navigation={navigation} {...whatLiked}/>
            </View>
        </Overlay>

    </View>
}