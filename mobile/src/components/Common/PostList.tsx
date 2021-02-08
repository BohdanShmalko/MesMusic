import React, {FC} from "react";
import {FlatList, Text} from "react-native";
import {Post} from "./Post";
import {navigationType} from "../../types/types";

export const PostList: FC<{headerComponent ?: FC, navigation : navigationType}> = ({headerComponent, navigation}) => {
    return <FlatList
        ListHeaderComponent={headerComponent}
        data={[{
            id: '1',
            uris: [{id : '1', uri : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}, {id : '2', uri : 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'}],
            name: 'Lincoln',
            likeCount: 10,
            description: 'some description ddj dlkfdkl sdds sdsd kj sdjs dkjsdjs bsd bsd sjdsd skdjskd  jskdjsk jskdjk jskjdksdjskdjsk jskdjkd ksjdks kjskdjskd jdkjsdj jskdjskdj kj dksj dsk j',
            publicationTime: '22:00',
            isLike: true,
            userUri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
            isAdded: true,
            useMenu: true,
            navigation
        },
            {
                id: '2',
                uris: [{id : '1', uri : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}],
                name: 'Lincoln',
                likeCount: 10,
                description: 'some description ddj dlkfdkl sdds sdsd kj sdjs dkjsdjs bsd bsd sjdsd skdjskd  jskdjsk jskdjk jskjdksdjskdjsk jskdjkd ksjdks kjskdjskd jdkjsdj jskdjskdj kj dksj dsk j',
                publicationTime: '22:00',
                isLike: false,
                userUri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                isAdded: false,
                useMenu: true,
                navigation
            }
        ]}
        renderItem={({item}) => <Post {...item}/>}
        keyExtractor={item => item.id}
    />
}