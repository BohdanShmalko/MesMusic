import React, {FC, useState} from "react";
import {Body, Icon, Left, ListItem, Right, Text, Thumbnail} from 'native-base';
import {cutText} from "../../helpers/cutText";
import {TouchableOpacity, View} from "react-native";
import {Overlay} from "../Common/Overlay";
import {ButtonInOverlay} from "../Common/ButtonInOverlay";
import {navigationType} from "../../types/types";

type PropType = {
    id: string
    photoUri: string
    name: string
    about: string
    isFriend: boolean
    navigation: navigationType
}

export const User: FC<PropType> = ({navigation, about, id, isFriend, name, photoUri}) => {
    const cut20Symbols = cutText(20)
    const [visible, setVisible] = useState(false);

    const toggleOverlay: () => void = () => {
        setVisible(!visible);
    };

    return <ListItem thumbnail>
        <Left>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Profile')
            }}>
                <Thumbnail square source={{uri: photoUri}}/>
            </TouchableOpacity>
        </Left>
        <Body>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Profile')
            }}>
                <Text style={{color: 'white'}}>{name}</Text>
                <Text note numberOfLines={1}>{cut20Symbols(about)}</Text>
            </TouchableOpacity>
        </Body>
        <Right>
            <TouchableOpacity onPress={toggleOverlay}>
                <Icon name="md-menu" style={{fontSize: 25, color: 'white'}}/>
            </TouchableOpacity>
        </Right>
        <Overlay visible={visible} setVisible={toggleOverlay} transparent>
            <View style={{alignItems: 'center'}}>
                <ButtonInOverlay title='Go to profile' onPress={() => {
                    toggleOverlay()
                    navigation.navigate('Profile')
                }}/>
                {isFriend ?
                    <ButtonInOverlay title='Unsubscribe' onPress={() => {
                    }}/> :
                    <ButtonInOverlay title='Subscribe' onPress={() => {
                    }}/>}
                <ButtonInOverlay title='Write a message' onPress={() => {
                    toggleOverlay()
                    navigation.navigate('Message')
                }}/>
                <ButtonInOverlay title='Block this user' onPress={() => {
                }}/>
            </View>
        </Overlay>
    </ListItem>
}