import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {DatePickerModal} from 'react-native-paper-dates';
import Svg, {Path} from 'react-native-svg';
import {useAppDispatch, useAppSelector} from '../store';
import {changeDate} from '../store/datePickerReducer';
import {getShortDate} from '../utils';
import {ThemeText} from './ThemeComponents/ThemeText';

export const DateFilterComponent = () => {
  const theme = useAppSelector(state => state.theme);
  const range = useAppSelector(state => state.datePicker);

  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = useCallback(
    ({
      startDate,
      endDate,
    }: {
      startDate: Date | undefined;
      endDate: Date | undefined;
    }) => {
      setOpen(false);

      dispatch(changeDate({startDate, endDate}));
    },
    [setOpen],
  );

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.dateWrapper}
        onPress={() => setOpen(true)}>
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <Path
            d="M6.66667 1.66669V4.16669M13.3333 1.66669V4.16669M2.91667 7.57502H17.0833M17.5 7.08335V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08335C2.5 4.58335 3.75 2.91669 6.66667 2.91669H13.3333C16.25 2.91669 17.5 4.58335 17.5 7.08335Z"
            stroke={theme.isDarkMode ? '#7363D1' : '#10637D'}
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M13.0791 11.4167H13.0866M13.0791 13.9167H13.0866M9.99579 11.4167H10.0041M9.99579 13.9167H10.0041M6.91162 11.4167H6.91995M6.91162 13.9167H6.91995"
            stroke="#10637D"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
        {range.startDate ? (
          <ThemeText style={{marginLeft: 5}}>
            {getShortDate(range.startDate?.toString())}{' '}
          </ThemeText>
        ) : null}
        {range.endDate ? (
          <ThemeText> - {getShortDate(range.endDate?.toString())} </ThemeText>
        ) : null}
      </TouchableOpacity>
      <DatePickerModal
        locale="en"
        mode="range"
        visible={open}
        onDismiss={onDismiss}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
