import { Icon, Input } from '@rneui/themed';
import React, { FC, ReactElement } from 'react';
import { AutoCapitalize, AutoComplete, KeyboardType, UserSignupInput } from '../../interfaces/auth/UserSignupInput';

const UserInput: FC<UserSignupInput> = ({
    placeholder,
    leftIcon,
    value,
    rightIcon,
    setValue,
    autoCapitalize=AutoCapitalize.none,
    autoComplete=AutoComplete.off,
    keyboardType=KeyboardType.default,
    secureTextEntry=false,
}): ReactElement => {
    return (
        <>
            <Input
                placeholder={placeholder}
                leftIcon={
                    <Icon
                        name={leftIcon}
                    />
                }
                value={value}
                renderErrorMessage={true}
                containerStyle={{ width: '90%' }}
                onChangeText={(text) => setValue(text)}
                autoCapitalize={autoCapitalize}
                autoCorrect={false}
                autoComplete={autoComplete}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                rightIcon={rightIcon}
                inputContainerStyle={{
                    borderWidth: 1,
                    borderRadius: 4,
                    paddingHorizontal: 4,
                }}
            />
        </>
    );
};

export default UserInput;
