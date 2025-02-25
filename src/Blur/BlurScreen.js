import {View, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const BlurScreen = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Blur Effect */}
      <BlurView
        style={{
          width: responsiveWidth(30),
          height: responsiveHeight(15),
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
        blurType="dark" // Options: "light", "dark", "extraLight"
        blurAmount={1} // Adjust blur intensity
        reducedTransparencyFallbackColor="white">
        <Entypo
          name="lock"
          size={responsiveHeight(10)}
          color="rgba(253, 192, 192, 0.5)"
        />

        <Text
          style={{
            color: 'rgba(253, 192, 192, 0.8)',
            marginTop: 10,
            fontSize: responsiveFontSize(2),
          }}>
          Loading...
        </Text>
      </BlurView>
    </View>
  );
};

export default BlurScreen;
