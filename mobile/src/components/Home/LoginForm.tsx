import React, {FC} from "react";
import {Text, TextInput, View} from "react-native";
import {Button, CheckBox, Container} from "native-base";
import { Formik } from "formik";

type PropType = {}

export const LoginForm : FC<PropType> = (props) => {
    const stringToBool : (str : string) => boolean = (string) => string === 'true' ? true : false
//TODO rememberMe
    return <Formik
        initialValues={{ login: '', password : '', rememberMe : false }}
        onSubmit={values => console.log(values)}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{alignItems : 'center'}}>
                <TextInput
                    onChangeText={handleChange('login')}
                    onBlur={handleBlur('login')}
                    value={values.login}
                    placeholder = 'Login'
                    style={{borderStyle : 'solid',borderBottomWidth : 2,borderBottomColor : '#c9c9c9',fontSize : 20, marginBottom : 20, width : '40%', marginTop: 20}}
                />
                <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder = 'Password'
                    style={{borderStyle : 'solid',borderBottomWidth : 2,borderBottomColor : '#c9c9c9',fontSize : 20, marginBottom : 20, width : '40%'}}
                />
                <View style={{flexDirection : 'row'}}>
                    <Text>Remember me </Text>
                    <CheckBox checked={values.rememberMe} onPress={() => handleChange('rememberMe')} style={{marginBottom : 20}}/>
                </View>
                <Button onPress={handleSubmit} style={{marginLeft : '40%', backgroundColor : '#d98c27'}}>
                    <Text style={{padding : 10, textTransform : 'uppercase', fontWeight : 'bold', color : 'white'}}>
                        Submit
                    </Text>
                </Button>
            </View>
        )}
    </Formik>
}