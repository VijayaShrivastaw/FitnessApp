import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          width: 100,
        }}
        onPress={() => navigation.goBack()}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
}
