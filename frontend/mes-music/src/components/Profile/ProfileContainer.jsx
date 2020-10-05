import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"
import {Profile} from "./Profile";

const someUser = {
    photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
    nickName: 'Vova666',
    status: 'MC Llama - best!!!',
    info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
    posts: ['My coat is white!', 'And now black!']
}

class ProfileContainer extends React.Component {
    render() {
        return <Profile userProfile={someUser}/>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(ProfileContainer)


