import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderBackground from './HeaderBackground';

export const Header = () => {
  return (
    <View style={styles.wrapper}>
      <HeaderBackground />
      <Text style={styles.text}>Заметки</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 209,
    marginBottom: 30,
  },
  text: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 28,
    zIndex: 2,
    color: '#ffffff',
  },
});
