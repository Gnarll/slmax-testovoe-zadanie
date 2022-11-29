import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import uuid from 'react-native-uuid';
import {addNote, INote} from '../../store/noteReducer';
import {useAppDispatch, useAppSelector} from '../../store';
import Svg, {Path} from 'react-native-svg';
import {ThemeTextInput} from '../ThemeComponents/ThemeTextInput';

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

  const theme = useAppSelector(state => state.theme);

  return (
    <View style={styles.wrapper}>
      <ThemeTextInput
        style={styles.titleInput}
        placeholder="Название"
        maxLength={25}
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.horizontalLine} />
      <ThemeTextInput
        style={styles.descriptionInput}
        placeholder="Текст описание"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        onPress={createNote}
        style={styles.addNoteButton}
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
