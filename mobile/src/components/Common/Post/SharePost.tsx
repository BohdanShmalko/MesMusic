import React, {FC} from "react";
import {Text, View} from "react-native";
import vocabulary from "../../../vocabulary/vocabulary";
import {useSelector} from "react-redux";
import {getLanguage, getTheme} from "../../../BLL/selectors/settingsSelector";
import {Overlay} from "../Overlay";

type PropType = {
    visible: boolean;
    toggleOverlay: () => void;
}

export const SharePost: FC<PropType> = ({visible, toggleOverlay}) => {
    const language = useSelector(getLanguage)
    const { secondPrimaryFont } = useSelector(getTheme);
    return <Overlay isDown visible={visible} setVisible={toggleOverlay} transparent>
        <View style={{alignItems: 'center'}}>
            <Text style={{color: secondPrimaryFont}}>In future</Text>
        </View>
    </Overlay>
}