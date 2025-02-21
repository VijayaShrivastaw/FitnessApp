import {View, Text, Dimensions, Image, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {
  Tabs,
  useHeaderMeasurements,
  useCollapsibleScene,
  useTabScrollY,
  useCurrentTabScrollY,
  MaterialTabBar,
  useCurrentTabScrollYRef,
  MaterialTabItem,
  Tab,
} from 'react-native-collapsible-tab-view';
import {BlurView} from '@react-native-community/blur';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import RenderItem from './RenderItem';
import Lock from '../Assets/Svgs/Lock';
const {height, width} = Dimensions.get('screen');
const villa = [
  {
    property: {
      _id: '6757f4afe7f0845aee3fc73f',
      propertyId: 'P17518898729',
      title: 'Majestic Villa with Private Garden in Diplomatic Enclave',
      description:
        'The property boasts top-of-the-line security, ample parking, and proximity to embassies, high-end dining, and shopping areas, making it the perfect residence for diplomats or high-profile individuals.',
      userId: 'U66625880309',
      availability: true,
      sold: false,
      location: {
        state: 'DELHI',
        city: 'New Delhi',
        address: 'Taj Diplomatic Enclave',
        streetName: 'not available',
        landMark: 'Diplomatic Enclave',
        administrative_area_level_1: 'DELHI',
        administrative_area_level_2: 'New Delhi',
        administrative_area_level_3: 'Chanakya Puri',
        locality: 'New Delhi',
        subLocality: 'Chanakyapuri',
        country: 'India',
        lat: '28.59516',
        long: '77.17087',
      },
      type: 'buy',
      category: 'residential',
      subCategory: 'villa',
      priceDetails: {
        total: 136706570,
        breakdown: [],
      },
      contactDetails: {
        ownerName: 'Ritika',
        email: 'ritikagupta61341@gmail.com',
        phone: 9667879152,
      },
      amenities: ['Pool', 'Plumber', 'Garbage Collector', 'Garden'],
      nearbyFacilities: {
        schools: true,
        markets: false,
        shoppingMalls: false,
        hospitals: false,
        officeIndustrialArea: true,
      },
      photos: [
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66625880309_P17518898729_0.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66625880309_P17518898729_1.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66625880309_P17518898729_2.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66625880309_P17518898729_3.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66625880309_P17518898729_4.jpeg',
      ],
      videos: [
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Videos/U66625880309_P17518898729.mp4',
      ],
      propertyType: 'Villa',
      propertyDetails: 'P17519078094',
      viewsByTime: {
        day: 20, // example: 20 views in the past day
        week: 100, // example: 100 views in the past week
        month: 350, // example: 350 views in the past month
        year: 120, // example: 1200 views in the past year
        fiveYears: 500, // example: 5000 views in the past 5 years
        allTime: 385, // total views
      },
      __v: 0,
    },
    Property_Details: {
      _id: '6757f4afe7f0845aee3fc73d',
      villaId: 'P17519078094',
      bhk: '2 BHK',
      carpetArea: 525,
      totalArea: 630,
      totalBalconies: 1,
      floorNumber: 1,
      washroomType: 'Indian',
      facingType: 'south',
      plotType: 'residential',
      plotArea: 12000,
      possessionDate: '2024-11-27T09:37:03.824Z',
      __v: 0,
    },
  },
  {
    property: {
      _id: '6757f4e5e7f0845aee3fc745',
      propertyId: 'P17572914737',
      title: 'Premium Villa with Roof Terrace in Shanti Niketan',
      description:
        'The villa has been designed with a modern aesthetic, featuring high ceilings, spacious rooms, and luxurious finishes.',
      userId: 'U66001502490',
      availability: true,
      sold: false,
      location: {
        state: 'DELHI',
        city: 'New Delhi',
        address: 'Pigpo Shanti Niketan',
        streetName: 'Road No 4',
        landMark: 'Sector 4',
        administrative_area_level_1: 'DELHI',
        administrative_area_level_2: 'New Delhi',
        administrative_area_level_3: 'Vasant Vihar',
        locality: 'New Delhi',
        subLocality: 'Shanti Niketan',
        country: 'India',
        lat: '28.57713',
        long: '77.16865',
      },
      type: 'buy',
      category: 'residential',
      subCategory: 'villa',
      priceDetails: {
        total: 166877897,
        breakdown: [],
      },
      contactDetails: {
        ownerName: 'Nilesh',
        email: 'nileshpandey212@gmail.com',
        phone: 7726906242,
      },
      amenities: ['Pool', 'Plumber', 'Garbage Collector', 'Garden'],
      nearbyFacilities: {
        schools: true,
        markets: false,
        shoppingMalls: false,
        hospitals: false,
        officeIndustrialArea: true,
      },
      photos: [
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66001502490_P17572914737_0.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66001502490_P17572914737_1.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66001502490_P17572914737_2.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66001502490_P17572914737_3.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66001502490_P17572914737_4.jpeg',
      ],
      videos: [
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Videos/U66001502490_P17572914737.mp4',
      ],
      propertyType: 'Villa',
      propertyDetails: 'P17573336484',
      viewsByTime: {
        day: 18,
        week: 95,
        month: 300,
        year: 110,
        fiveYears: 400,
        allTime: 328,
      },
      __v: 0,
    },
    Property_Details: {
      _id: '6757f4e5e7f0845aee3fc743',
      villaId: 'P17573336484',
      bhk: '2 BHK',
      carpetArea: 951,
      totalArea: 1141.2,
      totalBalconies: 1,
      floorNumber: 1,
      washroomType: 'Indian',
      facingType: 'east',
      plotType: 'residential',
      plotArea: 20000,
      possessionDate: '2024-11-27T09:37:03.824Z',
      __v: 0,
    },
  },
];

export default function ProfileScreen() {
  const [isLoading, setIsLoading] = useState(true);

  const Header = () => {
    return (
      <View style={{height: responsiveHeight(20), backgroundColor: 'red'}}>
        <Text>Header</Text>
      </View>
    );
  };

  return (
    <Tabs.Container
      renderHeader={Header}
      // headerContainerStyle={{
      //   backgroundColor: scrollY > SOME_THRESHOLD ? "blue" : "transparent",
      // }}
      renderTabBar={props => (
        <MaterialTabBar
          {...props}
          tabNames={['RToR', 'RToR Listing']}
          contentContainerStyle={{
            alignItems: 'center',

            height: responsiveHeight(5),
          }}
          indicatorStyle={{
            backgroundColor: '#FF0000',
            left: 0,
          }}
          style={{
            backgroundColor: 'white',
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          }}
          tabStyle={{
            width: width / 2 - responsiveWidth(10),
            marginLeft: responsiveWidth(7),

            // borderWidth: 1,
          }}
          labelStyle={{
            color: '#000',

            // fontWeight: "600",
            fontSize: responsiveFontSize(1.6),
            textTransform: 'capitalize',
            //   fontFamily: FontFamily.GilroySemiBold,
          }}
          activeColor={'#000'}
          inactiveColor={'#000'}
          scrollEnabled={true}
        />
      )}
      snapThreshold={0.5}>
      <Tabs.Tab name="RToR">
        <Tabs.FlatList
          data={villa}
          contentContainerStyle={{
            // backgroundColor: 'red',
            marginTop: responsiveHeight(6),
            marginHorizontal: responsiveWidth(4),
          }}
          renderItem={({item, idx}) => <RenderItem item={item} />}
          // keyExtractor={identity}
        />
      </Tabs.Tab>
      <Tabs.Tab name="RToR Listing">
        <>
          <Tabs.FlatList
            data={villa}
            contentContainerStyle={{
              // backgroundColor: 'red',
              marginTop: responsiveHeight(6),
              marginHorizontal: responsiveWidth(4),
            }}
            renderItem={({item, idx}) => <RenderItem item={item} />}

            // keyExtractor={identity}
          />
          {isLoading && (
            <BlurView
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                // paddingTop:responsiveHeight
              }}
              blurType="dark"
              blurAmount={1}
              reducedTransparencyFallbackColor="white">
              <View
                style={{
                  paddingTop: responsiveHeight(10),
                }}>
                <Lock />
              </View>
              {/* <ActivityIndicator size="large" color="#000" /> */}
              <Text
                style={{
                  color: 'rgba(253, 192, 192, 0.76)',
                  marginTop: 10,
                  fontSize: responsiveFontSize(2),
                }}>
                Loading...
              </Text>
            </BlurView>
          )}
        </>
      </Tabs.Tab>
    </Tabs.Container>
  );
}
