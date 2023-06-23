import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const Ads = () => {
    const adData = [
        { title: 'Book a Ride', image: require('../assets/ad6.png') },
        { title: 'Insurance', image: require('../assets/ad3.png')},
        { title: 'Credit Card', image: require('../assets/ad4.jpg')},
        { title: 'Investments', image: require('../assets/ad4.jpg')},
        { title: 'Recharge Offers', image: require('../assets/ad6.png')},
      ];

  return (
    <View style={styles.container}>
      <Swiper
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.pagination}
        loop={false}
      >
        {adData.map((item, index) => (
          <View key={index} style={styles.adContainer}>
            <Image source={item.image} style={styles.adImage} />
            <Text style={styles.adTitle}>{item.title}</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    bottom:353
  },
  dot: {
    backgroundColor: 'black',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 4,
    marginBottom: 4,
    bottom:14
  },
  activeDot: {
    backgroundColor: 'blue',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  pagination: {
    bottom: -23,
  },
  adContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  adImage: {
    width: 400,
    height: 300,
    borderRadius: 10,
    marginBottom: 6,
  },
  adTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Ads;
