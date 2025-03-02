import {View, Text, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {multiple, resett} from '../../Redux/MultipleScreen';
import {responsiveHeight} from 'react-native-responsive-dimensions';

export default function ProviderScreen() {
  const value = useSelector(state => state.multipler.factor);
  const dispatch = useDispatch();
  console.log(dispatch, 'ppppp');

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text>{value}</Text>
      <Button title="multiple" onPress={() => dispatch(multiple())} />
      <Button title="Reset" onPress={() => dispatch(resett())} />

      {/* <Button title="+" onPress={() => dispatch(multiple())} /> */}
    </View>
  );
}
