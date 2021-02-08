import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";

const TrainingScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Training'> }> = ({navigation}) => {
    return (
        <Container>
            <MMHader title='Trainings' useLeftBack leftPress={() => navigation.navigate('News')} useRightMessage
                     rightPress={() => navigation.navigate('Dialogs')}/>
            <MainContainer>

            </MainContainer>
            <FooterBadge navigation={navigation} active={'study'}/>
        </Container>
    )
}

export default TrainingScreen