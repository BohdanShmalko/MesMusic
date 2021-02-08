import React, {FC} from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {UserInf} from "./UserInf";
import {UserPhotos} from "./UserPhotos";
import {PostCreator} from "./PostCreator";
import {UsersButtons} from "./UsersButtons";
import {PostList} from "../Common/PostList";

type PropType = {}

const ProfileHead: FC<{}> = () => {
    return <View>
        <UserInf/>
        <UserPhotos/>
        <UsersButtons/>
        <PostCreator/>
        <View><Text style={{color: 'white', fontSize: 20, textAlign: "center"}}>Posts :</Text></View>
    </View>
}

export const MainProfile: FC<PropType> = (props) => {
    const testPosts = ['.. some post in future ...']
    return <View style={{marginBottom: 100}}>
        {testPosts.length ?
            <SafeAreaView>
                <PostList headerComponent={ProfileHead}/>
            </SafeAreaView> :
            <ScrollView>
                <ProfileHead/>
                <View><Text style={{color: 'white', textAlign: "center"}}>At the moment there are no posts</Text></View>
            </ScrollView>
        }
    </View>
}