import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Message from '../Assets/Svgs/Message';
import {useNavigation, useRoute} from '@react-navigation/native';

const RenderItem = ({item}) => {
  console.log(item, 'ppppppp');
  const route = useRoute();
  console.log(route, 'llllll'); // Get route details

  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DashBoard')}
      style={{
        //   backgroundColor: '#fff',
        marginBottom: responsiveHeight(1),
        // paddingHorizontal: responsiveWidth(10),
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(2),
        // marginTop: responsiveHeight(10),
      }}>
      <View
        style={{
          flexDirection: 'row',
          // backgroundColor: 'red',
          // justifyContent: 'space-between',
        }}>
        <View>
          <Image
            source={{uri: item.property.photos[0]}}
            style={{
              width: responsiveWidth(10),
              height: responsiveHeight(5),
              borderRadius: responsiveWidth(8),
            }}
          />
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(6),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.8),
              color: '#000',
              fontWeight: '600',
            }}>
            {item.property.contactDetails.ownerName}
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(1.8),
              color: '#000',
              paddingTop: responsiveHeight(0.6),
            }}>
            {item.property.contactDetails.email}
          </Text>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(6),
            alignSelf: 'center',
          }}>
          <Message />
        </View>
      </View>
      {/* <Text>helow</Text> */}
    </TouchableOpacity>
  );
};

export default RenderItem;
