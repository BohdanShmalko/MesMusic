import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {LikeList} from "../components/Likes/LikeList";

const LikesScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'Likes'>}> = ({navigation}) => {
    return (
        <Container>
            <MMHader title='Likes' useLeftBack leftPress={() => navigation.navigate('News')} useRightMessage rightPress={() => navigation.navigate('Dialogs')}/>
            <MainContainer minus={90} style={{flex: 1}}>
                <LikeList navigation={navigation}/>
            </MainContainer>
            <FooterBadge navigation={navigation} active={'likes'}/>
        </Container>
    )
}

export default LikesScreen