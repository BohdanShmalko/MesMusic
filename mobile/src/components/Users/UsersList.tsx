import React, {FC} from "react";
import {Dimensions, FlatList} from "react-native";
import {List} from "native-base";
import {User} from "./User";
import {navigationType} from "../../types/types";

type PropType = {
    navigation: navigationType
}

export const UsersList: FC<PropType> = ({navigation}) => {
    const screenWidth = Dimensions.get('window').width
    return <List style={{
        flex: 1,
        marginTop: 10,
        marginBottom: 90,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: screenWidth
    }}>
        <FlatList
            data={[
                {
                    id: '1',
                    name: 'Vaselina',
                    photoUri: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
                    about: 'some firm from the internet that photo was first',
                    isFriend: false
                },
                {
                    id: '2',
                    name: 'Vaselina',
                    photoUri: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
                    about: 'some firm from the internet that photo was first',
                    isFriend: true
                },
                {
                    id: '3',
                    name: '?¿infinity. .sadness ¿?',
                    photoUri: 'https://tutby.gcdn.co/n/lady.tut.by/01/3/ubit_zhaby_02.jpg',
                    about: 'one of my friends',
                    isFriend: true
                },
                {
                    id: '4',
                    name: 'Vaselina',
                    photoUri: 'https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg',
                    about: 'some firm from the internet that photo was first',
                    isFriend: true
                },
                {
                    id: '5',
                    name: 'Vaselina',
                    photoUri: 'https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg',
                    about: 'some firm from the internet that photo was first',
                    isFriend: true
                },
                {
                    id: '6',
                    name: 'Vaselina',
                    photoUri: 'https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg',
                    about: 'some firm from the internet that photo was first',
                    isFriend: true
                },
                {
                    id: '7',
                    name: 'Vaselina',
                    photoUri: 'https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg',
                    about: 'some firm from the internet that photo was first',
                    isFriend: true
                },
                {
                    id: '8',
                    name: 'Vaselina',
                    photoUri: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
                    about: 'some firm from the internet that photo was first',
                    isFriend: true
                }]}
            renderItem={({item}) => <User {...item} navigation={navigation}/>}
            keyExtractor={item => item.id}
        />

    </List>
}