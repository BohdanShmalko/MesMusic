import React, {FC} from "react";
import {FlatList} from "react-native";
import {Photo} from "./Photo";

type PropType = {}

export const UserPhotos: FC<PropType> = (props) => {

    return <FlatList
        data={[{
            id: '1',
            uri: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
        }, {
            id: '2',
            uri: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
        }, {
            id: '3',
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
        }, {id: '4', uri: 'https://html5css.ru/css/img_lights.jpg'}, {
            id: '5',
            uri: 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
        }]}
        renderItem={({item}) => <Photo uri={item.uri}/>}
        keyExtractor={item => item.id}
        horizontal
    />
}