// In StackNavigation.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/AuthScreen/LoginScreen';
import GetStartedScreen from '../Screens/AuthScreen/GetStartedScreen';
import GraphScreen from '../Screens/GraphScreen/GraphScreen';
import MultiGraph from '../Screens/GraphScreen/MultiGraph';
import DashBoard from '../Screens/DashBoard';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MultiGraph"
        component={MultiGraph}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Graph"
        component={GraphScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStart"
        component={GetStartedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DashBoard"
        component={DashBoard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
