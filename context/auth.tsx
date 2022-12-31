import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {
    useState,
    useEffect,
    createContext,
    ReactElement,
    FC,
    ReactNode,
} from 'react';
import { BASE_URL } from '../config';
import { AuthContextType } from '../interfaces/auth/AuthResponse';

type Props = {
    children: ReactNode,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: FC<Props> = ({ children }): ReactElement => {
    const [authResponse, setAuthResponse] = useState<AuthContextType>();

    // set default base url to auth context so that we don't need to
    // use it every time in the screens
    axios.defaults.baseURL = BASE_URL;

    useEffect(() => {
        const loadFromAsyncStorage = async(): Promise<void> => {
            let data: string = await AsyncStorage.getItem('@auth');
            const parsedData = JSON.parse(data);
            setAuthResponse({
                ...authResponse,
                authResponse: {
                    user: parsedData.user,
                    token: parsedData.token,
                }
            });
        }
        loadFromAsyncStorage();
    }, []);

    return (
        <AuthContext.Provider value={{ authResponse, setAuthResponse } as AuthContextType}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
