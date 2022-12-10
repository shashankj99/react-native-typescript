import { Text } from '@rneui/themed';
import React, { FC, ReactNode, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/auth';
import { AuthResponse } from '../interfaces/auth/AuthResponse';

const Home: FC<ReactNode> = () => {
    const data = useContext<AuthResponse>(AuthContext);
    return (
        <SafeAreaView>
            <Text>
                {JSON.stringify(data, null, 4)}
            </Text>
        </SafeAreaView>
    );
}

export default Home;
