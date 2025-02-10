import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

import {Color} from '../../Styles/Color';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const {height, width} = Dimensions.get('screen');
export default function GetStartedScreen() {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <ImageBackground
        source={require('../../Assets/image/women.png')} // Online Image
        style={styles.background}
        resizeMode="cover" // "cover" makes it responsive
      >
        <View style={styles.textView}>
          <Text style={styles.fitText}>Fit</Text>
          <Text
            style={[
              styles.fitText,
              {
                textDecorationLine: 'underline',
                paddingLeft: responsiveWidth(2),
              },
            ]}>
            Kit
          </Text>
        </View>
        <View>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: height,
    width: width,
  },
  fitText: {
    color: Color.white,
    fontSize: responsiveFontSize(8),
    alignSelf: 'center',
    fontWeight: '600',
    // justifyContent: 'center',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: height,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
