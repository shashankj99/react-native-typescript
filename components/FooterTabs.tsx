import { Icon, Text } from '@rneui/themed';
import React, { FC, ReactElement, ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type NavIconType = {
    icon: string,
    label: string,
};

const NavIcon: FC<NavIconType> = ({ icon, label }): ReactElement => {
    return (
        <TouchableOpacity>
            <Icon  name={icon} />
            <Text>{label}</Text>
        </TouchableOpacity>
    );
}

const FooterTabs: FC<ReactNode | {}> = ({}): ReactElement => {
    return (
        <View style={ styles.nav }>
            <>
                <NavIcon icon='home' label='Home' />
                <NavIcon icon='post-add' label='Posts' />
                <NavIcon icon='link' label='Links' />
                <NavIcon icon='person' label='Account' />
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        margin: 20,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default FooterTabs;
