import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from './src/Header'
import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';
import ScanScreen from './src/ScanScreen';
import SettingsScreen from './src/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />

    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
    
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Scan') {
                iconName = 'scan-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              }
    
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#000000',
            inactiveTintColor: '#999999',
            style: styles.tabBarStyle,
            labelStyle: styles.tabLabelStyle,
          }}
        >
          <Tab.Screen name="Home" component={HomeStack}   />
          <Tab.Screen name="Scan" component={ScanScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;

