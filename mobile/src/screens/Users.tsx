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
import {getBackgroundObject, getTheme} from "../BLL/selectors/settingsSelector";

const UsersScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Users'> }> = ({navigation}) => {
    const testChoices: Array<ChoiceType> = [{
        title : 'All',
        callback : () => {}
    },{
        title : 'Subscribes',
        callback : () => {}
    },{
        title : 'Signed',
        callback : () => {}
    },{
        title : 'Recommendations',
        callback : () => {}
    },]
    const users = useSelector(getUsers)
    const background = useSelector(getBackgroundObject('userPicture'))
    const {firstMainColor, secondMainColor} = useSelector(getTheme)
    return (
        <Container>
            <MainContainer {...background} useFooter>
                <MMHader title='Users' useLeftBack leftPress={() => navigation.navigate('News')} useRightMessage
                         rightPress={() => navigation.navigate('Dialogs')} color={firstMainColor}/>
                <SearchBar useChoice={testChoices}/>
                <UsersList navigation={navigation} data = {users}/>
            </MainContainer>
            <FooterBadge navigation={navigation} active={'friends'} color={firstMainColor} activeColor={secondMainColor}/>
        </Container>
    )
}

export default UsersScreen