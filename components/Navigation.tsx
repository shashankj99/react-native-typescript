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
import { AuthContextType } from '../interfaces/auth/AuthResponse';
import { AuthContext } from '../context/auth';
import HeaderTabs from './HeaderTabs';

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
    const data: AuthContextType = useContext<AuthContextType>(AuthContext);
    const authenticated: boolean = data
        && data?.authResponse?.token !== ''
        && data?.authResponse?.user !== null;

    return (
        <Stack.Navigator
            initialRouteName='Home'
        >
            {
                authenticated ? (
                    <Stack.Screen
                        name='Home'
                        component={Home}
                        options={{
                            title: 'Links Daily',
                            headerRight: () => <HeaderTabs />
                        }}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name='Signin'
                            component={Signin}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name='Signup'
                            component={Signup}
                            options={{ headerShown: false }}
                        />
                    </>
                )
            }
        </Stack.Navigator>
    );
}

export default Navigation;
