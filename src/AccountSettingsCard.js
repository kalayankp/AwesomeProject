import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const AccountSettingsCard = () => {

  const navigation = useNavigation();

    const [isUsageCapEnabled, setIsUsageCapEnabled] = useState(false);
 // Replace with your default value
  
    const toggleUsageCap = () => {
      setIsUsageCapEnabled(!isUsageCapEnabled);
    };

    const UpdateAddress = () => {
      navigation.navigate('UpdateAddress');
    };

const [tpinEnabled, setTpinEnabled] = useState(true);

  

  const handleLedgerStatement = () => {
    navigation.navigate('Ledger')
  };

  const handleIncomeVerification = () => {
    navigation.navigate('IncomeVerificationForm')
  };



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionContainer} onPress={handleLedgerStatement}>
        <View style={styles.leftContainer}>
          <Ionicons name="file-tray-outline" size={24} color="white" />
          <Text style={styles.optionText}>Ledger Statement</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Enable / Disable Screen Lock Authentication</Text>
        <Switch
          value={isUsageCapEnabled}
          onValueChange={toggleUsageCap}
          thumbColor={isUsageCapEnabled ? '#147EFB' : 'grey'}
          trackColor={{ false: '#f5dd4b', true: '#f4f3f4' }}
        />
      </View>

      {isUsageCapEnabled && (
        <>
        </>
      )}

      <TouchableOpacity style={styles.optionContainer} onPress={handleIncomeVerification}>
        <View style={styles.leftContainer}>
          <Ionicons name="cash-outline" size={24} color="white" />
          <Text style={styles.optionText}>Income verification</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer} onPress={UpdateAddress}>
        <View style={styles.leftContainer}>
          <Ionicons name="location-outline" size={24} color="white" />
          <Text style={styles.optionText}>Update Current Address</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0078D7',
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'white'
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
  },
});

export default AccountSettingsCard;
