import React, {FC} from "react";
import {TouchableOpacity, View} from "react-native";
import {Textarea, Button, Icon} from "native-base"

type PropType = {}

export const MessageTextArea : FC<PropType> = (props) => {
    return <View style={{flexDirection : 'row', backgroundColor : 'rgb(255, 255, 255)', margin : 5, borderRadius : 10, maxHeight : 120}}>
        <View style={{flex : 7, padding : 5}}>
            <Textarea rowSpan={3} placeholder="Textarea" />
        </View>
        <View style={{flex : 1}}>
            <TouchableOpacity style = {{ flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <Icon name="md-send" style = {{fontSize : 25, color : 'red'}}/>
            </TouchableOpacity>
        </View>
        <View style={{flex : 1, flexDirection : 'column'}}>
            <View style={{flex : 1}}>
                <TouchableOpacity style = {{justifyContent : 'center', alignItems : 'center'}}>
                    <Icon name="md-attach" style = {{fontSize : 25, color : 'black'}}/>
                </TouchableOpacity>
            </View>
            <View style={{flex : 1}}>
                <TouchableOpacity style = {{justifyContent : 'center', alignItems : 'center'}}>
                    <Icon name="md-happy" style = {{fontSize : 25, color : 'black'}}/>
                </TouchableOpacity>
            </View>
            <View style={{flex : 1}}>
                <TouchableOpacity style = {{justifyContent : 'center', alignItems : 'center'}}>
                    <Icon name="md-mic" style = {{fontSize : 25, color : 'black'}}/>
                    {/*<Icon name="md-camera" style = {{fontSize : 25, color : 'black'}}/>*/}
                </TouchableOpacity>
            </View>
        </View>
    </View>
}