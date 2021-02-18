import React, {FC} from "react";
import {Text, View} from "react-native";
import {Button, CheckBox, Input, Item} from "native-base";
import {Formik} from "formik";
import {BlueLink} from "../Common/BlueLink";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {actionCreator} from "../../BLL/storeRedux";
import {getIsAuth} from "../../BLL/selectors/authSelector";

type PropType = {
    navigation : StackNavigationProp<RootStackParamList, 'Home'>
}
type ErrorType = {
    login ?: string
    password ?: string
    rememberMe ?: string
}
//TODO norm validate
export const LoginForm : FC<PropType> = ({navigation}) => {
    const dispatch = useDispatch()
    const LogIn = () => dispatch(actionCreator.authScreen.setAuth(true))
    const isAuth = useSelector(getIsAuth)
    return <View><Formik
        initialValues={{ login: '', password : '', rememberMe : false }}
        onSubmit={values => {
            LogIn()
            console.log(isAuth)
            console.log(values)
        }}
        validate={values => {

            const errors : ErrorType = {};
            if (!values.login) errors.login = 'Enter some login'
            if (!values.password) errors.password = 'Enter some password'

            return errors
        }}
    >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors }) => (
            <View style={{alignItems : 'center'}}>
                <Item style = {{width : '70%'}}>
                    <Input
                        onChangeText={handleChange('login')}
                        onBlur={handleBlur('login')}
                        value={values.login}
                        placeholder = 'Login'
                        style = {{fontSize : 20, color : 'white'}}
                    />
                </Item>
                {errors.login && <Text style={{color : 'red'}}>{errors.login}</Text>}
                <Item style = {{width : '70%', marginBottom : 20}}>
                    <Input
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder = 'Password'
                        style = {{fontSize : 20, color : 'white'}}
                        secureTextEntry
                    />
                </Item>
                {errors.password && <Text style={{color : 'red'}}>{errors.password}</Text>}
                <View style={{flexDirection : 'row'}}>
                    <Text style={{color : 'white'}}>Remember me </Text>
                    <CheckBox checked={values.rememberMe} onPress={() => setFieldValue('rememberMe', !values.rememberMe)} style={{marginBottom : 20}}/>
                </View>
                <Text>
                <Button onPress={handleSubmit} style={{backgroundColor: '#d98c27'}}>
                    <Text style={{padding : 10, textTransform : 'uppercase', fontWeight : 'bold', color : 'white'}}>
                        Submit
                    </Text>
                </Button>
                </Text>
            </View>
        )}
    </Formik>
        <BlueLink to = 'ForgetPassword' title='Forget password' navigation={navigation}/>
        <BlueLink to = 'Registration' title='Registration' navigation={navigation}/>
        <BlueLink to = 'News' title='Test to News' navigation={navigation}/>
    </View>
}