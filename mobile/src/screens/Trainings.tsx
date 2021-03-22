import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {useSelector} from "react-redux";
import {getBackgroundObject, getLanguage, getTheme} from "../BLL/selectors/settingsSelector";
import vocabulary from "../vocabulary/vocabulary";

const TrainingScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Training'> }> = ({navigation}) => {
    const background = useSelector(getBackgroundObject('trainingPicture'))
    const language = useSelector(getLanguage)
    const {firstMainColor, secondMainColor} = useSelector(getTheme)
    return (
        <Container>
            <MainContainer {...background} useFooter>
                <MMHader title={vocabulary['trainings'][language]} useLeftBack leftPress={() => navigation.navigate('News')} useRightMessage
                         rightPress={() => navigation.navigate('Dialogs')} color={firstMainColor}/>
            </MainContainer>
            <FooterBadge navigation={navigation} active={'study'} color={firstMainColor} activeColor={secondMainColor}/>
        </Container>
    )
}

export default TrainingScreen