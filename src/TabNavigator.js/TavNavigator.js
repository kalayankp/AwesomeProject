import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Button,
} from 'react-native';



import WalletScreen from '../WalletScreen';
import ProfileScreen from '../ProfileScreen';
import Mainscreen from '../Mainscreen';
import TransactionsScreen from '../TransactionsScreen';
import HomeScreen from '../HomeScreen'
import Header from '../Header'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        header: () => <Header  />,
      }}
    />
  </Stack.Navigator>
);


const Navigation = () => {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = focused
                ? require('../img/home.png')
                : require('../img/home.png');
            } else if (route.name === 'Transactions') {
              iconSource = focused
              ? require('../img/qr.png')
              : require('../img/qr.png');
            } else if (route.name === 'Wallet') {
              iconSource = focused
              ? require('../img/money.png')
                : require('../img/money.png');
            } else if (route.name === 'Profile') {
              iconSource = focused
              ? require('../img/profile.png')
                : require('../img/profile.png');
            }

            return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false}}/>
        <Tab.Screen name="Transactions" component={TransactionsScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
   
  );
};

export default Navigation;