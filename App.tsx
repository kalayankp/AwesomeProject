import { Text, View } from 'react-native'
import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/TabNavigator.js/StackNavigator';

function App() {

    return (
    <NavigationContainer>
   <StackNavigator/>
   </NavigationContainer>
    )
  }
export default App;