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
            "data:image/png;base64,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",
        },
        {
          id: "2",
          uri:
            "https://www.reedpublicrelations.com/wp-content/uploads/2019/11/Reed-blog-post-image.jpg",
        },
      ],
      name: "Bohdan",
      likeCount: 10,
      description:
        "This is my last lab job, thank you for the wonderful couple and your time spent",
      publicationTime: "11:31",
      isLike: true,
      userUri: "https://lh3.googleusercontent.com/ogw/ADGmqu-8Dl_cy0z27G8WFkzyD9CgM8y6JewKANTnx5deAg=s64-c-mo",
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
