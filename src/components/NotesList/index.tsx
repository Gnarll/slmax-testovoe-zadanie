import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useAppSelector} from '../../store';
import {INote} from '../../store/noteReducer';
import {NoteItem} from './NoteItem';

export const NotesList = () => {
  const notes = useAppSelector(state => state.note);

  const renderItem = useCallback(({item}: {item: INote}) => {
    return <NoteItem {...item} />;
  }, []);

  const keyExtractor = useCallback((item: INote) => item.id, []);

  return (
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
