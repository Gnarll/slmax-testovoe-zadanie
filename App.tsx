import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {Header} from './src/components/Header';
import {MainContent} from './src/components/MainContent';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppWrapper} from './src/components/ThemeComponents/AppWrapper';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.rootView}>
        <AppWrapper>
          <Header />
          <MainContent />
        </AppWrapper>
      </GestureHandlerRootView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingTop: 0,
  },
});

export default App;
