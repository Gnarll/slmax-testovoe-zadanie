import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IComment} from '../../store/commentReducer';
import {customStyles} from '../../styles';
import {getDateWithTime} from '../../utils';
import {CommentAnswerList} from '../CommentAnswerList';
import {CommentAnswerCreator} from '../CommentAnswerList/CommentAnswerCreator';

export const CommentItem = ({item}: {item: IComment}) => {
  const [isAnswerButtonPressed, setIsAnswerButtonPressed] = useState(false);

  const toggleAnswerButton = () => {
    setIsAnswerButtonPressed(state => !state);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.commentText}>{item.commentText}</Text>
        <View>
          <View style={styles.dateWithAnswerButton}>
            <Text style={styles.date}>{getDateWithTime(item.date)}</Text>

            {!isAnswerButtonPressed ? (
              <TouchableOpacity
                onPress={toggleAnswerButton}
                disabled={isAnswerButtonPressed}>
                <Text
                  style={[customStyles.defaultTextStyles, styles.answerButton]}>
                  Ответить
                </Text>
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
    color: '#000000',
  },
  commentText: {
    fontWeight: '300',
    fontSize: 10,
    color: '#000000',
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
