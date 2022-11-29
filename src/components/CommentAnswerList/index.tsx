import React, {useCallback, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useAppSelector} from '../../store';
import {ICommentAnswer} from '../../store/commentAnswerReducer';
import {CommentAnswerItem} from './CommentAnswerItem';

export const CommentAnswerList = ({item}: {item: ICommentAnswer}) => {
  const [isShowAllAnswersPressed, setIsShowAllAnswersPressed] = useState(false);
  const commentAnswers = useAppSelector(state => state.commentAnswer).filter(
    commentAnswer => {
      return commentAnswer.parentId === item.id;
    },
  );

  const toggleShowAllAnswers = () => {
    setIsShowAllAnswersPressed(state => !state);
  };
  const commentAnswersLength = commentAnswers.length;

  const renderItem = useCallback(({item}: {item: ICommentAnswer}) => {
    return <CommentAnswerItem item={item} />;
  }, []);

  const keyExtractor = useCallback((item: ICommentAnswer) => item.id, []);

  return (
    <View>
      <FlatList
        data={
          isShowAllAnswersPressed ? commentAnswers : commentAnswers.slice(0, 1)
        }
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <TouchableOpacity
        disabled={commentAnswersLength === 1}
        onPress={toggleShowAllAnswers}
        style={{marginLeft: 15, marginBottom: 5}}>
        {commentAnswersLength === 0 ? null : isShowAllAnswersPressed ? (
          <Text>- Скрыть дополнительные ответы</Text>
        ) : (
          <Text>- Показать все ответы</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
