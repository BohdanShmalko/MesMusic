import React, { FC } from "react";
import { FlatList, ViewStyle, StyleSheet } from "react-native";
import { List } from "native-base";
import { ListAvatar } from "./ListAvatar";
import { DialogType, navigationType } from "../../types/types";

type PropType = {
  navigation: navigationType;
  data: Array<DialogType>;
};

interface Styles {
  list: ViewStyle;
}

const stl = StyleSheet.create<Styles>({
  list: { backgroundColor: "rgba(255, 255, 255, 0.2)", flex: 1 },
});

export const AllMessages: FC<PropType> = ({ navigation, data }) => {
  return (
    <List style={stl.list}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListAvatar {...item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </List>
  );
};
