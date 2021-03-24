import AsyncStorage from "@react-native-async-storage/async-storage";
import { actionCreator } from "../BLL/storeRedux";
import {Dispatch} from "react";

export const loadFirstScreens = (dispatch: Dispatch<any>) => () => {
  (async () => {
    let language = await AsyncStorage.getItem("language");
    if (!language) {
      await AsyncStorage.setItem("language", "en");
      language = "en";
    }
    // @ts-ignore
    dispatch(actionCreator.settingsScreen.changeLanguage(language));
  })();
};
