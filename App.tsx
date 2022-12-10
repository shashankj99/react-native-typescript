import { NavigationContainer } from '@react-navigation/native';
import { ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './components/Navigation';
import { AuthProvider } from './context/auth';

export default function App(): ReactElement {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
