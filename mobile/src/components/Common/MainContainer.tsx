import React, { FC } from "react";
import { Container } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  ViewStyle,
  StyleSheet,
} from "react-native";

const displayHeight = Dimensions.get("window").height;

type ImageContainerType = {
  image: ImageSourcePropType;
} & CommonType;

type GradientContainerType = {
  color1: string;
  color2: string;
} & CommonType;

type CommonType = {
  containerStyle?: ViewStyle;
  style?: ViewStyle;
};

type PropType = {
  useFooter?: boolean;
} & ImageContainerType &
  GradientContainerType;

interface Styles {
  main: ViewStyle;
  container: ViewStyle;
}

const ImageContainer: FC<ImageContainerType> = ({
  containerStyle,
  style,
  image,
  children,
}) => (
  <ImageBackground style={{ ...containerStyle }} source={image}>
    <SafeAreaView style={{ ...style }}>{children}</SafeAreaView>
  </ImageBackground>
);

const GradientContainer: FC<GradientContainerType> = ({
  containerStyle,
  style,
  color1,
  color2,
  children,
}) => (
  <LinearGradient colors={[color1, color2]} style={{ ...containerStyle }}>
    <SafeAreaView style={{ ...style }}>{children}</SafeAreaView>
  </LinearGradient>
);

export const MainContainer: FC<PropType> = ({
  color1 = "#08003d",
  color2 = "#f55656",
  image,
  containerStyle,
  children,
  style,
  useFooter,
}) => {
  const stl = StyleSheet.create<Styles>({
    container: {
      minHeight: useFooter ? (displayHeight / 10) * 9 : displayHeight,
      ...containerStyle,
    },
    main: { flex: useFooter ? 1 : undefined, ...style },
  });

  return (
    <Container>
      {image ? (
        <ImageContainer
          image={image}
          style={stl.main}
          containerStyle={stl.container}
        >
          {children}
        </ImageContainer>
      ) : (
        <GradientContainer
          style={stl.main}
          color1={color1}
          color2={color2}
          containerStyle={stl.container}
        >
          {children}
        </GradientContainer>
      )}
    </Container>
  );
};
