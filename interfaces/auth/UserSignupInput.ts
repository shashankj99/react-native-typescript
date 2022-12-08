import { IconNode } from "@rneui/base";
import { Dispatch, SetStateAction } from "react";

export enum AutoCapitalize {
    characters = 'characters',
    words = 'words',
    sentences = 'sentences',
    none = 'none',
};

export enum AutoComplete {
    name = 'name',
    email = 'email',
    password = 'password',
    off = 'off',
};

export enum KeyboardType {
    default = 'default',
    numberPad = 'number-pad',
    emailAddress = 'email-address',
    phonePad = 'phone-pad',
};

export interface UserSignupInput {
    placeholder: string,
    leftIcon: string,
    rightIcon?: IconNode,
    value?: string,
    autoCapitalize?: AutoCapitalize,
    autoComplete?: AutoComplete,
    keyboardType?: KeyboardType,
    secureTextEntry?: boolean,
    setValue: Dispatch<SetStateAction<string>>,
};
