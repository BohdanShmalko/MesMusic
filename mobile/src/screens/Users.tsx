import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {ChoiceType, RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {SearchBar} from "../components/Common/SearchBar";
import {UsersList} from "../components/Users/UsersList";
import {useSelector} from "react-redux";
import {getUsers} from "../BLL/selectors/usersSelector";
import {getBackgroundObject, getLanguage, getTheme} from "../BLL/selectors/settingsSelector";
import vocabulary from "../vocabulary/vocabulary";

const UsersScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Users'> }> = ({navigation}) => {
    const language = useSelector(getLanguage)
    const testChoices: Array<ChoiceType> = [{
        title : vocabulary['all'][language],
        callback : () => {}
    },{
        title : vocabulary['subscribers'][language],
        callback : () => {}
    },{
        title : vocabulary['signed'][language],
        callback : () => {}
    },{
        title : vocabulary['recommendation'][language],
        callback : () => {}
    },]
    const users = useSelector(getUsers)
    const background = useSelector(getBackgroundObject('userPicture'))
    const {firstMainColor, secondMainColor} = useSelector(getTheme)
    return (
        <Container>
            <MainContainer {...background} useFooter>
                <MMHader title={vocabulary['users'][language]} useLeftBack leftPress={() => navigation.navigate('News')} useRightMessage
                         rightPress={() => navigation.navigate('Dialogs')} color={firstMainColor}/>
                <SearchBar useChoice={testChoices}/>
                <UsersList navigation={navigation} data = {users}/>
            </MainContainer>
            <FooterBadge navigation={navigation} active={'friends'} color={firstMainColor} activeColor={secondMainColor}/>
        </Container>
    )
}

export default UsersScreen