import React, {FC, useState} from "react";
import {Text, View} from "react-native";
import {Button, Input, Item} from "native-base";
import {Formik} from "formik";
import {BlueLink} from "../Common/BlueLink";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import {AuthType} from "../../DAL/apiTypes";
import vocabulary from "../../vocabulary/vocabulary";
import {useSelector} from "react-redux";
import {getLanguage} from "../../BLL/selectors/settingsSelector";

type PropType = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>
    singIn: (data: AuthType, setError: React.Dispatch<React.SetStateAction<string>>) => Promise<void>
}
type ErrorType = {
    email?: string
    password?: string
}
//TODO norm validate
export const LoginForm: FC<PropType> = ({navigation, singIn}) => {
    const [networkError, setNetworkError] = useState<string>("")
    const language = useSelector(getLanguage)
    return <View><Formik
        initialValues={{email: '', password: ''}}
        onSubmit={async values => {
            await singIn(values, setNetworkError)
        }}
        validate={values => {

            const errors: ErrorType = {};
            if (!values.email) errors.email = vocabulary["error enter email"][language]
            if (!values.password) errors.password = vocabulary["error enter password"][language]

            return errors
        }}
    >
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={{alignItems: 'center'}}>
                <Item style={{width: '70%'}}>
                    <Input
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder={vocabulary["email"][language]}
                        style={{fontSize: 20, color: 'white'}}
                    />
                </Item>
                {errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}
                <Item style={{width: '70%', marginBottom: 20}}>
                    <Input
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder={vocabulary["password"][language]}
                        style={{fontSize: 20, color: 'white'}}
                        secureTextEntry
                    />
                </Item>
                {errors.password && <Text style={{color: 'red'}}>{errors.password}</Text>}
                {/*<View style={{flexDirection : 'row'}}>*/}
                {/*    <Text style={{color : 'white'}}>Remember me </Text>*/}
                {/*    <CheckBox checked={values.rememberMe} onPress={() => setFieldValue('rememberMe', !values.rememberMe)} style={{marginBottom : 20}}/>*/}
                {/*</View>*/}
                {!!networkError && <Text style={{color: 'red', textAlign: 'center'}}>{networkError}</Text>}
                <Text>
                    <Button onPress={handleSubmit} style={{backgroundColor: '#d98c27', borderRadius : 10}}>
                        <Text style={{padding: 10, textTransform: 'uppercase', fontWeight: 'bold', color: 'white'}}>
                            {vocabulary["submit"][language]}
                        </Text>
                    </Button>
                </Text>
            </View>
        )}
    </Formik>
        <BlueLink to='ForgetPassword' title={vocabulary["forget password"][language]} navigation={navigation}/>
        <BlueLink to='Registration' title={vocabulary["registration"][language]} navigation={navigation}/>
        {/*<BlueLink to='News' title='Test to News' navigation={navigation}/>*/}
        {/*<BlueLink to='Test' title='Labs screen' navigation={navigation}/>*/}
    </View>
}