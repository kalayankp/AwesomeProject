// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet ,ScrollView} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Header from './Header';
// import CircleIcons from './CircleIcons';
// import Ads from './Ads';
// import Balance from './Balance';
// import  PieCharts  from './PieChart'
// import Charts from './Charts';
// const Card = () => {

//   const navigation = useNavigation();

//   const iconData = [
   
//     { name: 'Mobile', iconName: 'cellphone', screen: 'MobileScreen' },
//     { name: 'Bank', iconName: 'bank', screen: 'BankScreen' },
//     { name: 'Self', iconName: 'account-circle', screen: 'SelfScreen',},
//     { name: 'Check Balance', iconName: 'cash-multiple', screen: 'CheckBalanceScreen' },
//   ];

//   const handleIconPress = (screen) => {
//     navigation.navigate(screen);
//   };
 
//   const cardData = [
//     { name: 'Mobile', iconName: 'cellphone', screen: 'MobileRechargeScreen' },
//     { name: 'DTH', iconName: 'television', screen: 'DthScreen' },
//     { name: 'Electricity', iconName: 'flash', screen: 'ElectricityScreen' },
//     { name: 'Credit Card', iconName: 'credit-card', screen: 'CreditCardScreen' },
//   ];

//   const handleCardPress = (screen) => {
//     navigation.navigate(screen);
//   };
//   const insuranceData = [
    
//     { name: 'Bike ', iconName: 'motorbike', screen: 'BikeInsuranceScreen' },
//     { name: 'Car ', iconName: 'car', screen: 'CarInsuranceScreen' },
//     { name: 'Health ', iconName: 'plus', screen: 'HealthInsuranceScreen' },
//     { name: 'Personal ', iconName: 'shield-account', screen: 'PersonalAccidentScreen' },
//   ];

//   const CardPress = (screen) => {
//     navigation.navigate(screen);
//   };
//   const Travel = [
//     { name: 'Flights', iconName: 'airplane', screen: 'FlightsScreen' },
//     { name: 'Bus', iconName: 'bus', screen: 'BusScreen' },
//     { name: 'Train', iconName: 'train', screen: 'TrainScreen' },
//     { name: 'Hotel', iconName: 'bed', screen: 'HotelScreen' },
//   ];

//   const handleTravelPress = (screen) => {
//     navigation.navigate(screen);
//   };
  
//   return (
  
//     <View>
      
//       {/* <Header/> */}
//       <ScrollView showsVerticalScrollIndicator>
//       <CircleIcons/>
     
//      <Balance/>
//      {/* <PieCharts/> */}
//      < Charts/>
//       <View style={styles.card}>
//       {iconData.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.iconContainer}
//           onPress={() => handleIconPress(item.screen)}
//         >
//           <View style={styles.circle}>
//             <Icon name={item.iconName} size={25} color="#fff" />
//           </View>
//           <Text style={styles.iconLabel}>{item.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={styles.Rechargecontainer}>
//       {cardData.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.iconContainer}
//           onPress={() => handleCardPress(item.screen)}
//         >
//         <View style={styles.circle}>
//             <Icon name={item.iconName} size={25} color="#fff" />
//           </View>
//           <Text style={styles.iconLabel}>{item.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>


//     <View style={styles.Insurancecontainer}>
//       {insuranceData.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.iconContainer}
//           onPress={() => CardPress(item.screen)}
//         >
//          <View style={styles.circle}>
//             <Icon name={item.iconName} size={25} color="#fff" />
//           </View>
//           <Text style={styles.Labelcontainer}>{item.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>

//     <View style={styles.Travelcontainer}>
//       {Travel.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.iconContainer}
//           onPress={() => handleTravelPress(item.screen)}
//         >
//           <View style={styles.circle}>
//             <Icon name={item.iconName} size={25} color="#fff" />
//           </View>
//           <Text style={styles.Label}>{item.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </View> 
//     </ScrollView>
//     </View>
    
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   card: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 40,
//     padding: 20,
//     shadowColor: "#000",
//    shadowOffset: {
// 	width: 0,
// 	height: 11,
//   },
//   shadowOpacity: 0.57,
//   shadowRadius: 15.19,
//   elevation: 23,
//   width:400,
//   marginLeft:6,
//   marginTop: 20,
//   },

//   iconContainer: {
//     alignItems: 'center',
//   },
//   circle: {
//     width: 60,
//     height: 60,
//     borderRadius: 90,
//     backgroundColor: '#0078D7',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   iconLabel: {
//     color: '000000',
//     marginTop: 5,
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   Rechargecontainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 40,
//     padding: 20,
//     shadowColor: "#000",
//    shadowOffset: {
// 	width: 0,
// 	height: 11,
//   },
//   shadowOpacity: 0.57,
//   shadowRadius: 15.19,
//   elevation: 23,
//   width:400,
//   marginLeft:6,
//   marginTop: 20,
//   },
//   icon: {
//     color: '000000',
//     marginTop: 5,
//     fontSize: 10,
//     textAlign: 'center',
//   },
//   Insurancecontainer: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   backgroundColor: 'white',
//   borderRadius: 40,
//   padding: 20,
//   shadowColor: "#000",
//  shadowOffset: {
// width: 0,
// height: 11,
// },
// shadowOpacity: 0.57,
// shadowRadius: 15.19,
// elevation: 23,
// width:400,
// marginLeft:6,
// marginTop: 20,
//   },
//   Labelcontainer: {
//     color: '000000',
//     marginTop: 5,
//     fontSize: 14,
//     textAlign: 'center',
//   },
// Travelcontainer: {
//   flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 40,
//     padding: 20,
//     shadowColor: "#000",
//    shadowOffset: {
// 	width: 0,
// 	height: 11,
//   },
//   shadowOpacity: 0.57,
//   shadowRadius: 15.19,
//   elevation: 23,
//   width:400,
//   marginLeft:6,
//   marginTop: 20,
   
//   },
  
//   Label: {
//     color: '000000',
//     marginTop: 5,
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   iconContainer: {
//     alignItems: 'center',
//     marginRight:12,
    
//   },
//   icon: {
//     alignItems: 'center',
//     marginRight:18,
//     paddingLeft:-2,
//     bottom:53
//   },
  
// });
// export default Card
