import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

export default function ScrollNumberPicker() {
  const [numeric, setNumeric] = useState(57676);
  const digitRefs = useRef([]);

  useEffect(() => {
    animateNumberChange();
  }, [numeric]);

  const animateNumberChange = () => {
    const numStr = String(numeric);
    numStr.split('').forEach((digit, index) => {
      const targetPosition = -parseInt(digit) * responsiveHeight(5); // Adjust height for digit size
      Animated.timing(digitRefs.current[index], {
        toValue: targetPosition,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const numStr = String(numeric);

  return (
    <View style={{paddingTop: responsiveHeight(3), flexDirection: 'row'}}>
      {' '}
      {/* Use flexDirection: 'row' */}
      {numStr.split('').map((digit, index) => {
        if (!digitRefs.current[index]) {
          digitRefs.current[index] = new Animated.Value(0);
        }
        const digitArray = Array.from({length: 10}, (_, i) => i); // Array of digits 0-9
        return (
          <View
            key={index}
            style={{overflow: 'hidden', height: responsiveHeight(5)}}>
            {/* Clip the view */}
            {digitArray.map(d => (
              <Animated.Text
                key={d}
                style={{
                  fontSize: responsiveFontSize(2.5),
                  fontWeight: 'bold',
                  color: '#e84118',
                  transform: [{translateY: digitRefs.current[index]}],
                  height: responsiveHeight(5), // Make sure each digit has the same height
                }}>
                {d}
              </Animated.Text>
            ))}
          </View>
        );
      })}
      <View style={{marginLeft: 10}}>
        <TouchableOpacity
          onPress={() => setNumeric(numeric - 1)}
          style={{marginTop: 10}}>
          <Text
            style={{
              color: '#000',
              fontSize: responsiveFontSize(2.5),
              fontWeight: '600',
            }}>
            Decrement
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setNumeric(numeric + 1)}
          style={{marginTop: 10}}>
          <Text
            style={{
              color: '#000',
              fontSize: responsiveFontSize(2.5),
              fontWeight: '600',
            }}>
            Increment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
