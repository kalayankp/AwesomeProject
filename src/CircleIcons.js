import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DotIndicator } from 'react-native-indicators';

const CircleIcons = () => {
  const scrollViewRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = event => {
    const position = event.nativeEvent.contentOffset.x;
    setScrollPosition(position);

    const index = Math.round(position / 60);
    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
  };

  const scrollToIndex = index => {
    scrollViewRef.current.scrollTo({ x: index *60, y: 0, animated: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={20}
        decelerationRate="fast"
      >
        <View style={styles.circleContainer}>
          <Icon name="th-large" size={25} color="#0078D7" />
          <Text style={styles.iconLabel}>All</Text>
        </View>
        <View style={styles.circleContainer}>
          <Icon name="exchange" size={25} color="#0078D7" />
          <Text style={styles.iconLabel}>Transfer</Text>
        </View>
        <View style={styles.circleContainer}>
          <Icon name="money" size={25} color="#0078D7" />
          <Text style={styles.iconLabel}>Bills</Text>
        </View>
        <View style={styles.circleContainer}>
          <Icon name="plane" size={25} color="#0078D7" />
          <Text style={styles.iconLabel}>Travel</Text>
        </View>
        <View style={styles.circleContainer}>
          <Icon name="shield" size={25} color="#0078D7" />
          <Text style={styles.iconLabel}>Insuranc</Text>
        </View>
        <View style={styles.circleContainer}>
          <Icon name="money" size={25} color="#0078D7" />
          <Text style={styles.iconLabel}>Loans</Text>
        </View>
        <View style={styles.circleContainer}>
          <Icon name="line-chart" size={25} color="#0078D7" />
          <Text style={styles.iconLabel}>Investments</Text>
        </View>
        <View style={styles.circleContainer}>
          <Icon name="cog" size={25} color="#0078D7" />
          <Text style={styles.iconLabel}>Services</Text>
        </View>
      </ScrollView>
      <View style={styles.dotsContainer}>
        {Array.from({ length: 8 }, (_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default CircleIcons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  circleContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  iconLabel: {
    marginTop: -6,
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 11,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#0078D7',
    bottom:12
  },
  activeDot: {
    backgroundColor: '#FFF',
  },
});
