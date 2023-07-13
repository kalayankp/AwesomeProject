import { Text, View ,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';
import All from '../src/All'

const App =()=>{

  const navigation = useNavigation();

  const iconData = [
   
    { name: 'To Contact', imageSource: require('../src/img/iphone.png'), screen: 'MobileScreen' },
    { name: 'Bank', imageSource: require('../src/img/bank.png'), screen: 'BankScreen' },
    { name: 'Self', imageSource: require('../src/img/profile.png'), screen: 'SelfScreen',},
    { name: 'Check Balance',imageSource: require('../src/img/money.png'), screen: 'CheckBalanceScreen' },
  ];

  const handleIconPress = (screen) => {
    navigation.navigate(screen);
  };

  const cardData = [
    { name: 'Mobile', imageSource: require('../src/img/iphone.png'),screen: 'MobileRechargeScreen' },
    { name: 'DTH', imageSource: require('../src/img/DTH.png'),screen: 'DthScreen' },
    { name: 'Electricity', imageSource: require('../src/img/electricity.png'), screen: 'ElectricityScreen' },
    { name: 'Credit Card', imageSource: require('../src/img/card.png'),screen: 'CreditCardScreen' },
  ];

  const handleCardPress = (screen) => {
    navigation.navigate(screen);
  };

  const insuranceData = [
    { name: 'Bike', imageSource: require('../src/img/bike.png'), screen: 'BikeInsuranceScreen' },
    { name: 'Car', imageSource:require('../src/img/car.png'),screen: 'CarInsuranceScreen' },
    { name: 'Health', imageSource: require('../src/img/health.png'), screen: 'HealthInsuranceScreen' },
    { name: 'Personal', imageSource: require('../src/img/profile.png'), screen: 'PersonalAccidentScreen' },
  ];

  const CardPress = (screen) => {
    navigation.navigate(screen);
  };

  const travelData = [
    { name: 'Flights', imageSource: require('../src/img/travel.png'), screen: 'FlightsScreen' },
    { name: 'Bus', imageSource: require('../src/img/bus.png'), screen: 'BusScreen' },
    { name: 'Train', imageSource: require('../src/img/train.png'), screen: 'TrainScreen' },
    { name: 'Hotel', imageSource: require('../src/img/hotel.png'),screen: 'HotelScreen' },
  ];

  const handleTravelPress = (screen) => {
    navigation.navigate(screen);
  };
  return(
    <ScrollView showsVerticalScrollIndicator> 
    <View>
    <All />
    <ScrollView showsVerticalScrollIndicator>
    
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
    </ScrollView>
  )
}

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
export default  App