import React, {FC} from "react";
import {Button, Text, Thumbnail, ListItem, Left, Right, Body, Icon} from 'native-base';
import {cutText} from "../../helpers/cutText";

type PropType = {
    id : string
    photoUri : string
    name : string
    about : string
    isFriend : boolean
}

export const User : FC<PropType> = ({about,id,isFriend,name,photoUri}) => {
    const cut20Symbols = cutText(20)
    return <ListItem thumbnail>
        <Left>
            <Thumbnail square source={{ uri: photoUri }} />
        </Left>
        <Body>
            <Text style = {{color : 'white'}}>{name}</Text>
            <Text note numberOfLines={1}>{cut20Symbols(about)}</Text>
        </Body>
        <Right>
            <Button transparent>
                <Icon name="md-menu" style = {{fontSize : 25, color : 'black'}}/>
            </Button>
        </Right>
    </ListItem>
}