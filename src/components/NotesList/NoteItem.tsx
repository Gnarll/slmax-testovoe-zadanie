import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import Svg, {Path} from 'react-native-svg';
import {useAppDispatch, useAppSelector} from '../../store';
import {deleteNote, INote} from '../../store/noteReducer';
import {CommentsList} from '../CommentsList';
import {NoteView} from '../ThemeComponents/NoteView';
import {ThemeText} from '../ThemeComponents/ThemeText';
import {Description} from './Description';

export const NoteItem = (note: INote) => {
  const [isShownDescr, setIsShownDescr] = useState(false);

  const [isDeletePressed, setIsDeletePressed] = useState(false);

  const [timeoutId, setTimeoutId] = useState<null | number>(null);

  const dispatch = useAppDispatch();

  const toggleIsShownDescr = () => {
    setIsShownDescr(state => !state);
  };

  const deleteItem = (item: INote) => {
    dispatch(deleteNote(item.id));
  };

  const deleteTimeout = () => {
    setIsDeletePressed(state => !state);
    setTimeoutId(
      setTimeout(() => {
        deleteItem(note);
      }, 5000),
    );
  };
  const clearDeleteTimeout = () => {
    if (!timeoutId) return;
    clearTimeout(timeoutId);
    setIsDeletePressed(state => !state);
    setTimeoutId(null);
  };

  const theme = useAppSelector(state => state.theme);

  return (
    <>
      <Swipeable
        renderRightActions={() => {
          return isDeletePressed ? (
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={clearDeleteTimeout}>
              <Image source={require('../../assets/Backward5seconds.png')} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={deleteTimeout}>
              <Text style={styles.deleteButtonText}>Удалить</Text>
            </TouchableOpacity>
          );
        }}>
        <NoteView style={styles.wrapper}>
          <ThemeText style={styles.title}>{note.title}</ThemeText>
          <ThemeText style={styles.shortDescription}>
            {note.shortDescription}
          </ThemeText>
          <TouchableOpacity
            onPress={toggleIsShownDescr}
            style={styles.showDescriptionButton}
            hitSlop={styles.hitSlop}>
            <Svg width="10" height="5" viewBox="0 0 10 5" fill="none">
              <Path
                d="M1.13847 0.73999L4.96743 4.25999L8.79639 0.73999"
                stroke="black"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill={theme.isDarkMode ? 'white' : 'black'}
              />
            </Svg>
          </TouchableOpacity>
        </NoteView>
      </Swipeable>
      {isShownDescr ? (
        <>
          <Description note={note} />
          <CommentsList note={note} />
        </>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 37,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 16,
  },
  title: {
    borderRightWidth: 1,
    paddingRight: 5,
    marginRight: 5,
    fontWeight: '600',
    fontSize: 16,
  },
  shortDescription: {
    fontWeight: '300',
    fontSize: 12,
  },
  showDescriptionButton: {
    position: 'absolute',
    right: 16,
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 20,
    right: 20,
  },
  deleteButton: {
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 95,
    height: 37,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
});
