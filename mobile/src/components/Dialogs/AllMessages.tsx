import React, {FC} from "react";
import {FlatList} from "react-native";
import {List} from "native-base";
import {ListAvatar} from "./ListAvatar";
import {navigationType} from "../../types/types";

type PropType = {
    navigation : navigationType
}

export const AllMessages : FC<PropType> = ({navigation}) => {
    return <List style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', flex : 1}}>
        <FlatList
            data={[
                {
                    id: '1',
                    uriAvatar: 'https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
                    name: 'Iakov',
                    lastMessage: 'kdkdk kdskdk dkdkkd dkdkkd kdkkdk kdkdkd dkkdkd dkdkkd kdkdkdk dkdkdk kdkdk',
                    lastMessageTime: 'mon 22:31',
                    howManyNotRead : 10
                },
                {
                    id: '2',
                    uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
                    name: 'Klava',
                    lastMessage: 'kdkdk kdskdk dkdkkd dkdkkd kdkkdk kdkdkd dkkdkd dkdkkd kdkdkdk dkdkdk kdkdk',
                    lastMessageTime: 'mon 23:00',
                    howManyNotRead : 5
                },
                {
                    id: '3', uriAvatar: 'https://upload.wikimedia.org/wikipedia/ru/a/a7/Head.cj.jpg',
                    name: 'Carl Johnson', lastMessage: 'Ah shit, here we go again.',
                    lastMessageTime: 'mon 1:31',
                    howManyNotRead : 0
                },
                {
                    id: '4',
                    uriAvatar: 'https://tutby.gcdn.co/n/lady.tut.by/01/3/ubit_zhaby_02.jpg',
                    name: '?¿infinity. .sadness ¿?',
                    lastMessage: 'one of my friends',
                    lastMessageTime: 'mon 23:00',
                    howManyNotRead : 5
                },
                {
                    id: '5',
                    uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
                    name: 'Klava',
                    lastMessage: 'kdkdk kdskdk dkdkkd dkdkkd kdkkdk kdkdkd dkkdkd dkdkkd kdkdkdk dkdkdk kdkdk',
                    lastMessageTime: 'mon 23:00',
                    howManyNotRead : 15
                },
                {
                    id: '6',
                    uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
                    name: 'Klava',
                    lastMessage: 'kdkdk kdskdk dkdkkd dkdkkd kdkkdk kdkdkd dkkdkd dkdkkd kdkdkdk dkdkdk kdkdk',
                    lastMessageTime: 'mon 23:00',
                    howManyNotRead : 20
                },
                {
                    id: '7',
                    uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
                    name: 'Klava',
                    lastMessage: 'kdkdk kdskdk dkdkkd dkdkkd kdkkdk kdkdkd dkkdkd dkdkkd kdkdkdk dkdkdk kdkdk',
                    lastMessageTime: 'mon 23:00',
                    howManyNotRead : 0
                },
                {
                    id: '8',
                    uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
                    name: 'Klava',
                    lastMessage: 'kdkdk kdskdk dkdkkd dkdkkd kdkkdk kdkdkd dkkdkd dkdkkd kdkdkdk dkdkdk kdkdk',
                    lastMessageTime: 'mon 23:00'
                },
                {
                    id: '9',
                    uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
                    name: 'Klava',
                    lastMessage: 'kdkdk kdskdk dkdkkd dkdkkd kdkkdk kdkdkd dkkdkd dkdkkd kdkdkdk dkdkdk kdkdk',
                    lastMessageTime: 'mon 23:00'
                },
                {
                    id: '10',
                    uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
                    name: 'Klava',
                    lastMessage: 'kdkdk kdskdk dkdkkd dkdkkd kdkkdk kdkdkd dkkdkd dkdkkd kdkdkdk dkdkdk kdkdk',
                    lastMessageTime: 'mon 23:00'
                }
            ]}
            renderItem={({item}) => <ListAvatar {...item} navigation = {navigation}/>}
            keyExtractor={item => item.id}
        />
    </List>
}