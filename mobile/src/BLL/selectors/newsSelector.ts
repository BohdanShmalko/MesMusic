import { StateType } from "../storeRedux";

export const getNews = (state: StateType) => {
  const { news } = state.newsScreen;
  return news;
};
