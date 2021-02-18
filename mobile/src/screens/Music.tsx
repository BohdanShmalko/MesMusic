import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {useSelector} from "react-redux";
import {getBackgroundObject, getTheme} from "../BLL/selectors/settingsSelector";

const MusicScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Music'> }> = ({navigation}) => {
    const background = useSelector(getBackgroundObject('musicPicture'))
    const {firstMainColor, secondMainColor} = useSelector(getTheme)
    return (
        <Container>
            <MainContainer {...background}>
                <MMHader title='Music' useLeftBack leftPress={() => navigation.navigate('News')} useRightMessage
                         rightPress={() => navigation.navigate('Dialogs')} color={firstMainColor}/>

            </MainContainer>
            <FooterBadge navigation={navigation} active={'music'} color={firstMainColor} activeColor={secondMainColor}/>
        </Container>
    )
}

export default MusicScreen