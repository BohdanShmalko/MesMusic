import React, { FC, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Button, Input, Item } from "native-base";
import { Formik } from "formik";
import { SimpleUserInfType } from "../../DAL/apiTypes";
import vocabulary from "../../vocabulary/vocabulary";
import { useSelector } from "react-redux";
import { getLanguage } from "../../BLL/selectors/settingsSelector";

type PropType = {
  signUp: (
    data: SimpleUserInfType,
    setUser: React.Dispatch<React.SetStateAction<string>>
  ) => Promise<void>;
};

type ErrorType = {
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
  nickname?: string;
};

const initialData: SimpleUserInfType = {
  name: "",
  lastName: "",
  nickname: "",
  email: "",
  password: "",
  repeatPassword: "",
};

interface Styles {
  mainContainer: ViewStyle;
  item: ViewStyle;
  input: ViewStyle;
  error: TextStyle;
  networkError: TextStyle;
  button: ViewStyle;
  text: TextStyle;
}

const stl = StyleSheet.create<Styles>({
  mainContainer: { alignItems: "center" },
  item: { width: "70%", marginBottom: 20 },
  input: { fontSize: 20, color: "white" },
  error: { color: "red" },
  networkError: { color: "red", textAlign: "center" },
  button: { backgroundColor: "#d98c27" },
  text: {
    padding: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
  },
});

//TODO norm validate
export const RegistrationForm: FC<PropType> = ({ signUp }) => {
  const [networkError, setNetworkError] = useState<string>("");
  const language = useSelector(getLanguage);
  return (
    <ScrollView>
      <Formik
        initialValues={initialData}
        onSubmit={(values) => {
          signUp(values, setNetworkError);
        }}
        validate={(values) => {
          const errors: ErrorType = {};
          if (!values.name)
            errors.name = vocabulary["error enter name"][language];
          if (!values.lastName)
            errors.lastName = vocabulary["error enter lastname"][language];
          if (!values.nickname)
            errors.nickname = vocabulary["error enter nick"][language];
          if (!values.email)
            errors.email = vocabulary["error enter email"][language];
          if (!values.password)
            errors.password = vocabulary["error enter password"][language];
          if (!values.repeatPassword)
            errors.repeatPassword = vocabulary["repeat password"][language];
          if (
            values.password !== values.repeatPassword &&
            values.password &&
            values.repeatPassword
          )
            errors.repeatPassword =
              vocabulary["error repeat password"][language];

          return errors;
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={stl.mainContainer}>
            <Item style={stl.item}>
              <Input
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                placeholder={vocabulary["name"][language]}
                style={{ fontSize: 20, color: "white" }}
              />
            </Item>
            {errors.name && <Text style={stl.error}>{errors.name}</Text>}
            <Item style={stl.item}>
              <Input
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                placeholder={vocabulary["lastname"][language]}
                style={stl.input}
              />
            </Item>
            {errors.lastName && (
              <Text style={stl.error}>{errors.lastName}</Text>
            )}
            <Item style={stl.item}>
              <Input
                onChangeText={handleChange("nickname")}
                onBlur={handleBlur("nickname")}
                value={values.nickname}
                placeholder={vocabulary["nickname"][language]}
                style={stl.input}
              />
            </Item>
            {errors.email && <Text style={stl.error}>{errors.nickname}</Text>}
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
            <Item style={stl.item}>
              <Input
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder={vocabulary["password"][language]}
                style={stl.input}
                autoCompleteType="password"
                secureTextEntry
              />
            </Item>
            {errors.password && (
              <Text style={stl.error}>{errors.password}</Text>
            )}
            <Item style={stl.item}>
              <Input
                onChangeText={handleChange("repeatPassword")}
                onBlur={handleBlur("repeatPassword")}
                value={values.repeatPassword}
                placeholder={vocabulary["repeat password"][language]}
                style={stl.input}
                secureTextEntry
              />
            </Item>
            {errors.repeatPassword && (
              <Text style={stl.error}>{errors.repeatPassword}</Text>
            )}
            {!!networkError && (
              <Text style={stl.networkError}>{networkError}</Text>
            )}
            <Text>
              <Button onPress={handleSubmit} style={stl.button}>
                <Text style={stl.text}>
                  {vocabulary["create account"][language]}
                </Text>
              </Button>
            </Text>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
