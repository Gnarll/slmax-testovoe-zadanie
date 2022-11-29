import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import SwitchWithIcons from 'react-native-switch-with-icons';
import {useAppDispatch, useAppSelector} from '../store';
import {toggleTheme} from '../store/themeReducer';
import {NotesList} from './NotesList';
import {NoteCreator} from './NotesList/NoteCreator';

const SunImage = require('../assets/SunImage.png');
const MoonImage = require('../assets/MoonImage.png');

export const MainContent = () => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  const dispatch = useAppDispatch();
  const changeTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <View style={styles.wrapper}>
      <SwitchWithIcons
        thumbColor={{true: 'white', false: 'white'}}
        trackColor={{true: '#7363D1', false: '#10637D'}}
        iconColor={{true: '#7363D1', false: '#10637D'}}
        icon={{
          true: MoonImage,
          false: SunImage,
        }}
        style={styles.switch}
        value={isDarkMode}
        onValueChange={changeTheme}
      />
      <NotesList />
      <NoteCreator />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 40,
    paddingHorizontal: 30,
  },
  switch: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  moonSvg: {position: 'absolute', right: 5, bottom: 7},
  sunSvg: {position: 'absolute', left: 0},
});
