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
import { AuthResponse } from '../interfaces/auth/AuthResponse';

type Props = {
    children: ReactNode,
}

const defaultStateValue: AuthResponse = { user: null, token: '' };
const AuthContext = createContext<AuthResponse | null>(defaultStateValue);

const AuthProvider: FC<Props> = ({ children }): ReactElement => {
    const [state, setState] = useState<AuthResponse>(defaultStateValue);

    // set default base url to auth context so that we don't need to
    // use it every time in the screens
    axios.defaults.baseURL = BASE_URL;

    useEffect(() => {
        const loadFromAsyncStorage = async(): Promise<void> => {
            let data: string = await AsyncStorage.getItem('@auth');
            const parsedData = JSON.parse(data);
            setState({ ...state, user: parsedData.user, token: parsedData.token });
        }
        loadFromAsyncStorage();
    }, []);

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
