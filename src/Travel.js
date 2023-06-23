import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Travel = () => {
  const navigation = useNavigation();

  const cardData = [
    { name: 'Flights', iconName: 'airplane', screen: 'FlightsScreen' },
    { name: 'Bus', iconName: 'bus', screen: 'BusScreen' },
    { name: 'Train', iconName: 'train', screen: 'TrainScreen' },
    { name: 'Hotel', iconName: 'hotel', screen: 'HotelScreen' },
  ];

  const handleCardPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.card}>
      {cardData.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.iconContainer}
          onPress={() => handleCardPress(item.screen)}
        >
          <View style={styles.circle}>
            <Icon name={item.iconName} size={30} color="#fff" />
          </View>
          <Text style={styles.iconLabel}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4c69a5',
    borderRadius: 10,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginTop: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4c69a5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconLabel: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Travel;
