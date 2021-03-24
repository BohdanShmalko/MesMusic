import React, { FC } from "react";
import { List } from "native-base";
import { FlatList, View, ViewStyle, StyleSheet } from "react-native";
import { Message } from "./Message";
import { MessageType } from "../../types/types";

type PropType = {
  data: Array<MessageType>;
};

interface Styles {
  footer: ViewStyle;
}

const stl = StyleSheet.create<Styles>({
  footer: { height: 180 },
});

export const MessageList: FC<PropType> = ({ data }) => {
  return (
    <List>
      <FlatList
        data={data}
        renderItem={({ item }) => <Message {...item} />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View style={stl.footer}></View>}
      />
    </List>
  );
};
