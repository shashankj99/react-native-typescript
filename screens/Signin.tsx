import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Button, Icon, Image, Text } from '@rneui/themed';
import axios from 'axios';
import React, { FC, ReactElement, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import UserInput from '../components/auth/UserInput';
import { BASE_URL } from '../config';
import { AutoCapitalize, AutoComplete, KeyboardType } from '../interfaces/auth/UserSignupInput';

const Signin: FC<{navigation: NavigationProp<ParamListBase>}> = ({
    navigation,
}): ReactElement => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [secureTextEntry, setSecuredTextEntry] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (): Promise<void|undefined> => {
        setLoading(true);

        if (!email || !password) {
            alert('All fields are required');
            setLoading(false);
            return;
        }

        try {
            const { data } = await axios.post('/signin', {
                email,
                password,
            });

            setLoading(false);

            if (data.error) {
                alert(data.error);
            } else {
                await AsyncStorage.setItem('@auth', JSON.stringify(data));
                alert('signin successful');
                navigation.navigate('Home');
            }

        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.page}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
                <Text h1 style={{ marginBottom: 40 }}>Links Daily</Text>
                <UserInput
                    placeholder='E-mail Address'
                    leftIcon='email'
                    value={email}
                    setValue={setEmail}
                    autoComplete={AutoComplete.email}
                    autoCapitalize={AutoCapitalize.none}
                    keyboardType={KeyboardType.emailAddress}
                />
                <UserInput
                    placeholder='password'
                    leftIcon='lock'
                    value={password}
                    setValue={setPassword}
                    autoComplete={AutoComplete.password}
                    autoCapitalize={AutoCapitalize.none}
                    secureTextEntry={secureTextEntry}
                    rightIcon={
                        showPassword ?
                            <Icon
                                name='visibility'
                                onPress={() => {
                                    setSecuredTextEntry(true)
                                    setShowPassword(false)
                                }}
                            />
                        : <Icon
                                name='visibility-off'
                                onPress={() => {
                                    setSecuredTextEntry(false)
                                    setShowPassword(true)
                                }}
                            />
                    }
                />
                <Button
                    title={ loading ? 'Please Wait...' : 'Sign In' }
                    type='solid'
                    buttonStyle={styles.buttonLayout}
                    containerStyle={styles.buttonContainer}
                    raised
                    disabled={ !loading ? false : true }
                    onPress={handleSubmit}
                />
                <Text style={styles.signinLayoutContainer}>
                    Don't have an account?
                    <Text
                        style={styles.signinLayout}
                        onPress={() => navigation.navigate("Signup")}
                    >
                        &nbsp;Sign Up
                    </Text>
                </Text>
            </View>
            <View style={{ marginVertical: 20, alignSelf: 'center' }}>
                <Text style={{ fontSize: 16 }}>
                    Forgot Password?
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Click here!</Text>
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    page: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '90%',
        borderRadius: 10,
        marginTop: 10,
    },
    buttonLayout: {
        borderColor: '#000',
        backgroundColor: '#000',
        height: 50,
        borderRadius: 10,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 15
    },
    signinLayoutContainer: {
        marginVertical: 20,
        fontSize: 18,
    },
    signinLayout: {
        fontWeight: 'bold',
        fontSize: 22,
    }
});

export default Signin;
