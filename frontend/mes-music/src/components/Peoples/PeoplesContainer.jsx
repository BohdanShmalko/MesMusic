import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"
import {Peoples} from "./Peoples";

const peoples = [
    {
        nickName: 'Vova666',
        photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
        followed: false,
        info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
        type: 'user'
    },
    {
        nickName: 'Vova666',
        photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
        followed: true,
        info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
        type: 'user'
    },
    {
        nickName: 'Vova666',
        photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
        followed: false,
        info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
        type: 'user'
    },
    // {
    //     nickName: 'Vova666',
    //     photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
    //     followed: false,
    //     info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
    //     type: 'group'
    // },
    {
        nickName: 'Vova666',
        photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
        followed: true,
        info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
        type: 'user'
    }
]

function PeoplesContainer() {
    return <Peoples peoples={peoples}/>
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(PeoplesContainer)


