import {
  NavigationContainer,
  ParamListBase,
  StackNavigationState,
  TypedNavigator,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { AuthProvider } from './context/auth';
import Home from './screens/Home';
import Signin from './screens/Signin';
import Signup from './screens/Signup';

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

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator
          initialRouteName='Signin'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='Signin' component={Signin} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
