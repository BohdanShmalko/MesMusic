import React, {FC, useState} from "react";
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {Button, Thumbnail} from "native-base";
import {cutText} from "../../helpers/cutText";
import {useSelector} from "react-redux";
import {getIsMyProfile, getUserInf} from "../../BLL/selectors/profileSelector";
import {getLanguage, getTheme} from "../../BLL/selectors/settingsSelector";
import vocabulary from "../../vocabulary/vocabulary";

const TextWithBold: FC<{ bold: string, title: string, color : string }> = ({bold, title, color}) => {
    return <Text style={{color, fontSize: 15}}>
        <Text style={{fontWeight: 'bold', color}}>{bold}</Text>{title}</Text>
}

type PropType = {}

export const UserInf: FC<PropType> = (props) => {
    const language = useSelector(getLanguage)
    const screenWidth = Dimensions.get('window').width
    const [isAllAbout, setIsAllAbout] = useState(false);

    const toggleAbout: () => void = () => {
        setIsAllAbout(!isAllAbout);
    };
    const cut100Symbols = cutText(100)
    const {name, lastName, about, uri, isFriend} = useSelector(getUserInf)
    const isMyProfile = useSelector(getIsMyProfile)

    //TODO set onSubscribe function
    let subscribeText, onSubscribe
    if(isFriend){
        subscribeText = vocabulary['unsubscribe'][language]
        onSubscribe = () => {}
    }else {
        subscribeText = vocabulary['subscribe'][language]
        onSubscribe = () => {}
    }

    const {firstPrimaryFont, firstMainColor} = useSelector(getTheme)
    return <View style={{flexDirection: 'row'}}>
        <View style={{padding: 10}}>
            <Thumbnail style={{width: screenWidth / 2, height: screenWidth / 2}}
                       source={{uri}}/>
            <View style={{justifyContent: 'center', flexDirection: 'row', padding: 5}}>
                {isMyProfile ?
                    <Button style={{backgroundColor: firstMainColor}}><Text
                        style={{padding: 5, color: firstPrimaryFont}}>{vocabulary['change main photo'][language]}</Text></Button>:

                    <Button style={{backgroundColor: firstMainColor}} onPress={onSubscribe}><Text
                        style={{padding: 5, color: firstPrimaryFont}}>{subscribeText}</Text></Button>}

            </View>
        </View>
        <View style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: screenWidth / 2.5
        }}>
            <TouchableOpacity style={{flexDirection : 'column'}} onPress={toggleAbout}>
                <TextWithBold bold={`${vocabulary['name'][language]} : `} title={name} color={firstPrimaryFont}/>
                <TextWithBold bold={`${vocabulary['lastname'][language]} : `} title={lastName} color={firstPrimaryFont}/>
                {isAllAbout ?
                    <TextWithBold bold={`${vocabulary['about me'][language]} : `} title={about} color={firstPrimaryFont}/> :
                    <TextWithBold bold={`${vocabulary['about me'][language]} : `} title={cut100Symbols(about)} color={firstPrimaryFont}/>}
            </TouchableOpacity>
        </View>
    </View>
}

