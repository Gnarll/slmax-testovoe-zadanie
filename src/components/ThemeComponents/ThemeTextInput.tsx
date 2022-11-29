import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {useAppSelector} from '../../store';

export const ThemeTextInput = (props: TextInputProps) => {
  const theme = useAppSelector(state => state.theme);
  const {style, ...other} = props;
  return (
    <TextInput
      style={{
        color: theme.isDarkMode ? 'white' : 'black',
        ...(typeof style === 'object' && style),
      }}
      placeholderTextColor={theme.isDarkMode ? 'white' : 'black'}
      {...other}></TextInput>
  );
};
