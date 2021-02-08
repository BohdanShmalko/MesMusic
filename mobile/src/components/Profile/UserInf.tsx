import React, {FC, useState} from "react";
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {Button, Thumbnail} from "native-base";
import {cutText} from "../../helpers/cutText";

const TextWithBold: FC<{ bold: string, title: string }> = ({bold, title}) => {
    return <Text style={{color: 'white', fontSize: 15}}>
        <Text style={{fontWeight: 'bold'}}>{bold}</Text>{title}</Text>
}

type PropType = {}

export const UserInf: FC<PropType> = (props) => {
    const screenWidth = Dimensions.get('window').width
    const [isAllAbout, setIsAllAbout] = useState(false);

    const toggleAbout: () => void = () => {
        setIsAllAbout(!isAllAbout);
    };
    const cut100Symbols = cutText(100)
    const testAbout = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
        '\n' +
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
    return <View style={{flexDirection: 'row'}}>
        <View style={{padding: 10}}>
            <Thumbnail style={{width: screenWidth / 2, height: screenWidth / 2}}
                       source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU'}}/>
            <View style={{justifyContent: 'center', flexDirection: 'row', padding: 5}}>
                <Button style={{backgroundColor: '#08003d'}}><Text
                    style={{padding: 5, color: 'white'}}>Subscribe</Text></Button>
            </View>
        </View>
        <View style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: screenWidth / 2.5
        }}>
            <TouchableOpacity onPress={toggleAbout}>
                <TextWithBold bold='Name : ' title={'some name'}/>
                <TextWithBold bold='Lastname : ' title={'some lastname'}/>
                {isAllAbout ?
                    <TextWithBold bold='About : ' title={testAbout}/> :
                    <TextWithBold bold='About : ' title={cut100Symbols(testAbout)}/>}
            </TouchableOpacity>
        </View>
    </View>
}

