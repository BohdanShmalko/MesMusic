import React, { FC } from "react";
import { Image, ImageStyle, ViewStyle, StyleSheet } from "react-native";
import { MainContainer } from "./MainContainer";
import { Spinner } from "native-base";
import { useSelector } from "react-redux";
import { getBackgroundObject } from "../../BLL/selectors/settingsSelector";

type PropType = {};

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
}

const stl = StyleSheet.create<Styles>({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 128, height: 128 },
});

export const Fallback: FC<PropType> = (props) => {
  const background = useSelector(getBackgroundObject(undefined));
  return (
    <MainContainer style={stl.container} {...background}>
      <Image style={stl.image} source={require("../../../assets/icon.png")} />
      <Spinner />
    </MainContainer>
  );
};
