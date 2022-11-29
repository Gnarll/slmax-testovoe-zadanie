import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import uuid from 'react-native-uuid';
import {useAppDispatch} from '../../store';
import {addComment, IComment} from '../../store/commentReducer';
import {INote} from '../../store/noteReducer';
import {customStyles} from '../../styles';

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

  return !isAddCommentPressed ? (
    <TouchableOpacity
      style={styles.addCommentTextWrapper}
      onPress={toggleIsAddCommentPressed}>
      <Text style={[customStyles.defaultTextStyles, styles.text]}>
        Оставить комментарий
      </Text>
    </TouchableOpacity>
  ) : (
    <View style={styles.addCommentFormWrapper}>
      <TextInput
        placeholder="Название комментария"
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
        onPress={createComment}
        style={styles.addCommentButton}
        hitSlop={styles.hitSlop}>
        <Image source={require('../../assets/AddNoteIcon.png')} />
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
