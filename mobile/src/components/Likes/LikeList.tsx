import React, {FC} from "react";
import {FlatList} from "react-native";
import {List} from "native-base";
import {Like} from "./Like";
import {navigationType} from "../../types/types";

type PropType = {
    navigation: navigationType
}

// type PropType = {
//     id: string
//     navigation: navigationType
//     isLike: boolean
//     whoLiked : string
//     whatLiked : any //!!!!
// }

export const LikeList: FC<PropType> = ({navigation}) => {
    return <List style={{flex: 1}}>
        <FlatList
            data={[{
                id: '1',
                isLike: true,
                whoLiked: {
                    name: 'Lex Luter',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ492AnNAAPJR3tuNh9iojWzyaVnyeQ3mApIw&usqp=CAU'
                },
                whatLiked: {
                    id: '1',
                    uris: [{id : '1', uri : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}, {id : '2', uri : 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'}],
                    name: 'Lincoln',
                    likeCount: 10,
                    description: 'some description ddj dlkfdkl sdds sdsd kj sdjs dkjsdjs bsd bsd sjdsd skdjskd  jskdjsk jskdjk jskjdksdjskdjsk jskdjkd ksjdks kjskdjskd jdkjsdj jskdjskdj kj dksj dsk j',
                    publicationTime: '22:00',
                    isLike: true,
                    userUri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                    isAdded: true
                },
                date: '21:01:2021 22:00'
            }, {
                id: '2',
                isLike: false,
                whoLiked: {
                    name: 'Lex Luter',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ492AnNAAPJR3tuNh9iojWzyaVnyeQ3mApIw&usqp=CAU'
                },
                whatLiked: {
                    id: '2',
                    uris: [{id : '1', uri : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}],
                    name: 'Lincoln',
                    likeCount: 10,
                    description: 'some description ddj dlkfdkl sdds sdsd kj sdjs dkjsdjs bsd bsd sjdsd skdjskd  jskdjsk jskdjk jskjdksdjskdjsk jskdjkd ksjdks kjskdjskd jdkjsdj jskdjskdj kj dksj dsk j',
                    publicationTime: '22:00',
                    isLike: false,
                    userUri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                    isAdded: false
                },
                date: '21:01:2021 24:00'
            }]}
            renderItem={({item}) => <Like {...item} navigation={navigation}/>}
            keyExtractor={item => item.id}
        />
    </List>
}