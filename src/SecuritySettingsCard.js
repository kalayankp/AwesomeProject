import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
          <Ionicons name="lock-open-outline" size={24} color="white" />
          <Text style={styles.optionText}>Change Password</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="white" />
      </TouchableOpacity>

      <SecurityOption icon="finger-print-outline" text="Enable Fingerprint Authentication" />

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

const SecurityOption = ({ icon, text }) => (
  <TouchableOpacity style={styles.optionContainer} activeOpacity={0.8}>
    <View style={styles.leftContainer}>
      <Ionicons name={icon} size={24} color="white" />
      <Text style={styles.optionText}>{text}</Text>
    </View>
    <Ionicons name="chevron-forward-outline" size={24} color="white" style={{marginLeft:1}}/>
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
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  optionValue: {
    fontSize: 16,
  },
  
});

export default SecuritySettingsCard;
