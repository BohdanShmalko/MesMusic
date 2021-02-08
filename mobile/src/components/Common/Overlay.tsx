import React, {FC} from "react";
import {Dimensions, Modal, TouchableOpacity} from "react-native";

type PropType = {
    transparent?: boolean
    setVisible: () => void
    visible: boolean
    backStyle?: Object
    style?: Object
    isDown?: boolean
}

export const Overlay: FC<PropType> = ({isDown, setVisible, transparent, visible, backStyle, style, children}) => {
    const screenWidth = Dimensions.get('window').width
    let justifyContent: any, border: any, width: any
    if (isDown) {
        justifyContent = 'flex-end'
        border = 0
        width = screenWidth
    } else {
        justifyContent = 'center'
        border = 20
        width = undefined
    }

    return <Modal
        onRequestClose={setVisible}
        transparent={transparent} visible={visible}>
        <TouchableOpacity activeOpacity={1} style={{
            flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: justifyContent,
            alignItems: 'center', ...backStyle
        }} onPress={setVisible}>
            <TouchableOpacity activeOpacity={1} style={{
                padding: 10,
                backgroundColor: 'white',
                borderRadius: border, width: width, ...style
            }} onPress={(e) => e.stopPropagation()}>
                {children}
            </TouchableOpacity>
        </TouchableOpacity>
    </Modal>
}