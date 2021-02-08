import React, {FC} from "react";
import {SafeAreaView, Text, View} from "react-native";
import {PostList} from "../Common/PostList";

type PropType = {}

export const UserPosts: FC<PropType> = (props) => {
    const testPosts = ['... some post ...']
    return <View style={{marginBottom : 100}}>
        <View><Text style={{color : 'white', fontSize : 20, textAlign : "center"}}>Posts :</Text></View>
        {testPosts.length ?
            //TODO warning
            <SafeAreaView>
                <PostList/>
            </SafeAreaView> :
            <View><Text style={{color : 'white', textAlign : "center"}}>At the moment there are no posts</Text></View>
        }
    </View>
}