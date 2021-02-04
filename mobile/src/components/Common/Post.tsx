import React, {FC} from "react";
import {Button, Icon, Text, Thumbnail} from 'native-base';
import {Dimensions, Image, ScrollView, View} from "react-native";
import {cutText} from "../../helpers/cutText";

type PropType = {
    uris : Array<string>
    name : string
    likeCount : number
    description : string
    publicationTime : string
    isLike : boolean
    userUri : string
    isAdded : boolean
}

export const Post : FC<PropType> = ({isAdded, userUri, uris, name, likeCount, description, publicationTime, isLike}) => {
    let heartColor, addColor
    isLike ? heartColor = 'red' : heartColor = 'white'
    isAdded ? addColor = 'black' : addColor = 'white'
    const screenWidth = Dimensions.get('window').width
    const cut50Symbols = cutText(50)
    return <View style={{marginBottom : 20, flexDirection : 'column', backgroundColor : 'rgba(255, 255, 255, 0.3)'}}>
        <View>
            <View style={{flexDirection : 'row', padding : 10, justifyContent : 'center'}}>
                <View style={{flexDirection : 'row', flex : 1}}>
                    <View style={{paddingRight : 10}}>
                        <Thumbnail style = {{width : 32, height : 32}} source={{uri : userUri}} />
                    </View>
                    <View>
                        <Text>{name}</Text>
                        <Text style = {{fontSize : 10}}>{publicationTime}</Text>
                    </View>
                </View>
                <View style={{}}>
                    <Button transparent>
                        <Icon name="md-menu" style = {{fontSize : 25, color : 'black'}}/>
                    </Button>
                </View>
            </View>
            <ScrollView horizontal>
                {uris.map((uri, index) => <Image key = {index} source={{uri}} style={{flexDirection : 'row', padding : 10, justifyContent : 'center', flex: 1, minHeight : 400, width : screenWidth }}/>)}
            </ScrollView>
            <View style={{flexDirection : 'row', justifyContent : 'center'}}>
                <View style={{flexDirection : 'row', flex : 1}}>
                    <Button transparent>
                        <Icon name="heart" style = {{color : heartColor, fontSize : 25}}/>
                    </Button>
                    <Button transparent>
                        <Icon name="md-send" style = {{color : 'white', fontSize : 25}}/>
                    </Button>
                    <Button transparent>
                        <Icon name="chatbubbles" style = {{color : 'white', fontSize : 25}}/>
                    </Button>
                </View>
                <View style={{}}>
                    <Button transparent>
                        <Icon name="md-bookmark" style = {{color : addColor, fontSize : 25}}/>
                    </Button>
                </View>
            </View>
            <View style={{paddingHorizontal : 10, paddingBottom : 10}}>
                <View style={{flexDirection : 'row'}}>
                    <Text style = {{fontWeight : 'bold', flex : 1}}>Like : {likeCount}</Text>
                    <Text style = {{fontWeight : 'bold'}}>Publications : {uris.length}</Text>
                </View>
                <View>
                    <Text><Text style = {{fontWeight : 'bold'}}>{name} : </Text>{cut50Symbols(description)}</Text>
                </View>
            </View>
        </View>
    </View>
}