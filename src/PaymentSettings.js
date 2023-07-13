import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentSettingsCard = () => {
  const navigation = useNavigation();
  const [isUsageCapEnabled, setIsUsageCapEnabled] = useState(false);

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
          <Image source={require('../src/img/noun.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Bank Account</Text>
        </View>
        <Image source={require('../src/img/forward.png')}  style={styles.chevronIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer} onPress={handleLinkPAN}>
        <View style={styles.leftContainer}>
          <Image source={require('../src/img/pan.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Link PAN Number</Text>
        </View>
        <Image source={require('../src/img/forward.png')} style={styles.chevronIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer} onPress={handleWalletClosure}>
        <View style={styles.leftContainer}>
          <Image source={require('../src/img/request.png')}style={styles.optionIcon} />
          <Text style={styles.optionText}>Wallet Closure Request</Text>
        </View>
        <Image source={require('../src/img/forward.png')}  style={styles.chevronIcon} />
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
  optionIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
    tintColor: 'white',
  },
  chevronIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
    marginLeft: 120,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PaymentSettingsCard;
