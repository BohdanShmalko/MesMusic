import React, { FC } from "react";
import { FlatList } from "react-native";
import { Photo } from "./Photo";
import { useSelector } from "react-redux";
import { getProfilePhotos } from "../../BLL/selectors/profileSelector";

type PropType = {};

export const UserPhotos: FC<PropType> = (props) => {
  const profilePhotos = useSelector(getProfilePhotos);
  return (
    <FlatList
      data={profilePhotos}
      renderItem={({ item }) => <Photo uri={item.uri} />}
      keyExtractor={(item) => item.id}
      horizontal
    />
  );
};
