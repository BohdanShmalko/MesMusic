import React, {FC} from "react";
import {View} from "react-native";
import {Button, Icon} from "native-base";

type PropType = {
    iconName: string
    onPress ?: () => void
}

export const RightDownButton: FC<PropType> = ({iconName, onPress}) => {
    return <View style={{padding: 20, justifyContent: 'flex-end', flexDirection: 'row'}}>
        <Button rounded style={{backgroundColor: '#08003d', width: 64, height: 64, justifyContent: 'center', alignItems : 'center'}}
                onPress={onPress}>
            <Icon name={iconName} style={{color: 'white', fontSize: 35}}/>
        </Button>
    </View>

}