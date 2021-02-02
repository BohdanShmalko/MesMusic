import React, {FC} from "react";
import {Container} from "native-base";

type PropType = {}

export const MainContainer : FC<PropType> = ({children}) => {
    return <Container style={{padding : 20, backgroundColor : '#e6e6e6'}}>
        {children}
    </Container>
}