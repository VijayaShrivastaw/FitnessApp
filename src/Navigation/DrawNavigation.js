import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import ProfileScreen from '../Screens/ProfileScreen';
import DashBoard from '../Screens/DashBoard';
import BlurScreen from '../Blur/BlurScreen';
const Drawer = createDrawerNavigator();

export default function DrawNavigation() {
  const HomeScreen = ({navigation}) => {
    <View>
      <Text>Home Screen</Text>
      {/* <Button title="Open Drawer" onPress={() => navigation.openDrawer()} /> */}
    </View>;
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#fff',
            width: 226,
          },
          drawerLabelStyle: {
            fontSize: 14,
            color: '#000',
          },
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="DashBoard"
          component={DashBoard}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
