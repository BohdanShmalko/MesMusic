import React, {FC} from "react";
import {View} from "react-native";
import {Button, Icon} from "native-base";
import {useSelector} from "react-redux";
import {getTheme} from "../../BLL/selectors/settingsSelector";

type PropType = {
    iconName: string
    onPress?: () => void
}

export const RightDownButton: FC<PropType> = ({iconName, onPress}) => {
    const {firstMainColor, firstPrimaryFont} = useSelector(getTheme)
    return <View style={{padding: 20, justifyContent: 'flex-end', flexDirection: 'row'}}>
        <Button rounded style={{
            backgroundColor: firstMainColor,
            width: 64,
            height: 64,
            justifyContent: 'center',
            alignItems: 'center'
        }}
                onPress={onPress}>
            <Icon name={iconName} style={{color: firstPrimaryFont, fontSize: 35}}/>
        </Button>
    </View>

}