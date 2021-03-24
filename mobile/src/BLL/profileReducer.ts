import { ActionsType, StateType } from "./storeRedux";
import { ThunkAction } from "redux-thunk";
import { ProfileType } from "../types/types";

const CHANGE_FIRST_NAME = "/profile/CHANGE_FIRST_NAME";
const CHANGE_SECOND_NAME = "/profile/CHANGE_SECOND_NAME";
const CHANGE_ABOUT_ME = "/profile/CHANGE_ABOUT_ME";
const CHANGE_MAIN_PHOTO = "/profile/CHANGE_MAIN_PHOTO";
const ADD_PHOTO = "/profile/ADD_PHOTO";
const DELETE_PHOTO = "/profile/DELETE_PHOTO";
const LOAD_PROFILE = "/profile/LOAD_PROFILE";

export type InitialStateType = ProfileType;

const initialState: InitialStateType = {
  isMyProfile: true,
  isShowMusic: true,
  isShowTrainings: true,
  photos: [
    {
      id: "1",
      uri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmT5wCnqckzkvzvgZoxSHXVOydQzi-S7xcbA&usqp=CAU",
    },
    {
      id: "2",
      uri:
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    },
    {
      id: "3",
      uri:
        "https://www.vettimes.co.uk/app/uploads/2020/01/close-up-photography-of-adult-black-and-white-short-coat-dog-733416.jpg",
    },
  ],
  posts: [
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
  ],
  userInf: {
    about:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    lastName: "some test last name",
    name: "some test name",
    uri:
      "https://c.files.bbci.co.uk/9B8B/production/_104191893_kukurtihar_papputhedog_-pappu_the_pug_nepal.png",
  },
};

export const profileReducer = (
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

type ActionType = ActionsType<typeof profileAC>;
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>;

export const profileAC = {};
