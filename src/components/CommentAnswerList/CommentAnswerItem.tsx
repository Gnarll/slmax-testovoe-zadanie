import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ICommentAnswer} from '../../store/commentAnswerReducer';
import {getDateWithTime} from '../../utils';

export const CommentAnswerItem = ({item}: {item: ICommentAnswer}) => {
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.commentText}>{item.commentText}</Text>
        <View style={styles.dateWrapper}>
          <Text style={styles.date}>{getDateWithTime(item.date)}</Text>
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
    color: '#000000',
  },
  commentText: {
    fontWeight: '300',
    fontSize: 10,
    color: '#000000',
  },
  dateWrapper: {
    flexDirection: 'row',
  },
  date: {
    fontWeight: '300',
    fontSize: 10,
  },
});
