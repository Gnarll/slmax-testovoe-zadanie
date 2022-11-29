import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ICommentAnswer} from '../../store/commentAnswerReducer';
import {getDateWithTime} from '../../utils';
import {ThemeText} from '../ThemeComponents/ThemeText';

export const CommentAnswerItem = ({item}: {item: ICommentAnswer}) => {
  return (
    <>
      <View style={styles.wrapper}>
        <ThemeText style={styles.title}>{item.title}</ThemeText>
        <ThemeText style={styles.commentText}>{item.commentText}</ThemeText>
        <View style={styles.dateWrapper}>
          <ThemeText style={styles.date}>
            {getDateWithTime(item.date)}
          </ThemeText>
        </View>
      </View>
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
    marginLeft: 15,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
  },
  commentText: {
    fontWeight: '300',
    fontSize: 10,
  },
  dateWrapper: {
    flexDirection: 'row',
  },
  date: {
    fontWeight: '300',
    fontSize: 10,
  },
});
