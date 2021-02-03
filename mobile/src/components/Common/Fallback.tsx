import React, {FC} from "react";
import {Image} from "react-native";
import {MainContainer} from "./MainContainer";
import {Spinner} from 'native-base';

type PropType = {}

export const Fallback : FC<PropType> = (props) => {
    return <MainContainer style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
        <Image
            style={{width : 128, height : 128}}
            source={require('../../../assets/icon.png')}
        />
        <Spinner />
    </MainContainer>
}