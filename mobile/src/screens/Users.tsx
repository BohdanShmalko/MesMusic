import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {ChoiceType, RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {SearchBar} from "../components/Common/SearchBar";
import {UsersList} from "../components/Users/UsersList";

const UsersScreen: FC<{ navigation: StackNavigationProp<RootStackParamList, 'Users'> }> = ({navigation}) => {
    const testChoices: Array<ChoiceType> = [{
        title: 'All',
        selector: 'key1'
    }, {
        title: 'Subscribers',
        selector: 'key2'
    }, {
        title: 'Signed',
        selector: 'key3'
    }, {
        title: 'Recommendations',
        selector: 'key4'
    }]
    const chouser = (key: string) => {
        switch (key) {
            case 'key1' : {
                break
            }
            case 'key2' : {
                break
            }
            case 'key3' : {
                break
            }
        }
    }
    return (
        <Container>
            <MMHader title='Users' useLeftBack leftPress={() => navigation.navigate('News')} useRightMessage
                     rightPress={() => navigation.navigate('Dialogs')}/>
            <MainContainer style={{flex: 1}}>
                <SearchBar chouser={chouser} useChoice={testChoices}/>
                <UsersList navigation={navigation}/>
            </MainContainer>
            <FooterBadge navigation={navigation} active={'friends'}/>
        </Container>
    )
}

export default UsersScreen