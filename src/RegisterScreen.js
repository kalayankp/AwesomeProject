import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PaymentSettings from './PaymentSettings';

import EditProfile from './EditProfile';
import Logout from './Logout';
import SecuritySettingsCard from './SecuritySettingsCard';
import TPIN from './TPIN';


import { ScrollView } from 'react-native-gesture-handler';
import AccountSettingsCard from './AccountSettingsCard';
const ProfileScreen = () => {
  return (
<ScrollView>
   
    <View style={styles.container}>
   
    <EditProfile/>
    
           <SecuritySettingsCard/>
           <TPIN/> 
           <PaymentSettings/> 
           <AccountSettingsCard/> 
           <Logout/> 
    </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
    
  },
  
});

export default ProfileScreen;
