import React, {FC, useState} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {SearchBar} from "../components/Common/SearchBar";
import {AllMessages} from "../components/Dialogs/AllMessages";
import {Text, View} from "react-native";
import {Overlay} from "../components/Common/Overlay";
import {RightDownButton} from "../components/Common/RightDownButton";

const DialogsScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Dialogs'> }> = ({navigation}) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay: () => void = () => {
        setVisible(!visible);
    };
    return (
        <Container>
            <MMHader title='Dialogs' useLeftBack leftPress={() => navigation.navigate('News')}/>
            <MainContainer minus={90} style={{flex: 1}}
                           image={{uri: 'https://i.pinimg.com/originals/ee/93/2c/ee932c96b927bbcedb7accb2ec617472.jpg'}}>
                <SearchBar/>
                <AllMessages navigation={navigation}/>
            </MainContainer>
            <RightDownButton iconName='add' onPress={toggleOverlay}/>
            <FooterBadge navigation={navigation}/>

            <Overlay isDown visible={visible} setVisible={toggleOverlay} transparent>
                <View style={{alignItems: 'center'}}>
                    <Text>In future</Text>
                </View>
            </Overlay>
        </Container>
    )
}

export default DialogsScreen