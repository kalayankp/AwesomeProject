import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SecuritySettingsCard = () => {
  const navigation = useNavigation();
  const [isUsageCapEnabled, setIsUsageCapEnabled] = useState(false);
  const dailyCapCount = 100; // Replace with your default value
  const dailyCapAmount = 50; // Replace with your default value

  const toggleUsageCap = () => {
    setIsUsageCapEnabled(!isUsageCapEnabled);
  };

  const ChangePassword = () => {
    navigation.navigate('Change Password');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionContainer} onPress={ChangePassword}>
        <View style={styles.leftContainer}>
          <Image source={require('../src/img/change.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Change Password</Text>
        </View>
        <Image source={require('../src/img/forward.png')}
          style={styles.chevronIcon}
        />
      </TouchableOpacity>

      <SecurityOption image={require('../src/img/fingerprint.png')} text="Enable Fingerprint Authentication" />

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Enable Usage Cap</Text>
        <Switch
          value={isUsageCapEnabled}
          onValueChange={toggleUsageCap}
          thumbColor={isUsageCapEnabled ? '#147EFB' : 'grey'}
          trackColor={{ false: '#f5dd4b', true: '#f4f3f4' }}
        />
      </View>

      {isUsageCapEnabled && (
        <>
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>Daily Usage Cap Count</Text>
            <Text style={styles.optionValue}>{dailyCapCount}</Text>
          </View>

          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>Daily Usage Cap Amount</Text>
            <Text style={styles.optionValue}>{dailyCapAmount}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const SecurityOption = ({ image, text }) => (
  <TouchableOpacity style={styles.optionContainer} activeOpacity={0.8}>
    <View style={styles.leftContainer}>
      <Image source={image} style={styles.optionIcon} />
      <Text style={styles.optionText}>{text}</Text>
    </View>
    <Image source={require('../src/img/forward.png')} style={styles.chevronIcon} />
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
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 40,
  },
  optionIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
    color: 'white',
  },
  chevronIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
    marginLeft: 1,
  },
  optionValue: {
    fontSize: 16,
  },
});

export default SecuritySettingsCard;
