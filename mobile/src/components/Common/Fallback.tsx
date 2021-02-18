import React, {FC} from "react";
import {Image} from "react-native";
import {MainContainer} from "./MainContainer";
import {Spinner} from 'native-base';
import {useSelector} from "react-redux";
import {getBackgroundObject} from "../../BLL/selectors/settingsSelector";

type PropType = {}

export const Fallback : FC<PropType> = (props) => {
    const background = useSelector(getBackgroundObject(undefined))
    return <MainContainer style={{flex : 1, justifyContent : 'center', alignItems : 'center'}} {...background}>
        <Image
            style={{width : 128, height : 128}}
            source={require('../../../assets/icon.png')}
        />
        <Spinner/>
    </MainContainer>
}