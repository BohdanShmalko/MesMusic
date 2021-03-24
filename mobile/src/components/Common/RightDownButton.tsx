import React, {FC} from "react";
import {StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import {Button, Icon} from "native-base";
import {useSelector} from "react-redux";
import {getTheme} from "../../BLL/selectors/settingsSelector";

type PropType = {
  iconName: string;
  onPress?: () => void;
};

interface Styles {
  mainContainer: ViewStyle;
  button: ViewStyle;
  icon: TextStyle;
}

export const RightDownButton: FC<PropType> = ({ iconName, onPress }) => {
  const { firstMainColor, firstPrimaryFont } = useSelector(getTheme);

  const stl = StyleSheet.create<Styles>({
    mainContainer: {
      padding: 20,
      justifyContent: "flex-end",
      flexDirection: "row",
    },
    button: {
      backgroundColor: firstMainColor,
      width: 64,
      height: 64,
      justifyContent: "center",
      alignItems: "center",
    },
    icon: { color: firstPrimaryFont, fontSize: 35 },
  });

  return (
    <View style={stl.mainContainer}>
      <Button rounded style={stl.button} onPress={onPress}>
        <Icon name={iconName} style={stl.icon} />
      </Button>
    </View>
  );
};
