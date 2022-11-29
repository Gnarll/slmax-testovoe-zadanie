import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {useAppSelector} from '../../store';
import {IComment} from '../../store/commentReducer';
import {INote} from '../../store/noteReducer';
import {CommentCreator} from './CommentCreator';
import {CommentItem} from './CommentItem';

export const CommentsList = ({note}: {note: INote}) => {
  const comments = useAppSelector(state => state.comment).filter(comment => {
    return comment.parentId === note.id;
  });

  const renderItem = useCallback(({item}: {item: IComment}) => {
    return <CommentItem item={item} />;
  }, []);

  const keyExtractor = useCallback((item: IComment) => item.id, []);

  return (
    <View>
      <CommentCreator item={note} />
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
