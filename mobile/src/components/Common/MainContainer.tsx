import React, {FC} from "react";
import {Container} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import {Dimensions, SafeAreaView} from "react-native";
const displayHeight = Dimensions.get('window').height + 40
type PropType = {
    style ?: any
}

export const MainContainer : FC<PropType> = ({children, style}) => {
    return <Container>
            <LinearGradient colors = {['#08003d', '#f55656']} style={{padding : 20, minHeight : displayHeight}}>
                <SafeAreaView  style = {{...style}}>
                    {children}
                </SafeAreaView>
            </LinearGradient>
    </Container>

}