import React, {FC, useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import store from "./src/BLL/storeRedux";
import {withSuspense} from "./src/HOC/withSuspense";
import {navigationType, RootStackParamList} from "./src/types/types";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Text, View} from "react-native";
import {AppInitialContext, AppInitialState, AppMainContext, AppReduser, LoadApp} from "./src/helpers/loadApp";


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
const MessageScreen = React.lazy(() => import('./src/HOC/MessageContainer'))
const CommentsScreen = React.lazy(() => import('./src/screens/Comments'))

const Stack = createStackNavigator<RootStackParamList>()
export const AuthContext = React.createContext(AppInitialContext);

const App: FC<{ navigation: navigationType }> = ({navigation}) => {
    const [isReady, setIsReady] = useState<boolean>(false)
    const [state, dispatch] = React.useReducer(AppReduser, AppInitialState);

    useEffect(LoadApp(dispatch, setIsReady), [])
    const authContext = React.useMemo(AppMainContext(dispatch), []);

    if (!isReady) return <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
    </View>


    return <NavigationContainer>
        <Provider store={store}>
            <AuthContext.Provider value={authContext}>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    {!state.userToken ? <>
                        <Stack.Screen name='Home' component={withSuspense(HomeScreen)}/>
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