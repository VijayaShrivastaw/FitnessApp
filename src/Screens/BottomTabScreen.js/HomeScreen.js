import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';

export default function HomeScreen() {
  const markers = [
    {
      id: 1,
      latlng: {latitude: 37.78825, longitude: -122.4324},
      title: 'San Francisco',
      description: 'This is San Francisco!',
    },
    {
      id: 2,
      latlng: {latitude: 37.75825, longitude: -122.4624},
      title: 'Another Place',
      description: 'A different location!',
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE} // Use Google Maps
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  map: {
    flex: 1,
  },
});
