import { StateType } from "../storeRedux";
import { ScreenNameType } from "../../types/types";

export const getTheme = (state: StateType) => state.settingsScreen.theme;

type GetBackgroundObjectType = (
  screen: ScreenNameType
) => (
  state: StateType
) => { color1: string; color2: string } | { image: { uri: string } };

// @ts-ignore
export const getBackgroundObject: GetBackgroundObjectType = (screen) => (
  state
) => {
  const {
    firstMainColor,
    secondMainColor,
    pictureOnBackground,
  } = state.settingsScreen.theme;
  if (pictureOnBackground.isActive) {
    if (pictureOnBackground.singlePicture.isActive)
      return { image: { uri: pictureOnBackground.singlePicture.uri } };
    if (screen) {
      if (pictureOnBackground.screensPicture[screen])
        return { image: { uri: pictureOnBackground.screensPicture[screen] } };
    }
  }
  return { color1: firstMainColor, color2: secondMainColor };
};

export const getLanguage = (state: StateType) => state.settingsScreen.language;
