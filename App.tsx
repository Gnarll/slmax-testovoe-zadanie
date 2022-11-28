import React from 'react';
import {SafeAreaView} from 'react-native';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {Header} from './src/components/Header';
import {MainContent} from './src/components/MainContent';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, paddingTop: 0}}>
        <Provider store={store}>
          <Header />
          <MainContent />
        </Provider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
