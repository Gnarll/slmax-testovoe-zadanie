import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Заметки</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
});

export default Header;
