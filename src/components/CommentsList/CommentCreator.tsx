import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import uuid from 'react-native-uuid';
import {useAppDispatch, useAppSelector} from '../../store';
import {addComment, IComment} from '../../store/commentReducer';
import {INote} from '../../store/noteReducer';
import {ThemeText} from '../ThemeComponents/ThemeText';
import {ThemeTextInput} from '../ThemeComponents/ThemeTextInput';

interface ICommentCreator {
  item: INote;
}

export const CommentCreator = ({item}: ICommentCreator) => {
  const [isAddCommentPressed, setIsCommentPressed] = useState(false);

  const toggleIsAddCommentPressed = () => {
    setIsCommentPressed(state => !state);
  };

  const [title, setTitle] = useState('');
  const [commentText, setCommentText] = useState('');

  const dispatch = useAppDispatch();

  const createComment = () => {
    const comment = {
      id: uuid.v4(),
      parentId: item.id,
      title: title,
      commentText: commentText,
      date: new Date().toString(),
    } as IComment;
    dispatch(addComment(comment));
    setTitle('');
    setCommentText('');
    setIsCommentPressed(state => !state);
  };

  const theme = useAppSelector(state => state.theme);

  return !isAddCommentPressed ? (
    <TouchableOpacity
      style={styles.addCommentTextWrapper}
      onPress={toggleIsAddCommentPressed}>
      <ThemeText style={styles.text}>Оставить комментарий</ThemeText>
    </TouchableOpacity>
  ) : (
    <View style={styles.addCommentFormWrapper}>
      <ThemeTextInput
        placeholder="Название комментария"
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
        onPress={createComment}
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
  );
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
