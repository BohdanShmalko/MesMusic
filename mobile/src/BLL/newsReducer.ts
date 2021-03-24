import { ActionsType, StateType } from "./storeRedux";
import { ThunkAction } from "redux-thunk";
import { PostType } from "../types/types";

const ADD_POST = "/news/ADD_POST";
const DELETE_POST = "/news/DELETE_POST";
const LOAD_POSTS = "/news/LOAD_POSTS";
const LIKE_POST = "/news/LIKE_POST";
const UNLIKE_POST = "/news/UNLIKE_POST";
const ADD_YOURSELF_POST = "/news/ADD_YOURSELF_POST";
const DELETE_YOURSELF_POST = "/news/ADD_YOURSELF_POST";
const COMPLAIN_POST = "/news/COMPLAIN_POST";
const HIDDEN_POST = "/news/HIDDEN_POST";
const SEND_POST = "/news/SEND_POST";

export type InitialStateType = {
  news: Array<PostType>;
};

const initialState = {
  news: [
    {
      id: "1",
      uris: [
        {
          id: "1",
          uri:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        },
        {
          id: "2",
          uri:
            "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg",
        },
      ],
      name: "Lincoln",
      likeCount: 10,
      description:
        "some description ddj dlkfdkl sdds sdsd kj sdjs dkjsdjs bsd bsd sjdsd skdjskd  jskdjsk jskdjk jskjdksdjskdjsk jskdjkd ksjdks kjskdjskd jdkjsdj jskdjskdj kj dksj dsk j",
      publicationTime: "22:00",
      isLike: true,
      userUri: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
      isAdded: true,
      useMenu: true,
    },
    {
      id: "2",
      uris: [
        {
          id: "1",
          uri:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        },
      ],
      name: "Lincoln",
      likeCount: 10,
      description:
        "some description ddj dlkfdkl sdds sdsd kj sdjs dkjsdjs bsd bsd sjdsd skdjskd  jskdjsk jskdjk jskjdksdjskdjsk jskdjkd ksjdks kjskdjskd jdkjsdj jskdjskdj kj dksj dsk j",
      publicationTime: "22:00",
      isLike: false,
      userUri: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
      isAdded: false,
      useMenu: true,
    },
  ],
};

export const newsReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    // case SOME : return {...state
    //
    // }
    default:
      return state;
  }
};

type ActionType = ActionsType<typeof newsAC>;
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>;

export const newsAC = {};
