import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';
import {addNote, INote} from '../../store/noteReducer';
import {customStyles} from '../../styles';
import {useAppDispatch} from '../../store';

export const NoteCreator = () => {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();

  const createNote = () => {
    const note = {
      id: uuid.v4(),
      title: title,
      date: new Date().toString(),
      description: description,
      shortDescription: description.slice(0, 19),
    } as INote;
    dispatch(addNote(note));
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={[styles.titleInput, customStyles.defaultTextStyles]}
        placeholder="Название"
        placeholderTextColor={'#000000'}
        maxLength={25}
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.horizontalLine} />
      <TextInput
        style={[styles.descriptionInput, customStyles.defaultTextStyles]}
        placeholder="Текст описание"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        onPress={createNote}
        style={styles.addNoteButton}
        hitSlop={styles.hitSlop}>
        <Image source={require('../../assets/AddNoteIcon.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    height: 82,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D2D2D2',
    borderRadius: 10,
    paddingLeft: 17,
    paddingRight: 27,
    paddingVertical: 20,
  },
  titleInput: {
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 4,
  },
  descriptionInput: {
    fontSize: 10,
    fontWeight: '300',
    paddingLeft: 4,
  },
  horizontalLine: {
    height: 0,
    alignSelf: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#D2D2D2',
  },
  addNoteButton: {
    position: 'absolute',
    top: 53,
    right: 21,
  },
  hitSlop: {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30,
  },
});
