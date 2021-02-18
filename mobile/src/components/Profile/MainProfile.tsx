import React, {FC} from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {UserInf} from "./UserInf";
import {UserPhotos} from "./UserPhotos";
import {PostCreator} from "./PostCreator";
import {UsersButtons} from "./UsersButtons";
import {PostList} from "../Common/PostList";
import {navigationType} from "../../types/types";
import {useSelector} from "react-redux";
import {getProfilePosts} from "../../BLL/selectors/profileSelector";

type PropType = { navigation: navigationType }

const ProfileHead: FC<PropType> = ({navigation}) => {
    return <View>
        <UserInf/>
        <UserPhotos/>
        <UsersButtons navigation={navigation}/>
        <PostCreator/>
        <View><Text style={{color: 'white', fontSize: 20, textAlign: "center"}}>Posts :</Text></View>
    </View>
}

export const MainProfile: FC<PropType> = ({navigation}) => {
    const profilePosts = useSelector(getProfilePosts)
    return <View style={{marginBottom: 50}}>
        {profilePosts.length ?
            <SafeAreaView>
                <PostList navigation={navigation} headerComponent={() => <ProfileHead navigation={navigation}/>}
                          data={profilePosts}/>
            </SafeAreaView> :
            <ScrollView>
                <ProfileHead navigation={navigation}/>
                {/*<View><Text style={{color: 'white', textAlign: "center"}}>At the moment there are no posts</Text></View>*/}
            </ScrollView>
        }
    </View>
}