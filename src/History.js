import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import CircleIcons from './CircleIcons';
import Ads from './Ads';
import Balance from './Balance';
import PieCharts from './PieChart';
import Charts from './Charts';

const Card = () => {
  const navigation = useNavigation();

  const iconData = [
    { name: 'Mobile', imageSource: require('./images/mobile.png'), screen: 'MobileScreen' },
    { name: 'Bank', imageSource: require('./images/bank.png'), screen: 'BankScreen' },
    { name: 'Self', imageSource: require('./images/self.png'), screen: 'SelfScreen' },
    { name: 'Check Balance', imageSource: require('./images/balance.png'), screen: 'CheckBalanceScreen' },
  ];

  const handleIconPress = (screen) => {
    navigation.navigate(screen);
  };

  const cardData = [
    { name: 'Mobile', imageSource: require('./images/mobile.png'), screen: 'MobileRechargeScreen' },
    { name: 'DTH', imageSource: require('./images/dth.png'), screen: 'DthScreen' },
    { name: 'Electricity', imageSource: require('./images/electricity.png'), screen: 'ElectricityScreen' },
    { name: 'Credit Card', imageSource: require('./images/credit-card.png'), screen: 'CreditCardScreen' },
  ];

  const handleCardPress = (screen) => {
    navigation.navigate(screen);
  };

  const insuranceData = [
    { name: 'Bike', imageSource: require('./images/bike.png'), screen: 'BikeInsuranceScreen' },
    { name: 'Car', imageSource: require('./images/car.png'), screen: 'CarInsuranceScreen' },
    { name: 'Health', imageSource: require('./images/health.png'), screen: 'HealthInsuranceScreen' },
    { name: 'Personal', imageSource: require('./images/personal.png'), screen: 'PersonalAccidentScreen' },
  ];

  const CardPress = (screen) => {
    navigation.navigate(screen);
  };

  const travelData = [
    { name: 'Flights', imageSource: require('./images/flights.png'), screen: 'FlightsScreen' },
    { name: 'Bus', imageSource: require('./images/bus.png'), screen: 'BusScreen' },
    { name: 'Train', imageSource: require('./images/train.png'), screen: 'TrainScreen' },
    { name: 'Hotel', imageSource: require('./images/hotel.png'), screen: 'HotelScreen' },
  ];

  const handleTravelPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View>
      {/* <Header/> */}
      <ScrollView showsVerticalScrollIndicator>
        <CircleIcons />
        <Balance />
        {/* <PieCharts/> */}
        <Charts />
        <View style={styles.card}>
          {iconData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.iconContainer}
              onPress={() => handleIconPress(item.screen)}
            >
              <View style={styles.circle}>
                <Image source={item.imageSource} style={styles.icon} />
              </View>
              <Text style={styles.iconLabel}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.Rechargecontainer}>
          {cardData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.iconContainer}
              onPress={() => handleCardPress(item.screen)}
            >
              <View style={styles.circle}>
                <Image source={item.imageSource} style={styles.icon} />
              </View>
              <Text style={styles.iconLabel}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.Insurancecontainer}>
          {insuranceData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.iconContainer}
              onPress={() => CardPress(item.screen)}
            >
              <View style={styles.circle}>
                <Image source={item.imageSource} style={styles.icon} />
              </View>
              <Text style={styles.Labelcontainer}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.Travelcontainer}>
          {travelData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.iconContainer}
              onPress={() => handleTravelPress(item.screen)}
            >
              <View style={styles.circle}>
                <Image source={item.imageSource} style={styles.icon} />
              </View>
              <Text style={styles.Label}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    width: 400,
    marginLeft: 6,
    marginTop: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 90,
    backgroundColor: '#0078D7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  iconLabel: {
    color: '#000000',
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  Rechargecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    width: 400,
    marginLeft: 6,
    marginTop: 20,
  },
  Insurancecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    width: 400,
    marginLeft: 6,
    marginTop: 20,
  },
  Travelcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    width: 400,
    marginLeft: 6,
    marginTop: 20,
  },
  Labelcontainer: {
    color: '#000000',
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  Label: {
    color: '#000000',
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Card;
