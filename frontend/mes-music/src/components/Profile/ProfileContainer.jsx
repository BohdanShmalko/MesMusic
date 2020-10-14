import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"
import {Profile} from "./Profile";

const someUser = {
    isOwn: true,
    mainPhoto: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
    photos: ['https://ichef.bbci.co.uk/news/720/cpsprodpb/DED5/production/_104154075_gettyimages-154948449.jpg',
        'https://images.theconversation.com/files/337593/original/file-20200526-106811-ql6d51.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
        'https://scx2.b-cdn.net/gfx/news/hires/2020/1-antibodiesfr.jpg',
        'https://www.aau.edu/sites/default/files/AAU-Images/Research-and-Scholarship/shutterstock_1055732843-llamas-700x467-compressor.jpg',
        'https://www.reading.ac.uk/web/MultimediaFiles/llamaweb805971_55525.jpg',
        'https://sanantonioweddings.com/wp-content/uploads/2020/06/llagerllama.jpg'],
    nickName: 'Vova666',
    status: 'MC Llama - best!!!',
    info: 'he llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid,' +
        ' widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era. ablablablablablablabl' +
        ' ablablablablablablablablablablablablablabl ablablablablablablabl ablablablablablablablablablablablablablabl' +
        ' ablablablablablablabl ablablablablablablablablablablablablablablsablablablablablablabl' +
        ' ablablablablablablablablablablablablablabl ablablablablablablabl ablablablablablablablablablablablablablabl' +
        ' ablablablablablablabl ablablablablablablablablablablablablablabl ablablablablablablabl' +
        ' ablablablablablablablablablablablablablabl ablablablablablablabl ablablablablablablablablablablablablablabl',
    posts: [
        {
            header: 'white coat',
            info: 'My coat is white!blablablablablablablablabla blablablablablablablablablablablablablablablablablabl' +
                ' ablablablablablablabl ablablablablablablabl ablablablablablablablablablablablablablabl' +
                ' ablablablablabla'
        },
        {header: 'black coat', info: 'And now black!'}
    ]
}

class ProfileContainer extends React.Component {
    render() {
        return <Profile {...someUser}/>
    }
}

const stateToProps = state => ({})

export default compose(
    connect(stateToProps, {}))(ProfileContainer)


