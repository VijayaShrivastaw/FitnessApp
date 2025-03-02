import {View, Text} from 'react-native';
import React from 'react';
import StackNavigation from './src/Navigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import DrawNavigation from './src/Navigation/DrawNavigation';
import store from './src/Redux/Store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <>
      {/* <NavigationContainer>
      <StackNavigation />
      </NavigationContainer> */}
      <Provider store={store}>
        {/* <CounterScreen /> */}
        <DrawNavigation />
      </Provider>
    </>
  );
}
