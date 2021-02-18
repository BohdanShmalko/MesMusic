import {ActionsType, StateType} from "./storeRedux";
import {ThunkAction} from "redux-thunk";
import {CommentType} from "../types/types";

const ADD_COMMENT = '/comment/ADD_COMMENT'
const DELETE_COMMENT = '/comment/DELETE_COMMENT'
const LOAD_COMMENTS = '/comment/LOAD_COMMENTS'
const SET_COMPLAIN = '/comment/SET_COMPLAIN'


export type InitialStateType = {
    comments : Array<CommentType>
}

const initialState : InitialStateType = {
    comments : [{
        id : '1',
        text : '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
        whoComment : {
            id : '1',
            name : 'test user',
            photo : 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/05/19091354/Weimaraner-puppy-outdoors-with-bright-blue-eyes.20190813165758508-1.jpg'
        },
        isMy : false
    },{
        id : '2',
        text : '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
        whoComment : {
            id : '1',
            name : 'test user',
            photo : 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/05/19091354/Weimaraner-puppy-outdoors-with-bright-blue-eyes.20190813165758508-1.jpg'
        },
        isMy : false
    },{
        id : '3',
        text : '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
        whoComment : {
            id : '1',
            name : 'test user',
            photo : 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/05/19091354/Weimaraner-puppy-outdoors-with-bright-blue-eyes.20190813165758508-1.jpg'
        },
        isMy : false
    },{
        id : '4',
        text : '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
        whoComment : {
            id : '1',
            name : 'test user',
            photo : 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/05/19091354/Weimaraner-puppy-outdoors-with-bright-blue-eyes.20190813165758508-1.jpg'
        },
        isMy : false
    },{
        id : '5',
        text : '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
        whoComment : {
            id : '1',
            name : 'test user',
            photo : 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/05/19091354/Weimaraner-puppy-outdoors-with-bright-blue-eyes.20190813165758508-1.jpg'
        },
        isMy : false
    },]
}

export const commentReducer = (state = initialState, action : ActionType) : InitialStateType => {
    switch (action.type){
        case ADD_COMMENT : return {...state,
            comments : [action.comment, ...state.comments]
        }
        case DELETE_COMMENT : return {...state,
            comments : state.comments.filter(comment => comment.id !== action.id)
        }
        case LOAD_COMMENTS : return {...state,
            comments : action.comments
        }
        case SET_COMPLAIN : return  {...state,
            comments : state.comments.map(comment => {
                if(comment.id === action.id) return  {...comment, isComplain : true}
                return comment
            })
        }
        default : return state
    }
}

type ActionType = ActionsType<typeof commentAC>
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>

export const commentAC = {
    addComment : (comment : CommentType) => ({type : ADD_COMMENT, comment} as const),
    deleteComment : (id : string) => ({type : DELETE_COMMENT, id} as const),
    loadComments : (comments : Array<CommentType>) => ({type : LOAD_COMMENTS, comments} as const),
    setComplain : (id : string) => ({type : SET_COMPLAIN, id} as const)
}

//TODO thunk COMPLAIN_MESSAGE
//TODO thunk ADD_COMMENT
//TODO thunk DELETE_COMMENT
//TODO thunk LOAD_COMMENTS