const ADD_POST = '/profile/ADD_POST'
const ADD_MY_INF = '/profile/ADD_MY_INF'
const ADD_MANY_POSTS = '/profile/ADD_MANY_POSTS'
const IS_LOAD = '/profile/IS_LOAD'

const initialState = {
    page : {
        posts : [],
        isLoad : false,
        inf : {}
    }
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST : return {
            ...state,
            page : {...state.page, posts : [ {
                id : state.page.posts.length,
                ...action.data,
                likeCount: 0
            }, ...state.page.posts]}
        }
        case ADD_MY_INF :
            return {...state,
            page: {...state.page,
                inf : {...state.page.inf, ...action.data, haveInf: true}
            }
        }
        case ADD_MANY_POSTS : return {...state,
            page: {...state.page,
                posts: [...action.postsArr]
            }
        }
        case IS_LOAD : return {...state,
            page : {...state.page,
            isLoad: action.value}
        }
        default : return state
    }
}

export const profileActionCreator = {
    addPost(data) { return {type : ADD_POST, data} },
    addMyInf(data) { return {type : ADD_MY_INF, data}},
    addManyPosts(postsArr) {return {type : ADD_MANY_POSTS, postsArr}},
    isLoad(value) {return {type : IS_LOAD, value}}
}

