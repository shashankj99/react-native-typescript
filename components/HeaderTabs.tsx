import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from '@rneui/themed';
import React, { FC, ReactElement, ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';

const HeaderTabs: FC<ReactNode | {}> = ({}): ReactElement => {
    const signOut = async (): Promise<void> => {
        await AsyncStorage.removeItem('@auth');
    }

    return (
        <View>
            <TouchableOpacity onPress={signOut}>
                <Icon  name='logout' />
            </TouchableOpacity>
        </View>
    );
}

export default HeaderTabs;
