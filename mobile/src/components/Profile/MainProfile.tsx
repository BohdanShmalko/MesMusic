import React, { FC } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from "react-native";
import { UserInf } from "./UserInf";
import { UserPhotos } from "./UserPhotos";
import { PostCreator } from "./PostCreator";
import { UsersButtons } from "./UsersButtons";
import { PostList } from "../Common/Post/PostList";
import { navigationType } from "../../types/types";
import { useSelector } from "react-redux";
import { getProfilePosts } from "../../BLL/selectors/profileSelector";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

type PropType = { navigation: navigationType };

const ProfileHead: FC<PropType> = ({ navigation }) => {
  return (
    <View>
      <UserInf />
      <UserPhotos />
      <UsersButtons navigation={navigation} />
      <PostCreator />
    </View>
  );
};

export const MainProfile: FC<PropType> = ({ navigation }) => {
  const profilePosts = useSelector(getProfilePosts);
  const language = useSelector(getLanguage);
  const { firstPrimaryFont } = useSelector(getTheme);

  const stl = StyleSheet.create<{ text: TextStyle; mainContainer: ViewStyle }>({
    text: { color: firstPrimaryFont, fontSize: 20, textAlign: "center" },
    mainContainer: { marginBottom: 50 },
  });

  return (
    <View style={stl.mainContainer}>
      {profilePosts.length ? (
        <SafeAreaView>
          <PostList
            navigation={navigation}
            headerComponent={() => (
              <View>
                <ProfileHead navigation={navigation} />
                <View>
                  <Text
                    style={stl.text}
                  >{`${vocabulary["posts"][language]} :`}</Text>
                </View>
              </View>
            )}
            data={profilePosts}
          />
        </SafeAreaView>
      ) : (
        <ScrollView>
          <ProfileHead navigation={navigation} />
          {/*<View><Text style={{color: 'white', textAlign: "center"}}>At the moment there are no posts</Text></View>*/}
        </ScrollView>
      )}
    </View>
  );
};
