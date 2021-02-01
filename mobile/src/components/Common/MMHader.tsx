import React, {FC} from "react";
import {Body, Button, Header, Icon, Left, Right, Title} from "native-base";
import {Image} from "react-native";

type PropType = {
    useLeftBack? : boolean

    useBodyLogo? : boolean
    title? : string

    useRightMessage? : boolean
}

export const MMHader : FC<PropType> = ({useLeftBack, useBodyLogo, title, useRightMessage}) => {
    return <Header style={{backgroundColor : '#08003d'}}>
        {useLeftBack &&
        <Left style={{flexDirection : 'row'}}>
            <Button transparent>
                <Icon name='arrow-back' />
            </Button>
        </Left>
        }
        {!useLeftBack && <Left />}
        {useBodyLogo && <Body style={{flexDirection : 'row'}}>
            <Image
                style={{width : 64, height : 64}}
                source={require('../../../assets/icon.png')}
            />
            <Title style={{fontStyle : 'italic', marginTop : '15%'}}>Mesmusic</Title>
        </Body>}

        {!useBodyLogo && <Body><Title>{title}</Title></Body>}

        {useRightMessage &&
        <Right >
            <Button transparent>
                <Icon name='message1' type = "AntDesign"/>
            </Button>
        </Right>
        }
        {!useRightMessage && <Right />}
    </Header>
}