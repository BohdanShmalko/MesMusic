import axios from "axios";
import { AuthType, SimpleUserInfType } from "./apiTypes";
import authFetch from "./authFetch";
import {ImageInfo} from "expo-image-picker/build/ImagePicker.types";

const instance = axios.create({
  baseURL: "http://192.168.0.103:3001/mobile/",
  // headers : {
  //     "X-Access-Token" : "sometest"
  // }
});

export const authAPI = {
  createUser(
    userInf: SimpleUserInfType,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) {
    const resData = { ...userInf };
    delete resData.repeatPassword;
    return authFetch("createuser", {
      body: resData,
      method: "post",
    })
      .then((res: any) => res.data)
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
      });
  },
  logout() {
    return authFetch("logout", {
      method: "put",
    })
      .then((res: any) => res.data)
      .catch((err) => {
        console.log(err);
      });
  },
  login(
    authInf: AuthType,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) {
    return authFetch("login", {
      body: authInf,
      method: "post",
    })
      .then((res: any) => res.data)
      .catch((err) => {
        setError(err.response.data.error);
      });
  },
};

export const usersAPI = {
  loadAllUsers: (start: number, end: number) =>
    authFetch(`loadallusers/:${start}/:${end}`)
      .then((res: any) => res.data)
      .catch((err) => {
        console.log(err);
      }),
  loadFriends: (start: number, end: number) =>
    authFetch(`loadfriends/:${start}/:${end}`)
      .then((res: any) => res.data)
      .catch((err) => {
        console.log(err);
      }),
  subscribe: (userId: string) =>
    authFetch("subscribe", {
      body: { whose_subscribe: userId },
      method: "post",
    }).catch((err) => {
      console.log(err);
    }),
};

export const dialogsAPI = {
  createRoom: (members: Array<string>) =>
    authFetch(`createroom`, {
      body: { members },
      method: "post",
    })
      .then((res: any) => res.data)
      .catch((err) => {
        console.log(err);
      }),
  loadDialogs: (start: number, end: number) =>
    authFetch(`loaddialogs/:${start}/:${end}`)
      .then((res: any) => res.data)
      .catch((err) => {
        console.log(err);
      }),
};

export const messageAPI = {
    loadPage: (roomId : string) => authFetch(`loadmessagepage/:${roomId}`).then((res : any) => res.data).catch(err => {
        console.log(err)
    }),
    changePhoto : (photo : string | undefined, roomId : string) => authFetch('changeroomphoto', {
        method : 'post',
        body : {photo, roomId},
        headers: {
            'content-type': 'multipart/form-data',
        }
    }).then((res : any) => res.data)
}
