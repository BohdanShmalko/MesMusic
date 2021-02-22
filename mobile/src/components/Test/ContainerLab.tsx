import React, {FC} from "react";
import {Text, View} from "react-native";

type PropType = {}

export const ContainerLab: FC<PropType> = (props) => {
    return <View style={{alignItems: 'center'}}>
        <View style={{
            backgroundColor: '"#e1e1e1',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: 'gray',
            padding: 20,
            marginBottom: 10
        }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 20
            }}>
                Like Frame
            </Text>
        </View>
        <View style={{
            backgroundColor: '#828ded',
            borderRadius: 8,
            width: 150,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>
                Like BoxView
            </Text>
        </View>
    </View>
}