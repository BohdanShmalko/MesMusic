import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {LikeList} from "../components/Likes/LikeList";
import {useSelector} from "react-redux";
import {getLikes} from "../BLL/selectors/likeSelector";
import {getBackgroundObject, getTheme} from "../BLL/selectors/settingsSelector";

const LikesScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Likes'> }> = ({navigation}) => {
    const data = useSelector(getLikes)
    const background = useSelector(getBackgroundObject('likePicture'))
    const {firstMainColor, secondMainColor} = useSelector(getTheme)
    return (
        <Container>
            <MainContainer {...background} useFooter>
                <MMHader title='Likes' useLeftBack leftPress={() => navigation.navigate('News')} useRightMessage
                         rightPress={() => navigation.navigate('Dialogs')} color={firstMainColor}/>
                <LikeList data={data} navigation={navigation}/>
            </MainContainer>
            <FooterBadge navigation={navigation} active={'likes'} color={firstMainColor} activeColor={secondMainColor}/>
        </Container>
    )
}

export default LikesScreen