import {View, Text} from 'react-native';
import React from 'react';
import StackNavigation from './src/Navigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import DrawNavigation from './src/Navigation/DrawNavigation';

export default function App() {
  return (
    <>
      {/* <NavigationContainer>
      <StackNavigation />
      </NavigationContainer> */}
      <DrawNavigation />
    </>
  );
}
