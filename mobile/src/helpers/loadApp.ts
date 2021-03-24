import { AuthType, SimpleUserInfType } from "../DAL/apiTypes";
import React, {Dispatch} from "react";
import { authAPI } from "../DAL/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export const AppInitialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export const AppReduser = (prevState: any, action: any) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
};

export const AppInitialContext = {
  signIn: async (
    authData: AuthType,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => {},
  signOut: async () => {},
  signUp: async (
    data: SimpleUserInfType,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => {},
};

export const AppMainContext = (dispatch: Dispatch<any>) => () => ({
  signIn: async (
    authData: AuthType,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const res = await authAPI.login(authData, setError);
    if (res) {
      await AsyncStorage.setItem("token", res.token);
      dispatch({ type: "SIGN_IN", token: res.token });
    }
  },
  signOut: async () => {
    const res = await authAPI.logout();
    if (res) {
      await AsyncStorage.setItem("token", "");
      dispatch({ type: "SIGN_OUT" });
    }
  },
  signUp: async (
    data: SimpleUserInfType,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const res = await authAPI.createUser(data, setError);
    if (res) {
      await AsyncStorage.setItem("token", res.token);
      dispatch({ type: "SIGN_IN", token: res.token });
    }
  },
});

export const LoadApp = (dispatch: Dispatch<any>, setIsReady: React.Dispatch<React.SetStateAction<boolean>>) => () => {
  (async () => {
    // load font
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    setIsReady(true);

    // check token
    let userToken;
    try {
      //await AsyncStorage.setItem('token', '');
      userToken = await AsyncStorage.getItem("token");
    } catch (e) {
      console.log(e);
    }
    dispatch({ type: "RESTORE_TOKEN", token: userToken });
  })();
};
