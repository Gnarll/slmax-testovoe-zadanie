import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NotesList} from './NotesList';
import {NoteCreator} from './NotesList/NoteCreator';

export const MainContent = () => {
  return (
    <View style={styles.wrapper}>
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
});
