import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useAppSelector} from '../../store';
import {INote} from '../../store/noteReducer';
import {isDateInRange} from '../../utils';
import {NoteItem} from './NoteItem';

export const NotesList = () => {
  const notes = useAppSelector(state => state.note);
  const range = useAppSelector(state => state.datePicker);

  const renderItem = useCallback(
    ({item}: {item: INote}) => {
      const itemDate = new Date(item.date);

      let shouldShowNote = isDateInRange(
        itemDate,
        range.startDate,
        range.endDate,
      );
      return shouldShowNote ? <NoteItem {...item} /> : null;
    },
    [range],
  );

  const keyExtractor = useCallback((item: INote) => item.id, []);

  return (
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
