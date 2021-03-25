import React, { FC } from "react";
import { Dimensions, FlatList, StyleSheet, ViewStyle } from "react-native";
import { List } from "native-base";
import { User } from "./User";
import { navigationType, UserType } from "../../types/types";

const screenWidth = Dimensions.get("window").width;

type PropType = {
  navigation: navigationType;
  data: Array<UserType>;
};

export const UsersList: FC<PropType> = ({ navigation, data }) => {
  const stl = StyleSheet.create<{ list: ViewStyle }>({
    list: {
      flex: 1,
      marginTop: 10,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      width: screenWidth,
    },
  });

  return (
    <List style={stl.list}>
      <FlatList
        data={data}
        renderItem={({ item }) => <User {...item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </List>
  );
};
