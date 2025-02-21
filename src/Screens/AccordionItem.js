import React, {useRef, useEffect} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-paper';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const {height, width} = Dimensions.get('screen');
const AccordionItem = ({
  title,
  content,
  isOpen,
  onPress,
  topArrow,
  icon,
  downArrow,
}) => {
  const animation = useRef(new Animated.Value(isOpen ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // Adjust based on content height
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.header}>
        <View>{icon}</View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: responsiveWidth(5),
            // backgroundColor: 'red',
            width: width * 0.8,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.headerText}>{title}</Text>
          <View style={styles.arrowIcon}>{isOpen ? topArrow : downArrow}</View>
        </View>
      </TouchableOpacity>
      <Animated.View
        style={[styles.contentContainer, {height: heightInterpolation}]}>
        <Text style={styles.content}>{content}</Text>
      </Animated.View>
    </View>
  );
};

export default AccordionItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowIcon: {
    marginLeft: 10,
  },
  contentContainer: {
    overflow: 'hidden',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 15,
  },
  content: {
    fontSize: 14,
    paddingVertical: 10,
  },
});
