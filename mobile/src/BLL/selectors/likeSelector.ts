import { StateType } from "../storeRedux";

export const getLikes = (state: StateType) => state.likeScreen.likes;
