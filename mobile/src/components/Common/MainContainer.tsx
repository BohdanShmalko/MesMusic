import React, {FC} from "react";
import {Container} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import {Dimensions, SafeAreaView} from "react-native";
const displayHeight = Dimensions.get('window').height
type PropType = {
    style ?: any
    containerStyle ?: any
    minus ?: number
}

export const MainContainer : FC<PropType> = ({minus = 0, containerStyle, children, style}) => {
    return <Container>
            <LinearGradient colors = {['#08003d', '#f55656']} style={{minHeight : displayHeight - minus, ...containerStyle}}>
                <SafeAreaView  style = {{...style}}>
                    {children}
                </SafeAreaView>
            </LinearGradient>
    </Container>

}