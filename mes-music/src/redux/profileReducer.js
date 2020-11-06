const ON_STATUS_CHANGE = '/profile/ON_STATUS_CHANGE'
const ON_ADD_POST = '/profile/ON_ADD_POST'

const initialState = {
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

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_STATUS_CHANGE:
            return {
                ...state,
                status: action.status
            }
        case ON_ADD_POST:
            const newPost = {header: action.postHeader, info: action.postContent}
            return {
                ...state,
                posts: [
                    ...state.posts,
                    newPost
                ]
            }
        default:
            return state
    }
}

export const onStatusChange = (status) => ({type: ON_STATUS_CHANGE, status})
export const onAddPost = (postHeader, postContent) => ({type: ON_ADD_POST, postHeader, postContent})

