import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';
import {useAppSelector} from '../../store';

export const ThemeText = (props: TextProps) => {
  const theme = useAppSelector(state => state.theme);
  const {children, style, ...other} = props;
  return (
    <Text
      style={{
        ...styles.text,
        color: theme.isDarkMode ? 'white' : 'black',
        borderColor: theme.isDarkMode ? 'white' : 'black',
        ...(typeof style === 'object' && style),
      }}
      {...other}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
  },
});
