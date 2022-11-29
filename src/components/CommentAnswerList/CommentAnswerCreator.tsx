import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import uuid from 'react-native-uuid';
import {useAppDispatch} from '../../store';
import {
  addCommentAnswer,
  ICommentAnswer,
} from '../../store/commentAnswerReducer';

interface ICommentCreator {
  item: ICommentAnswer;
  isAnswerButtonPressed: boolean;
  setIsAnswerButtonPressed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CommentAnswerCreator = ({
  item,
  isAnswerButtonPressed,
  setIsAnswerButtonPressed,
}: ICommentCreator) => {
  const [title, setTitle] = useState('');
  const [commentText, setCommentText] = useState('');

  const dispatch = useAppDispatch();

  const createCommentAnswer = () => {
    const commentAnswer = {
      id: uuid.v4(),
      parentId: item.id,
      title: title,
      commentText,
      date: new Date().toString(),
    } as ICommentAnswer;
    dispatch(addCommentAnswer(commentAnswer));
    setTitle('');
    setCommentText('');
    setIsAnswerButtonPressed(state => !state);
  };

  return isAnswerButtonPressed ? (
    <View style={styles.addCommentFormWrapper}>
      <TextInput
        placeholder="Ответить на комментарий"
        value={title}
        onChangeText={setTitle}
        maxLength={25}
      />
      <TextInput
        placeholder="Напишите комментарий"
        value={commentText}
        onChangeText={setCommentText}
      />
      <TouchableOpacity
        onPress={createCommentAnswer}
        style={styles.addCommentButton}
        hitSlop={styles.hitSlop}>
        <Image source={require('../../assets/AddNoteIcon.png')} />
      </TouchableOpacity>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
  },
  addCommentTextWrapper: {
    paddingLeft: 11,
    marginBottom: 10,
  },
  addCommentFormWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 74,
    borderWidth: 1,
    marginBottom: 10,
  },
  addCommentButton: {
    position: 'absolute',
    top: 53,
    right: 21,
  },
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
});
