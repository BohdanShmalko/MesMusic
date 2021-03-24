import AsyncStorage from "@react-native-async-storage/async-storage";
import { actionCreator } from "../BLL/storeRedux";
import { LanguagesType } from "../types/types";
import {Dispatch} from "react";

export const changeLanguageTo = (
  language: LanguagesType,
  dispatch: Dispatch<any>,
  toggleChangeLanguage: () => void
) => async () => {
  await AsyncStorage.setItem("language", "en");
  dispatch(actionCreator.settingsScreen.changeLanguage("en"));
  toggleChangeLanguage();
};
