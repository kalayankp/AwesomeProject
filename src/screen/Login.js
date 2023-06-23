// App.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, Animated } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Mobilenumber from './src/screen/Mobilenumber';
import Otp from './src/screen/Otp';
import Register from './src/screen/Register';
import Pan from './src/screen/Pan';
import Dob from './src/Dob';
import Address from './src/Address';
import RegisterScreen from './src/RegisterScreen';
import Homepage from './src/Homepage';
import PasswordScreen from './src/screen/PasswordScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Ring = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Mobile" component={Mobilenumber}    options={{headerShown:'false',
       
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
           
          },
           headerShown: false 
        }}/>
        <Stack.Screen name="OTP" component={Otp}   options={{
  
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}/>
        <Stack.Screen name="Password" component={PasswordScreen} options={{
  
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}} />
        <Stack.Screen name="REGISTER" component={Register} options={{
  
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}}/>
        <Stack.Screen name="PAN" component={Pan} options={{
  
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}} />
        <Stack.Screen name="App" component={Homepage} options={{
  
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}}/>
        <Stack.Screen name="Dob" component={Dob} options={{
  
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}}/>
        <Stack.Screen name="Address" component={Address} options={{
  
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles=StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    borderTopColor: 'transparent',
    },
    tabLabelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    },
})
export default Ring;
