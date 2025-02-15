import {View, Text} from 'react-native';
import React from 'react';
import StackNavigation from './src/Navigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
