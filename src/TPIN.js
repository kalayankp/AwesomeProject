import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TPIN = () => {
  const navigation = useNavigation();
  const [isUsageCapEnabled, setIsUsageCapEnabled] = useState(false);

  const toggleUsageCap = () => {
    setIsUsageCapEnabled(!isUsageCapEnabled);
  };

  const ForgotPassword = () => {
    navigation.navigate('Forgot TPIN');
  };

  const ChangePassword = () => {
    navigation.navigate('Change');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionContainer} onPress={ForgotPassword}>
        <View style={styles.leftContainer}>
          <Image source={require('../src/img/tpin.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Forgot TPIN</Text>
        </View>
        <Image source={require('../src/img/forward.png')} style={styles.chevronIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer} onPress={ChangePassword}>
        <View style={styles.leftContainer}>
          <Image source={require('../src/img/tpin.png')}  style={styles.optionIcon} />
          <Text style={styles.optionText}>Change TPIN</Text>
        </View>
        <Image source={require('../src/img/forward.png')}  style={styles.chevronIcon} />
      </TouchableOpacity>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Enable TPIN</Text>
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
    paddingVertical: 16,
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
    marginLeft: 195,
  },
});

export default TPIN;
