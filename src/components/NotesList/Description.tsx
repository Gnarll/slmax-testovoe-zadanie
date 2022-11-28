import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {INote} from '../../store/noteReducer';

export const Description = ({note}: {note: INote}) => {
  const getShortDate = (date: string): string => {
    const parsedDate = new Date(date);
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1;
    const day = parsedDate.getDate();

    return [day, month, year].join('.');
  };

  return (
    <View style={styles.description}>
      <Text style={styles.date}>{getShortDate(note.date)}</Text>
      <Text>{note.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    minHeight: 80,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  date: {
    position: 'absolute',
    right: 20,
  },
});
