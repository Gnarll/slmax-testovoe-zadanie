import React from 'react';
import {SafeAreaView} from 'react-native';
import {useAppSelector} from '../../store';

export const AppWrapper = ({children}: {children: React.ReactNode[]}) => {
  const theme = useAppSelector(state => state.theme);
  return (
    <SafeAreaView
      style={[
        {flex: 1},
        theme.isDarkMode
          ? {backgroundColor: 'black'}
          : {backgroundColor: 'white'},
      ]}>
      {children}
    </SafeAreaView>
  );
};
