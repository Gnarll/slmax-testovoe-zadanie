import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import uuid from 'react-native-uuid';
import {useAppDispatch, useAppSelector} from '../../store';
import {
  addCommentAnswer,
  ICommentAnswer,
} from '../../store/commentAnswerReducer';
import {ThemeTextInput} from '../ThemeComponents/ThemeTextInput';

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
  const theme = useAppSelector(state => state.theme);

  return isAnswerButtonPressed ? (
    <View style={styles.addCommentFormWrapper}>
      <ThemeTextInput
        placeholder="Ответить на комментарий"
        value={title}
        onChangeText={setTitle}
        maxLength={25}
      />
      <ThemeTextInput
        placeholder="Напишите комментарий"
        value={commentText}
        onChangeText={setCommentText}
      />
      <TouchableOpacity
        onPress={createCommentAnswer}
        style={styles.addCommentButton}
        hitSlop={styles.hitSlop}>
        <Svg width="5" height="10" viewBox="0 0 5 10" fill="none">
          <Path
            d="M0.73999 8.84525L4.25999 5.01629L0.73999 1.18733"
            stroke="black"
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill={theme.isDarkMode ? 'white' : 'black'}
          />
        </Svg>
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
