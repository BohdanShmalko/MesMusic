import React, {FC, useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import store from "./src/BLL/storeRedux";
import {withSuspense} from "./src/HOC/withSuspense";
import {navigationType, RootStackParamList} from "./src/types/types";
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Text, View} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authAPI} from "./src/DAL/API";
import {AuthType, SimpleUserInfType} from "./src/DAL/apiTypes";


const HomeScreen = React.lazy(() => import('./src/screens/Home'))
const ForgetPasswordScreen = React.lazy(() => import('./src/screens/ForgetPassword'))
const DialogsScreen = React.lazy(() => import('./src/screens/Dialogs'))
const MusicScreen = React.lazy(() => import('./src/screens/Music'))
const NewsScreen = React.lazy(() => import('./src/screens/News'))
const ProfileScreen = React.lazy(() => import('./src/screens/Profile'))
const RegistrationScreen = React.lazy(() => import('./src/screens/Registration'))
const SettingsScreen = React.lazy(() => import('./src/screens/Settings'))
const TrainingScreen = React.lazy(() => import('./src/screens/Trainings'))
const UsersScreen = React.lazy(() => import('./src/screens/Users'))
const LikesScreen = React.lazy(() => import('./src/screens/Likes'))
const MessageScreen = React.lazy(() => import('./src/screens/Message'))
const CommentsScreen = React.lazy(() => import('./src/screens/Comments'))
const TestScreen = React.lazy(() => import('./src/screens/TestScreen'))

const Stack = createStackNavigator<RootStackParamList>()

export const AuthContext = React.createContext({
    signIn: async (authData : AuthType, setError : React.Dispatch<React.SetStateAction<string>>) => {},
    signOut: async () => {},
    signUp: async (data: SimpleUserInfType, setError : React.Dispatch<React.SetStateAction<string>>) => {}
});

const App: FC<{ navigation: navigationType }> = ({navigation}) => {
    const [isReady, setIsReady] = useState<boolean>(false)

    const [state, dispatch] = React.useReducer(
        (prevState: any, action: any) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null
        }
    );

    useEffect(() => {
        (async () => {
            // load font
            await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
            })
            setIsReady(true)

            // check token
            let userToken;
            try {
                //await AsyncStorage.setItem('token', '');
                userToken = await AsyncStorage.getItem('token');
            } catch (e) {
                console.log(e)
            }
            dispatch({type: 'RESTORE_TOKEN', token: userToken});

        })()
    }, [])

    const authContext = React.useMemo(
        () => ({
            signIn: async (authData : AuthType, setError: React.Dispatch<React.SetStateAction<string>>) => {
                const res = await authAPI.login(authData, setError)
                if(res) {
                    await AsyncStorage.setItem('token', res.token)
                    dispatch({type: 'SIGN_IN', token: res.token});
                }
            },
            signOut: async () => {
                const res = await authAPI.logout()
                if (res){
                    await AsyncStorage.setItem('token', '')
                    dispatch({type: 'SIGN_OUT'})
                }
            },
            signUp: async (data: SimpleUserInfType, setError: React.Dispatch<React.SetStateAction<string>>) => {
                const res = await authAPI.createUser(data, setError)
                if(res){
                    await AsyncStorage.setItem('token', res.token)
                    dispatch({type: 'SIGN_IN', token : res.token});
                }
            },
        }),
        []
    );

    if (!isReady) return <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
    </View>


    return <NavigationContainer>
        <Provider store={store}>
            <AuthContext.Provider value={authContext}>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    {!state.userToken ? <>
                        <Stack.Screen name='Home' component={withSuspense(HomeScreen)}/>
                        <Stack.Screen name='Test' component={withSuspense(TestScreen)}/>
                        <Stack.Screen name='ForgetPassword' component={withSuspense(ForgetPasswordScreen)}/>
                        <Stack.Screen name='Registration' component={withSuspense(RegistrationScreen)}/>
                    </> : <>
                        <Stack.Screen name='News' component={withSuspense(NewsScreen)}/>
                        <Stack.Screen name='Dialogs' component={withSuspense(DialogsScreen)}/>
                        <Stack.Screen name='Music' component={withSuspense(MusicScreen)}/>
                        <Stack.Screen name='Profile' component={withSuspense(ProfileScreen)}/>
                        <Stack.Screen name='Settings' component={withSuspense(SettingsScreen)}/>
                        <Stack.Screen name='Training' component={withSuspense(TrainingScreen)}/>
                        <Stack.Screen name='Users' component={withSuspense(UsersScreen)}/>
                        <Stack.Screen name='Likes' component={withSuspense(LikesScreen)}/>
                        <Stack.Screen name='Message' component={withSuspense(MessageScreen)}/>
                        <Stack.Screen name='Comments' component={withSuspense(CommentsScreen)}/>
                    </>}
                </Stack.Navigator>
            </AuthContext.Provider>
        </Provider>
    </NavigationContainer>
}

export default App