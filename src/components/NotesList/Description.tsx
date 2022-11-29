import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {INote} from '../../store/noteReducer';
import {getShortDate} from '../../utils';
import {ThemeText} from '../ThemeComponents/ThemeText';

export const Description = ({note}: {note: INote}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.description}>
        <ThemeText style={styles.date}>{getShortDate(note.date)}</ThemeText>
        <ThemeText>{note.description}</ThemeText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 20,
  },
  description: {
    minHeight: 80,
    paddingRight: 20,
    paddingVertical: 25,
  },
  date: {
    position: 'absolute',
    right: 20,
    fontSize: 12,
  },
});
