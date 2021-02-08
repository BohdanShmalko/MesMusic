import React, {FC, useState} from "react";
import {Icon, Text, Thumbnail} from 'native-base';
import {Dimensions, FlatList, Image, ScrollView, TouchableOpacity, View} from "react-native";
import {cutText} from "../../helpers/cutText";
import {ButtonInOverlay} from "./ButtonInOverlay";
import {Overlay} from "./Overlay";
import {navigationType, PostType} from "../../types/types";

type PropType = PostType & {navigation : navigationType}

export const Post: FC<PropType> = ({
                                       useMenu,
                                       isAdded,
                                       userUri,
                                       uris,
                                       name,
                                       likeCount,
                                       description,
                                       publicationTime,
                                       isLike,
                                       navigation
                                   }) => {
    let heartColor, addColor
    isLike ? heartColor = 'red' : heartColor = 'white'
    isAdded ? addColor = 'black' : addColor = 'white'
    const screenWidth = Dimensions.get('window').width
    const cut50Symbols = cutText(50)
    const [visible, setVisible] = useState(false);

    const toggleOverlay: () => void = () => {
        setVisible(!visible);
    };

    const [shareVisible, setShareVisible] = useState(false);

    const toggleOverlayShare: () => void = () => {
        setShareVisible(!shareVisible);
    };
    return <View style={{marginBottom: 20, flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
        <View>
            <View style={{flexDirection: 'row', padding: 10, justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <View style={{paddingRight: 10}}>
                        <TouchableOpacity onPress={() => {
                            console.log('to profile')
                        }}>
                            <Thumbnail style={{width: 32, height: 32}} source={{uri: userUri}}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>{name}</Text>
                        <Text style={{fontSize: 10}}>{publicationTime}</Text>
                    </View>
                </View>
                <View style={{}}>
                    {useMenu &&
                    <TouchableOpacity style={{padding: 5}} onPress={toggleOverlay}>
                        <Icon name="md-menu" style={{fontSize: 25, color: 'black'}}/>
                    </TouchableOpacity>
                    }
                </View>
            </View>
            <FlatList
                horizontal
                data={uris}
                renderItem={({item}) => <Image source={{uri: item.uri}} style={{
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'center',
                    flex: 1,
                    minHeight: 400,
                    width: screenWidth
                }}/>}
                keyExtractor={item => item.id}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <TouchableOpacity style={{padding: 10}} onPress={() => {
                        console.log('change heart color')
                    }}>
                        <Icon name="heart" style={{color: heartColor, fontSize: 25}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 10}} onPress={toggleOverlayShare}>
                        <Icon name="md-send" style={{color: 'white', fontSize: 25}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 10}} onPress={() => {
                        navigation.navigate('Comments')
                    }}>
                        <Icon name="chatbubbles" style={{color: 'white', fontSize: 25}}/>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <TouchableOpacity style={{padding: 10}} onPress={() => {
                        console.log('add this post to my profile')
                    }}>
                        <Icon name="md-bookmark" style={{color: addColor, fontSize: 25}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{paddingHorizontal: 10, paddingBottom: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', flex: 1}}>Like : {likeCount}</Text>
                    <Text style={{fontWeight: 'bold'}}>Publications : {uris.length}</Text>
                </View>
                <View>
                    <Text><Text style={{fontWeight: 'bold'}}>{name} : </Text>{cut50Symbols(description)}</Text>
                </View>
            </View>
        </View>

        <Overlay visible={visible} setVisible={toggleOverlay} transparent>
            <View style={{alignItems: 'center'}}>
                <ButtonInOverlay title='Complain' onPress={() => {
                }}/>
                <ButtonInOverlay title='Share' onPress={() => {
                }}/>
                <ButtonInOverlay title='Unsubscribe' onPress={() => {
                }}/>
                <ButtonInOverlay title='Hidden' onPress={() => {
                }}/>
                <ButtonInOverlay title='Add yourself' onPress={() => {
                }}/>
                <ButtonInOverlay title='Leave a comment' onPress={() => {
                }}/>
            </View>
        </Overlay>

        <Overlay isDown visible={shareVisible} setVisible={toggleOverlayShare} transparent>
            <View style={{alignItems: 'center'}}>
                <Text>In future</Text>
            </View>
        </Overlay>
    </View>
}