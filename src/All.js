import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity, ScrollView, Image } from 'react-native';
import { DotIndicator } from 'react-native-indicators';

const All = () => {
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
    scrollViewRef.current.scrollTo({ x: index * 60, y: 0, animated: true });
  };

  const categories = [
    { label: 'All', image: require('../src/img/all.png') },
    { label: 'Transfer', image:require('../src/img/Trans.png') },
    { label: 'Bills', image: require('../src/img/bills.jpg') },
    { label: 'Travel', image: require('../src/img/travel.png') },
    { label: 'Insuranc', image:require('../src/img/health.png') },
    { label: 'Loans', image: require('../src/img/loan.png') },
    { label: 'Investme', image: require('../src/img/profit.png') },
    { label: 'Services', image:require('../src/img/service.png') },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={60}
        decelerationRate="fast"
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.circleContainer, currentIndex === index && styles.activeCircle]}
            onPress={() => scrollToIndex(index)}
          >
            <Image source={category.image} style={styles.iconImage} />
            <Text style={styles.iconLabel}>{category.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {Array.from({ length: categories.length }, (_, index) => (
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

export default All;

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
  iconImage: {
    width: 25,
    height: 25,
    marginBottom: 4,
  },
  iconLabel: {
    marginTop: -6,
    textAlign: 'center',
  },
  activeCircle: {
    backgroundColor: '#0078D7',
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
    bottom: 12,
  },
  activeDot: {
    backgroundColor: '#FFF',
  },
});
