import {LanguagesType, TitleCallbackType} from "../types/types";
import vocabulary from "../vocabulary/vocabulary";

export const chooseUsers: (
  language: LanguagesType
) => Array<TitleCallbackType> = (language) => [
  {
    title: vocabulary["all"][language],
    callback: () => {},
  },
  {
    title: vocabulary["subscribers"][language],
    callback: () => {},
  },
  {
    title: vocabulary["signed"][language],
    callback: () => {},
  },
  {
    title: vocabulary["recommendation"][language],
    callback: () => {},
  },
];
