import React, {FC, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Icon, Thumbnail} from "native-base";
import {cutText} from "../../helpers/cutText";
import {Overlay} from "../Common/Overlay";
import {ButtonInOverlay} from "../Common/ButtonInOverlay";

type PropType = {
    id: string
}

export const Comment: FC<PropType> = (props) => {
    const [isAllComment, setIsAllComment] = useState(false)
    const changeAllComment = () => setIsAllComment(!isAllComment)
    const [visible, setVisible] = useState(false);

    const toggleOverlay: () => void = () => setVisible(!visible)

    const cut200Symbols = cutText(200)
    const testComment = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
        '\n' +
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
    return <View style={{
        backgroundColor: 'rgba(255,255,255,0.3)',
        margin: 10,
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row'
    }}>
        <View style={{flex: 3}}>
            <View>
                <Thumbnail
                    source={{uri: 'https://cdn.the-scientist.com/assets/articleNo/67431/aImg/37291/lemur-wrist-glands-scent-pheromones-primates-testosterone-mating-breeding-sexual-communication-t.png'}}/>
            </View>
            <View>
                <Text>Nickname</Text>
            </View>
        </View>
        <View style={{flex: 10}}>
            <TouchableOpacity onPress={changeAllComment}>
                {isAllComment ? <Text>{testComment}</Text> : <Text>{cut200Symbols(testComment)}</Text>}
            </TouchableOpacity>

        </View>
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={toggleOverlay}>
                <Icon name='md-menu'/>
            </TouchableOpacity>
        </View>

        <Overlay visible={visible} setVisible={toggleOverlay} transparent>
            <View style={{alignItems: 'center'}}>
                <ButtonInOverlay title={'delete message'}/>
                <ButtonInOverlay title={'in future'}/>
            </View>
        </Overlay>
    </View>
}