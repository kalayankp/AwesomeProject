import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const PaymentSettingsCard = () => {
  const navigation = useNavigation();
    const [isUsageCapEnabled, setIsUsageCapEnabled] = useState(false);
 // Replace with your default value
  
    const toggleUsageCap = () => {
      setIsUsageCapEnabled(!isUsageCapEnabled);
    };

 
  const handleLinkPAN = () => {
    navigation.navigate('LinkPANForm');
  };

  const UpdateBank = () => {
    navigation.navigate('Update');
  };

  const handleWalletClosure = () => {
    navigation.navigate('Wallet');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionContainer} onPress={UpdateBank}>
        <View style={styles.leftContainer}>
          <Ionicons name="wallet-outline" size={24} color="white" />
          <Text style={styles.optionText}>Bank Account</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer} onPress={handleLinkPAN}>
        <View style={styles.leftContainer}>
          <Ionicons name="document-text-outline" size={24} color="white" />
          <Text style={styles.optionText}>Link PAN Number</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="white" />
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.optionContainer} onPress={handleWalletClosure}>
        <View style={styles.leftContainer}>
          <Ionicons name="close-circle-outline" size={24} color="white" />
          <Text style={styles.optionText}>Wallet Closure Request</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="white" style={{marginLeft:120}}/>
      </TouchableOpacity>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Enable / Disable SI Settings</Text>
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
    padding: 16,
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
    marginLeft: 16,
  },
});

export default PaymentSettingsCard;
