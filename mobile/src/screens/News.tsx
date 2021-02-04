import React, {FC} from 'react'
import {Container} from "native-base";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/types";
import {MMHader} from "../components/Common/MMHader";
import {MainContainer} from "../components/Common/MainContainer";
import {FooterBadge} from "../components/Common/FooterBadge";
import {Post} from "../components/Common/Post";
import {FlatList} from "react-native";

//TODO add variant music player
const NewsScreen : FC<{navigation : StackNavigationProp<RootStackParamList, 'News'>}> = ({navigation}) => {
    return (
        <Container>
            <MMHader useBodyLogo useRightMessage rightPress={() => navigation.navigate('Dialogs')}/>
            <MainContainer minus={80}>
                <FlatList
                    data={[{id : '1', uris : ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg', 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'],
                        name : 'Lincoln', likeCount : 10, description : 'some description ddj dlkfdkl sdds sdsd kj sdjs dkjsdjs bsd bsd sjdsd skdjskd  jskdjsk jskdjk jskjdksdjskdjsk jskdjkd ksjdks kjskdjskd jdkjsdj jskdjskdj kj dksj dsk j',
                        publicationTime : '22:00',
                        isLike : true, userUri : 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', isAdded : true},
                        {id : '2', uris : ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'],
                            name : 'Lincoln', likeCount : 10, description : 'some description ddj dlkfdkl sdds sdsd kj sdjs dkjsdjs bsd bsd sjdsd skdjskd  jskdjsk jskdjk jskjdksdjskdjsk jskdjkd ksjdks kjskdjskd jdkjsdj jskdjskdj kj dksj dsk j',
                            publicationTime : '22:00',
                            isLike : false, userUri : 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', isAdded : false}
                    ]}
                    renderItem={({item}) => <Post {...item}/>}
                    keyExtractor={item => item.id}
                />
            </MainContainer>
            <FooterBadge navigation={navigation}/>
        </Container>
    )
}

export default NewsScreen