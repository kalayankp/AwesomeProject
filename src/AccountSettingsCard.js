import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccountSettingsCard = () => {
  const navigation = useNavigation();
  const [isUsageCapEnabled, setIsUsageCapEnabled] = useState(false);

  const toggleUsageCap = () => {
    setIsUsageCapEnabled(!isUsageCapEnabled);
  };

  const UpdateAddress = () => {
    navigation.navigate('UpdateAddress');
  };

  const handleLedgerStatement = () => {
    navigation.navigate('Ledger');
  };

  const handleIncomeVerification = () => {
    navigation.navigate('IncomeVerificationForm');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionContainer} onPress={handleLedgerStatement}>
        <View style={styles.leftContainer}>
          <Image source={require('../src/img/ledger.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Ledger Statement</Text>
        </View>
        <Image source={require('../src/img/forward.png')} style={styles.chevronIcon} />
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
          <Image source={require('../src/img/income.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Income Verification</Text>
        </View>
        <Image source={require('../src/img/forward.png')}style={styles.chevronIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer} onPress={UpdateAddress}>
        <View style={styles.leftContainer}>
          <Image source={require('../src/img/address.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Update Current Address</Text>
        </View>
        <Image source={require('../src/img/forward.png')} style={styles.chevronIcon} />
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
    marginRight: 12,
    tintColor: 'white',
  },
  chevronIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AccountSettingsCard;
