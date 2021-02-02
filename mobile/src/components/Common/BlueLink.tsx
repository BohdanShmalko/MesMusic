import React, {FC} from "react";
import {Text} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";

type PropType = {
    navigation : StackNavigationProp<RootStackParamList, "Home" | "Dialogs" | "ForgetPassword" | "Music" | "News" | "Profile" | "Registration" | "Settings" | "Training" | "Users" | "Likes" | "Message">
    to : any
    title : string
}

export const BlueLink : FC<PropType> = ({navigation, to, title}) => {
    return <Text style={{textAlign : 'center', color : '#3849ff', marginTop : 5, textDecorationLine : 'underline'}} onPress={() => navigation.navigate(to)}>
        {title}
    </Text>
}