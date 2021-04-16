import React, {FC, useState} from "react";
import {Dimensions, FlatList, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import { getLanguage, getTheme } from "../../BLL/selectors/settingsSelector";
import { Overlay } from "../Common/Overlay";
import {UsersList} from "../Users/UsersList";
import {getUsers} from "../../BLL/selectors/usersSelector";
import {navigationType, UserType} from "../../types/types";
import {User} from "../Users/User";
import {UserFriend} from "./UserFriend";
import {SearchBar} from "../Common/SearchBar";
import {RightDownButton} from "../Common/RightDownButton";
import {Button} from "native-base";
import vocabulary from "../../vocabulary/vocabulary";
import {actionCreator} from "../../BLL/storeRedux";
import {dialogsAPI} from "../../DAL/API";

const displayHeight = Dimensions.get("window").height;

type PropType = {
  visible: boolean;
  toggleOverlay: () => void;
  navigation : navigationType
  friends : Array<UserType>
};

interface Styles {
  overlayContainer: ViewStyle;
  textInOverlay: TextStyle;
  mainContainer : ViewStyle
  searchContainer : ViewStyle,
  buttonContainer : ViewStyle,
  button : ViewStyle,
  search : ViewStyle,
  textButton : TextStyle
}

export const DialogsOverlay: FC<PropType> = ({ visible, toggleOverlay, navigation , friends}) => {
  const language = useSelector(getLanguage);
  const { secondPrimaryFont, firstPrimaryFont, firstMainColor } = useSelector(getTheme);
  const [choosers, setChoosers] = useState<{[key: string]: boolean}>({})
  const dispatch = useDispatch()

  const changeChoosers = (id : string) => {
    const newChoosers = {...choosers}
    if (!choosers[id]) newChoosers[id] = false
    newChoosers[id] = !newChoosers[id]
    setChoosers(newChoosers)
  }

  const stl = StyleSheet.create<Styles>({
    mainContainer : {
      padding : 0,
      borderRadius : 10
    },
    overlayContainer: {
    backgroundColor : firstPrimaryFont,
      height : displayHeight/2,
    },
    textInOverlay: {
      color: secondPrimaryFont,
    },
    searchContainer : {
      marginLeft : 10,
      flexDirection : "row",
      alignItems : "center"
    },
    button : {
      backgroundColor : firstMainColor,
      borderRadius : 5,
      padding : 5
    },
    search : {
      flex : 4
    },
    textButton : {
      color : firstPrimaryFont,
      textAlign : "center",
      fontSize : 17
    },
    buttonContainer : {
      flex : 1,
      paddingRight : 20,
    }
  });

  return (
    <Overlay isDown visible={visible} setVisible={toggleOverlay} transparent style={stl.mainContainer}>
      <View style={stl.overlayContainer}>
        {/*<UsersList navigation={navigation} data={allUsers} />*/}
        <View style={stl.searchContainer}>
          <View style={stl.search}>
            <SearchBar />
          </View>
        <View style={stl.buttonContainer}>
        <TouchableOpacity style={stl.button}>
          <Text style={stl.textButton}>{vocabulary['search'][language]}</Text>
        </TouchableOpacity>
        </View>
        </View>
        <FlatList
            data={friends}
            renderItem={({ item }) => <UserFriend {...item} isChoose={choosers[item.id]} onPress={() => {
              changeChoosers(item.id)
            }} />}
            keyExtractor={(item) => item.id}
        />
      </View>
      <RightDownButton iconName={'md-chatbubbles'} onPress={() => {
        (async () => {
          const members : Array<string> = []
          for (let id in choosers) choosers[id] && members.push(id)

          const dialog = await dialogsAPI.createRoom(members)
          console.log(dialog)
          dispatch(actionCreator.dialogsScreen.createChat(dialog))

          toggleOverlay()
        })()
      }}/>
    </Overlay>
  );
};
