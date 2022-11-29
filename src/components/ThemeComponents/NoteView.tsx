import React from 'react';
import {View, ViewProps} from 'react-native';
import {useAppSelector} from '../../store';

export const NoteView = (props: ViewProps) => {
  const theme = useAppSelector(state => state.theme);
  const {children, style, ...other} = props;
  return (
    <View
      style={{
        backgroundColor: theme.isDarkMode ? '#383434' : 'white',
        ...(typeof style === 'object' && style),
      }}
      {...other}>
      {children}
    </View>
  );
};
