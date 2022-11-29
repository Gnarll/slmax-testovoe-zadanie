import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useAppSelector} from '../../store';

const HeaderBackground = () => {
  const theme = useAppSelector(state => state.theme);
  return (
    <>
      <Svg
        style={styles.svgBack}
        width={'100%'}
        height={'100%'}
        fill="none"
        viewBox="0 0 393 192">
        <Path
          d="M0 0h393v130.315s-81.234-1.914-184.5 27.185C79.831 193.758 0 191.887 0 191.887V0Z"
          fill={theme.isDarkMode ? '#362693' : '#82C8DE'}
        />
      </Svg>
      <Svg
        style={styles.svgFront}
        width={'100%'}
        height={'100%'}
        fill="none"
        viewBox="0 0 393 200">
        <Path
          d="M396 0H0V135.744C0 135.744 83.2433 135.744 187.297 166.056C316.948 203.825 396 199.882 396 199.882V0Z"
          fill={theme.isDarkMode ? '#7363D1' : '#10637D'}
        />
      </Svg>
    </>
  );
};

export default HeaderBackground;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  svgFront: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  svgBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
});
