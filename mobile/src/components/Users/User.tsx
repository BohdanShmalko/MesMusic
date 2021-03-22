import React, {FC, useState} from "react";
import {Body, Icon, Left, ListItem, Right, Text, Thumbnail} from 'native-base';
import {cutText} from "../../helpers/cutText";
import {TouchableOpacity, View} from "react-native";
import {Overlay} from "../Common/Overlay";
import {ButtonInOverlay} from "../Common/ButtonInOverlay";
import {navigationType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import {actionCreator} from "../../BLL/storeRedux";
import vocabulary from "../../vocabulary/vocabulary";

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
    const language = useSelector(getLanguage)

    const toggleOverlay = () => setVisible(!visible)
    const dispatch = useDispatch()

    const {firstPrimaryFont, secondPrimaryFont} = useSelector(getTheme)

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
                <Text style={{color: firstPrimaryFont}}>{name}</Text>
                <Text note numberOfLines={1}>{cut20Symbols(about)}</Text>
            </TouchableOpacity>
        </Body>
        <Right>
            <TouchableOpacity onPress={toggleOverlay}>
                <Icon name="md-menu" style={{fontSize: 25, color: firstPrimaryFont}}/>
            </TouchableOpacity>
        </Right>
        <Overlay visible={visible} setVisible={toggleOverlay} transparent>
            <View style={{alignItems: 'center'}}>
                <Text>{name}</Text>
                <ButtonInOverlay textStyle={{color: secondPrimaryFont}} title={vocabulary["go to profile"][language]} onPress={() => {
                    toggleOverlay()
                    navigation.navigate('Profile')
                }}/>
                {isFriend ?
                    <ButtonInOverlay textStyle={{color: secondPrimaryFont}} title={vocabulary["unsubscribe"][language]} onPress={() => {
                        dispatch(actionCreator.usersScreen.unsubscribeUser(id))
                    }}/> :
                    <ButtonInOverlay textStyle={{color: secondPrimaryFont}} title={vocabulary["subscribe"][language]} onPress={() => {
                    }}/>}
                <ButtonInOverlay textStyle={{color: secondPrimaryFont}} title={vocabulary["write message"][language]} onPress={() => {
                    toggleOverlay()
                    navigation.navigate('Message')
                }}/>
                <ButtonInOverlay textStyle={{color: secondPrimaryFont}} title={vocabulary["block this"][language]} onPress={() => {
                }}/>
            </View>
        </Overlay>
    </ListItem>
}