import React, {FC} from "react";
import {Dimensions, ScrollView, TouchableOpacity, View} from "react-native";
import {Button, Text} from 'native-base';
import {ChoiceType} from "../../types/types";

type PropType = {
    choiceButtons: Array<ChoiceType>
    numerosity: number
}

export const Choice: FC<PropType> = ({choiceButtons, numerosity}) => {
    const elementWidth = Dimensions.get('window').width / numerosity - 10
    return <View>
        <ScrollView horizontal>
            {choiceButtons.map((choice, index) => {
                let opacity
                choice.isActive ? opacity = 0 : opacity = 0.5
                return <Button
                    key={index}
                    style={{
                        flexDirection: 'row',
                        marginRight: 10,
                        width: elementWidth,
                        backgroundColor: `rgba(255, 255, 255, ${opacity})`
                    }}>
                    <Text style={{fontSize: 15, textAlign: 'center'}}>{choice.title}</Text>
                </Button>
            })}
        </ScrollView>
    </View>
}