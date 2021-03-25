import { StackNavigationProp } from "@react-navigation/stack";
import {ColorValue} from "react-native";

export type RootStackParamList = {
  Home: undefined;
  Dialogs: undefined;
  ForgetPassword: undefined;
  Music: undefined;
  News: undefined;
  Profile: undefined;
  Registration: undefined;
  Settings: undefined;
  Training: undefined;
  Users: undefined;
  Likes: undefined;
  Message: undefined;
  Comments: undefined;
  Test: undefined;
};

export type DialogType = {
  id: string;
  uriAvatar: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  howManyNotRead: number;
};

export type UserType = {
  id: string;
  photoUri: string;
  name: string;
  lastName?: string;
  about: string;
  isFriend: boolean;
};

export type MessageType = {
  id: string;
  userId: string;
  message: string;
  isMyMessage: boolean;
  status: "in process" | "sent" | "revised";
};

export type PostType = {
  id: string;
  uris: Array<IdUriType>;
  name: string;
  likeCount: number;
  description: string;
  publicationTime: string;
  isLike: boolean;
  userUri: string;
  isAdded: boolean;
  useMenu?: boolean;
  isMy?: boolean;
};

export type IdUriType = {
  id: string;
  uri: string;
};

export type WhoType = {
  id: string;
  name: string;
  photo: string;
};

export type LikeType = {
  id: string;
  type: "like" | "comment" | "complain";
  whoLiked: WhoType;
  whatLiked: PostType;
  date: string;
};

export type CommentType = {
  id: string;
  whoComment: WhoType;
  text: string;
  isMy: boolean;
  isComplain?: boolean;
};

export type ProfileType = {
  userInf: {
    name: string;
    lastName: string;
    about: string;
    uri: string;
    isFriend?: boolean;
  };
  isMyProfile?: boolean;
  photos: Array<IdUriType>;
  isShowMusic?: boolean;
  isShowTrainings?: boolean;
  isShowPosts?: boolean;
  posts: Array<PostType>;
};

export type SettingsThemeType = {
  firstMainColor: string;
  secondMainColor: string;
  firstPrimaryFont: string;
  secondPrimaryFont: string;
  pictureOnBackground: {
    isActive: boolean;
    singlePicture: {
      isActive: boolean;
      uri?: string;
    };
    screensPicture: {
      commentsPicture?: string;
      dialogsPicture?: string;
      likePicture?: string;
      messagePicture?: string;
      musicPicture?: string;
      newsPicture?: string;
      profilePicture?: string;
      settingsPicture?: string;
      trainingPicture?: string;
      userPicture?: string;
    };
  };
};

export type ScreenNameType =
  | "commentsPicture"
  | "dialogsPicture"
  | "likePicture"
  | "messagePicture"
  | "musicPicture"
  | "newsPicture"
  | "profilePicture"
  | "settingsPicture"
  | "trainingPicture"
  | "userPicture"
  | undefined;

export type UsersIdType = { id: string };

export type SettingsConfidentialityType = {
  blockForUnsigned: boolean;
  prohibitComments: Array<UsersIdType>;
  forbidMusicFor: Array<UsersIdType>;
  forbidTrainingsFor: Array<UsersIdType>;
  blockUsers: Array<UsersIdType>;
};

export type LanguagesType = "en" | "ua";

export type SettingsType = {
  language: LanguagesType;
  theme: SettingsThemeType;
  confidentiality: SettingsConfidentialityType;
};

export type PagesType =
  | "Home"
  | "Dialogs"
  | "ForgetPassword"
  | "Music"
  | "News"
  | "Profile"
  | "Registration"
  | "Settings"
  | "Training"
  | "Users"
  | "Likes"
  | "Message"
  | "Comments";

export type navigationType = StackNavigationProp<RootStackParamList, PagesType>;

export type TitleCallbackType = {
  title: string;
  callback: () => void;
};

export type FooterType = 'friends' | 'music' | 'study' | 'likes' | 'profile'

export type FooterButtonType = {
  count : number
  icon : string
  currentActive : FooterType
  moveTo : PagesType
}

export type SettingsItemType = {
  icon : string
  title : string
  colorButton : ColorValue
  useSwitch ?: boolean
  useButton ?: boolean
  value ?: boolean | string
  onPress : () => void
  colorWord ?: string
}
