import React, { FC, useState } from "react";
import { Text, TextStyle, View, ViewStyle, StyleSheet } from "react-native";
import { Button, Input, Item } from "native-base";
import { Formik } from "formik";
import { BlueLink } from "../Common/BlueLink";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/types";
import { AuthType } from "../../DAL/apiTypes";
import vocabulary from "../../vocabulary/vocabulary";
import { useSelector } from "react-redux";
import { getLanguage } from "../../BLL/selectors/settingsSelector";

type PropType = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
  singIn: (
    data: AuthType,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => Promise<void>;
};
type ErrorType = {
  email?: string;
  password?: string;
};

interface Styles {
  item: ViewStyle;
  container: ViewStyle;
  input: ViewStyle;
  downItem: ViewStyle;
  error: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  networkError: TextStyle;
}

const stl = StyleSheet.create<Styles>({
  item: { width: "70%" },
  container: { alignItems: "center" },
  input: { fontSize: 20, color: "white" },
  downItem: { width: "70%", marginBottom: 20 },
  error: { color: "red" },
  networkError: { color: "red", textAlign: "center" },
  button: { backgroundColor: "#d98c27", borderRadius: 10 },
  buttonText: {
    padding: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
  },
});

//TODO norm validate
export const LoginForm: FC<PropType> = ({ navigation, singIn }) => {
  const [networkError, setNetworkError] = useState<string>("");
  const language = useSelector(getLanguage);
  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          await singIn(values, setNetworkError);
        }}
        validate={(values) => {
          const errors: ErrorType = {};
          if (!values.email)
            errors.email = vocabulary["error enter email"][language];
          if (!values.password)
            errors.password = vocabulary["error enter password"][language];

          return errors;
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={stl.container}>
            <Item style={stl.item}>
              <Input
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder={vocabulary["email"][language]}
                style={stl.input}
              />
            </Item>
            {errors.email && <Text style={stl.error}>{errors.email}</Text>}
            <Item style={stl.downItem}>
              <Input
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder={vocabulary["password"][language]}
                style={stl.input}
                secureTextEntry
              />
            </Item>
            {errors.password && (
              <Text style={stl.error}>{errors.password}</Text>
            )}
            {/*<View style={{flexDirection : 'row'}}>*/}
            {/*    <Text style={{color : 'white'}}>Remember me </Text>*/}
            {/*    <CheckBox checked={values.rememberMe} onPress={() => setFieldValue('rememberMe', !values.rememberMe)} style={{marginBottom : 20}}/>*/}
            {/*</View>*/}
            {!!networkError && (
              <Text style={stl.networkError}>{networkError}</Text>
            )}
            <Text>
              <Button onPress={handleSubmit} style={stl.button}>
                <Text style={stl.buttonText}>
                  {vocabulary["submit"][language]}
                </Text>
              </Button>
            </Text>
          </View>
        )}
      </Formik>
      <BlueLink
        to="ForgetPassword"
        title={vocabulary["forget password"][language]}
        navigation={navigation}
      />
      <BlueLink
        to="Registration"
        title={vocabulary["registration"][language]}
        navigation={navigation}
      />
    </View>
  );
};
