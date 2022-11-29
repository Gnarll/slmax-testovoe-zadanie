import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {INote} from '../../store/noteReducer';
import {getShortDate} from '../../utils';

export const Description = ({note}: {note: INote}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.description}>
        <Text style={styles.date}>{getShortDate(note.date)}</Text>
        <Text>{note.description}</Text>
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
  },
});
