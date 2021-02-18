import React, {FC} from "react";
import {Container} from "native-base";
import {LinearGradient} from "expo-linear-gradient";
import {Dimensions, ImageBackground, SafeAreaView} from "react-native";

const displayHeight = Dimensions.get('window').height
type PropType = {
    style?: any
    containerStyle?: any
    image?: any
    color1?: string
    color2?: string
    useFooter?: boolean
}

const ImageContainer: FC<{ image: any, containerStyle?: any, style?: any }> = ({
                                                                                   containerStyle,
                                                                                   style,
                                                                                   image,
                                                                                   children
                                                                               }) => (
    <ImageBackground style={{...containerStyle}} source={image}><SafeAreaView
        style={{...style}}>{children}</SafeAreaView></ImageBackground>)

const GradientContainer: FC<{ color1: string, color2: string, containerStyle?: any, style?: any }> = ({
                                                                                                          containerStyle,
                                                                                                          style,
                                                                                                          color1,
                                                                                                          color2,
                                                                                                          children
                                                                                                      }) => (
    <LinearGradient colors={[color1, color2]} style={{...containerStyle}}><SafeAreaView
        style={{...style}}>{children}</SafeAreaView></LinearGradient>)

export const MainContainer: FC<PropType> = ({
                                                color1 = '#08003d',
                                                color2 = '#f55656',
                                                image,
                                                containerStyle,
                                                children,
                                                style,
                                                useFooter
                                            }) => {

    return <Container>
        {image ?
            <ImageContainer image={image} style={{flex : useFooter ? 1 : undefined, ...style}}
                            containerStyle={{ minHeight: useFooter ? displayHeight / 10 * 9 : displayHeight, ...containerStyle}}>{children}</ImageContainer> :
            <GradientContainer style={{flex : useFooter ? 1 : undefined, ...style}} color1={color1} color2={color2}
                               containerStyle={{ minHeight: useFooter ? displayHeight / 10 * 9 : displayHeight, ...containerStyle}}>{children}</GradientContainer>
        }
    </Container>

}