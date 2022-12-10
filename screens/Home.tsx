import { Text } from '@rneui/themed';
import React, { FC, ReactNode, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterTabs from '../components/FooterTabs';
import { AuthContext } from '../context/auth';
import { AuthResponse } from '../interfaces/auth/AuthResponse';

const Home: FC<ReactNode> = () => {
    const data = useContext<AuthResponse>(AuthContext);
    return (
        <SafeAreaView style={styles.homePageLayout}>
            <Text>
                {JSON.stringify(data, null, 4)}
            </Text>
            <FooterTabs />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    homePageLayout: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

export default Home;
