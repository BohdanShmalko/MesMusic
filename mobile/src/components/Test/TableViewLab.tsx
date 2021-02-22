import React, {FC} from "react";
import {Content, Left, ListItem, Radio, Right, Text} from 'native-base';

type PropType = {}

export const TableViewLab: FC<PropType> = (props) => {
    return <Content>
        <ListItem>
            <Text>Text 1</Text>
        </ListItem>
        <ListItem>
            <Text>Text 2</Text>
        </ListItem>
        <ListItem>
            <Text>Text 3</Text>
        </ListItem>
        <ListItem>
            <Text>Text 4</Text>
        </ListItem>
    </Content>
}