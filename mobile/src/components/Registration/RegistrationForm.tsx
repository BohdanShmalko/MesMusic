import React, {FC, useState} from "react";
import {ScrollView, Text, View} from "react-native";
import {Button, Input, Item} from "native-base";
import {Formik} from "formik";
import {SimpleUserInfType} from "../../DAL/apiTypes";

type PropType = {
    signUp: (data: SimpleUserInfType, setUser: React.Dispatch<React.SetStateAction<string>>) => Promise<void>
}

type ErrorType = {
    name?: string
    lastName?: string
    email?: string
    password?: string
    repeatPassword?: string
    nickname?: string
}

const initialData: SimpleUserInfType = {
    name: '',
    lastName: '',
    nickname: '',
    email: '',
    password: '',
    repeatPassword: ''
}

//TODO norm validate
export const RegistrationForm: FC<PropType> = ({signUp}) => {
    const [networkError, setNetworkError] = useState<string>("")
    return <ScrollView>
        <Formik
            initialValues={initialData}
            onSubmit={values => {
                signUp(values, setNetworkError)
            }}
            validate={values => {

                const errors: ErrorType = {};
                if (!values.name) errors.name = 'Enter some login'
                if (!values.lastName) errors.lastName = 'Enter some last name'
                if (!values.nickname) errors.nickname = 'Enter some last name'
                if (!values.email) errors.email = 'Enter some email'
                if (!values.password) errors.password = 'Enter some password'
                if (!values.repeatPassword) errors.repeatPassword = 'Enter some password'
                if (values.password !== values.repeatPassword && values.password && values.repeatPassword)
                    errors.repeatPassword = 'The re-entered password is incorrect'

                return errors
            }}
        >
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                <View style={{alignItems: 'center'}}>
                    <Item style={{width: '70%', marginBottom: 20}}>
                        <Input
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            placeholder='Name'
                            style={{fontSize: 20, color: 'white'}}
                        />
                    </Item>
                    {errors.name && <Text style={{color: 'red'}}>{errors.name}</Text>}
                    <Item style={{width: '70%', marginBottom: 20}}>
                        <Input
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            value={values.lastName}
                            placeholder='Lastname'
                            style={{fontSize: 20, color: 'white'}}
                        />
                    </Item>
                    {errors.lastName && <Text style={{color: 'red'}}>{errors.lastName}</Text>}
                    <Item style={{width: '70%', marginBottom: 20}}>
                        <Input
                            onChangeText={handleChange('nickname')}
                            onBlur={handleBlur('nickname')}
                            value={values.nickname}
                            placeholder='Nickname'
                            style={{fontSize: 20, color: 'white'}}
                        />
                    </Item>
                    {errors.email && <Text style={{color: 'red'}}>{errors.nickname}</Text>}
                    <Item style={{width: '70%', marginBottom: 20}}>
                        <Input
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder='Email'
                            style={{fontSize: 20, color: 'white'}}
                        />
                    </Item>
                    {errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}
                    <Item style={{width: '70%', marginBottom: 20}}>
                        <Input
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder='Password'
                            style={{fontSize: 20, color: 'white'}}
                            autoCompleteType='password'
                            secureTextEntry
                        />
                    </Item>
                    {errors.password && <Text style={{color: 'red'}}>{errors.password}</Text>}
                    <Item style={{width: '70%', marginBottom: 20}}>
                        <Input
                            onChangeText={handleChange('repeatPassword')}
                            onBlur={handleBlur('repeatPassword')}
                            value={values.repeatPassword}
                            placeholder='Repeat password'
                            style={{fontSize: 20, color: 'white'}}
                            secureTextEntry
                        />
                    </Item>
                    {errors.repeatPassword && <Text style={{color: 'red'}}>{errors.repeatPassword}</Text>}
                    {!!networkError && <Text style={{color: 'red', textAlign: 'center'}}>{networkError}</Text>}
                    <Text>
                        <Button onPress={handleSubmit} style={{backgroundColor: '#d98c27'}}>
                            <Text style={{padding: 10, textTransform: 'uppercase', fontWeight: 'bold', color: 'white'}}>
                                Create account
                            </Text>
                        </Button>
                    </Text>
                </View>
            )}
        </Formik>
    </ScrollView>
}