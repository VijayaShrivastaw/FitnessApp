import {View} from 'react-native';
import React from 'react';
import CircularProgrss, {
  CircularProgressBase,
} from 'react-native-circular-progress-indicator';
import ScrollNumberPicker from '../ScrollNumberPicker';

const props = {
  activeStrokeWidth: 25,
  inActiveStrokeWidth: 25,
  inActiveStrokeOpacity: 0.2,
};
export default function MultiGraph() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <CircularProgrss
        value={80}
        activeStrokeColor={'#e84118'}
        activeStrokeSecondaryColor={'#e84118'}
      />
      <ScrollNumberPicker />
      <CircularProgressBase
        {...props}
        value={80}
        radius={125}
        activeStrokeColor={'#e84118'}
        inActiveStrokeColor={'#e84118'}>
        <CircularProgressBase
          {...props}
          value={87}
          radius={100}
          activeStrokeColor={'#badc58'}
          inActiveStrokeColor={'#badc58'}>
          <CircularProgressBase
            {...props}
            value={62}
            radius={75}
            activeStrokeColor={'#18dcff'}
            inActiveStrokeColor={'#18dcff'}
          />
        </CircularProgressBase>
      </CircularProgressBase>
    </View>
  );
}
