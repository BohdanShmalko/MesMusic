import React, {FC} from "react";
import {Image, Text, View} from "react-native";

type PropType = {}

export const ImagesLab: FC<PropType> = (props) => {
    return <View>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Додана в додаток картинка</Text>
        <Image source={require('../../../assets/dark.jpg')} style={{width: 300, height: 300}}/>

        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Розміри зображень</Text>
        <Image source={require('../../../assets/1x/testLab2.png')}/>
        <Image source={require('../../../assets/2x/testLab2.png')}/>
        <Image source={require('../../../assets/3x/testLab2.png')}/>
        <Text>240 dpi</Text>
        <Image source={require('../../../assets/testLab3.png')} style={{
            width: undefined,
            resizeMode: 'contain', height: 240
        }}/>
        <Text>320 dpi</Text>
        <Image source={require('../../../assets/testLab3.png')} style={{
            width: undefined,
            resizeMode: 'contain', height: 320
        }}/>
        <Text>480 dpi</Text>
        <Image source={require('../../../assets/testLab3.png')} style={{
            width: undefined,
            resizeMode: 'contain', height: 480
        }}/>

        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Завантаження з мережі</Text>
        <Image source={{uri: 'https://html5css.ru/css/paris.jpg', width: 300, height: 300}}/>

        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Властивість Aspect в react native</Text>
        <Text>За замовчуванням cover</Text>
        <Image source={require('../../../assets/testLab3.png')} style={{resizeMode: 'cover'}}/>
        <Text>repeat</Text>
        <Image source={require('../../../assets/testLab3.png')} style={{resizeMode: 'repeat'}}/>
        <Text>center</Text>
        <Image source={require('../../../assets/testLab3.png')} style={{resizeMode: 'center'}}/>
        <Text>contain</Text>
        <Image source={require('../../../assets/testLab3.png')} style={{resizeMode: 'contain'}}/>
        <Text>stretch</Text>
        <Image source={require('../../../assets/testLab3.png')} style={{resizeMode: 'stretch'}}/>
    </View>
}