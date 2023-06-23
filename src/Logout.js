import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsCard = () => {
  return (
    <View style={styles.container}>
      <LogoutOption />
    </View>
  );
};



const LogoutOption = () => (
  <TouchableOpacity style={styles.logoutContainer} activeOpacity={0.8}>
    <Ionicons name="log-out-outline" size={24} color="white" />
    <Text style={styles.logoutText}>Logout</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0078D7',
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 16,
    marginVertical: 8,
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
    color:'white'
  },
});

export default SettingsCard;
