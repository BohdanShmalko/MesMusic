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
import {useSelector} from "react-redux";
import {getDialogs} from "../BLL/selectors/dialogsSelector";
import {getBackgroundObject, getTheme} from "../BLL/selectors/settingsSelector";

const DialogsScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Dialogs'> }> = ({navigation}) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay: () => void = () => {
        setVisible(!visible);
    };

    const dialogs = useSelector(getDialogs)
    const background = useSelector(getBackgroundObject('dialogsPicture'))
    const {firstMainColor, secondMainColor, secondPrimaryFont} = useSelector(getTheme)
    return (
        <Container>
            <MainContainer useFooter {...background}>
                <MMHader title='Dialogs' useLeftBack leftPress={() => navigation.navigate('News')}
                         color={firstMainColor}/>
                <SearchBar/>
                <AllMessages navigation={navigation} data={dialogs}/>
            </MainContainer>
            <RightDownButton iconName='add' onPress={toggleOverlay}/>
            <FooterBadge navigation={navigation} color={firstMainColor} activeColor={secondMainColor}/>
            <Overlay isDown visible={visible} setVisible={toggleOverlay} transparent>
                <View style={{alignItems: 'center'}}>
                    <Text style={{color: secondPrimaryFont}}>In future</Text>
                </View>
            </Overlay>
        </Container>
    )
}

export default DialogsScreen