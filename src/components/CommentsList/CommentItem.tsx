import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IComment} from '../../store/commentReducer';
import {getDateWithTime} from '../../utils';
import {CommentAnswerList} from '../CommentAnswerList';
import {CommentAnswerCreator} from '../CommentAnswerList/CommentAnswerCreator';
import {ThemeText} from '../ThemeComponents/ThemeText';

export const CommentItem = ({item}: {item: IComment}) => {
  const [isAnswerButtonPressed, setIsAnswerButtonPressed] = useState(false);

  const toggleAnswerButton = () => {
    setIsAnswerButtonPressed(state => !state);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <ThemeText style={styles.title}>{item.title}</ThemeText>
        <ThemeText style={styles.commentText}>{item.commentText}</ThemeText>
        <View>
          <View style={styles.dateWithAnswerButton}>
            <ThemeText style={styles.date}>
              {getDateWithTime(item.date)}
            </ThemeText>

            {!isAnswerButtonPressed ? (
              <TouchableOpacity
                onPress={toggleAnswerButton}
                disabled={isAnswerButtonPressed}>
                <ThemeText style={styles.answerButton}>Ответить</ThemeText>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>

      {isAnswerButtonPressed ? (
        <CommentAnswerCreator
          item={item}
          isAnswerButtonPressed={isAnswerButtonPressed}
          setIsAnswerButtonPressed={setIsAnswerButtonPressed}
        />
      ) : null}
      <CommentAnswerList item={item} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: 75,
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 5,
    marginBottom: 5,
    paddingLeft: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
  },
  commentText: {
    fontWeight: '300',
    fontSize: 10,
  },
  dateWithAnswerButton: {
    flexDirection: 'row',
  },
  answerButton: {
    paddingLeft: 11,
    fontWeight: '600',
    fontSize: 10,
    color: '#8F8F8F',
  },
  date: {
    fontWeight: '300',
    fontSize: 10,
  },
});
