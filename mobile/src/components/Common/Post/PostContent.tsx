import React, { FC } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageStyle,
  StyleSheet,
} from "react-native";
import { IdUriType } from "../../../types/types";

const screenWidth = Dimensions.get("window").width;

type PropType = {
  uris: Array<IdUriType>;
};

interface Styles {
  container: ImageStyle;
}

const stl = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    flex: 1,
    minHeight: 400,
    width: screenWidth,
  },
});

export const PostContent: FC<PropType> = ({ uris }) => {
  return (
    <FlatList
      horizontal
      data={uris}
      renderItem={({ item }) => (
        <Image source={{ uri: item.uri }} style={stl.container} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
