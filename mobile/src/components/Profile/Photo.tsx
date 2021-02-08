import React, {FC, useState} from "react";
import {Dimensions, Image, TouchableOpacity, View} from "react-native";
import {Overlay} from "../Common/Overlay";
import {Icon} from "native-base";
import {ButtonInOverlay} from "../Common/ButtonInOverlay";

export const Photo: FC<{ uri: string }> = ({uri}) => {
    const screenHeight = Dimensions.get('window').height
    const screenWidth = Dimensions.get('window').width
    const [visible, setVisible] = useState(false);

    const toggleOverlay: () => void = () => {
        setVisible(!visible);
    };
    const [insideVisible, setInsideVisible] = useState(false);

    const toggleInsideOverlay: () => void = () => {
        setInsideVisible(!insideVisible);
    };
    return <View>
        <TouchableOpacity style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}} onPress={toggleOverlay}>
            <Image source={{uri}}
                   style={{
                       flexDirection: 'row',
                       padding: 10,
                       justifyContent: 'center',
                       flex: 1,
                       minHeight: screenHeight / 5,
                       width: screenHeight / 5,
                       margin: 10
                   }}/>
        </TouchableOpacity>
        <Overlay visible={visible} setVisible={toggleOverlay} transparent>
            <View style={{alignItems: 'center'}}>
                <View style={{flexDirection : 'row'}}>
                    <View style={{flex : 1}}></View>
                    <View style={{flexDirection : 'row'}}>
                        <TouchableOpacity onPress={toggleInsideOverlay}>
                            <Icon name = 'menu' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleOverlay}>
                            <Icon name = 'close' />
                        </TouchableOpacity>
                    </View>
                </View>
                <Image source={{uri}}
                       style={{
                           width : screenWidth - 10,
                           height : screenWidth - 10
                       }}/>
            </View>
            <Overlay setVisible={toggleInsideOverlay} visible={insideVisible} transparent>
                <View style={{alignItems: 'center'}}>
                    <ButtonInOverlay title='Change main photo' onPress={() => {
                        //TODO change photo
                        toggleInsideOverlay()
                        toggleOverlay()
                    }}/>
                    <ButtonInOverlay title='Delete this photo' onPress={() => {
                        //TODO delete photo
                        toggleInsideOverlay()
                        toggleOverlay()
                    }}/>
                </View>
            </Overlay>
        </Overlay>
    </View>
}