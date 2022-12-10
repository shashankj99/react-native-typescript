import React, { FC, ReactElement, ReactNode, useContext } from 'react';
import {
    ParamListBase,
    StackNavigationState,
    TypedNavigator,
  } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationEventMap,
    NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';
import Home from '../screens/Home';
import { AuthResponse } from '../interfaces/auth/AuthResponse';
import { AuthContext } from '../context/auth';

const Stack: TypedNavigator<
    ParamListBase,
    StackNavigationState<ParamListBase>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap,
    ({
        id,
        initialRouteName,
        children,
        screenListeners,
        screenOptions,
        ...rest
    }: any) => JSX.Element> = createNativeStackNavigator<ParamListBase>();

const Navigation: FC<ReactNode | {}> = ({}): ReactElement => {
    const data: AuthResponse = useContext<AuthResponse>(AuthContext);
    const authenticated: boolean = data && data.token !== '' && data.user !== null;

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}
        >
            {
                authenticated ? (
                    <Stack.Screen name='Home' component={Home} />
                ) : (
                    <>
                        <Stack.Screen name='Signup' component={Signup} />
                        <Stack.Screen name='Signin' component={Signin} />
                    </>
                )
            }
        </Stack.Navigator>
    );
}

export default Navigation;
