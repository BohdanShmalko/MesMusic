import React, { FC } from "react";
import { FlatList, View, ViewStyle, StyleSheet } from "react-native";
import { Comment } from "./Comment";
import { CommentType, navigationType } from "../../types/types";

type PropType = {
  navigation: navigationType;
  data: Array<CommentType>;
};

interface Styles {
  footerStr: ViewStyle;
}

const stl = StyleSheet.create<Styles>({
  footerStr: { height: 180 },
});

export const CommentsList: FC<PropType> = ({ data, navigation }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Comment navigation={navigation} {...item} />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View style={stl.footerStr}></View>}
      />
    </View>
  );
};
