import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SecuritySettingsCard = () => {
  const navigation = useNavigation();
  const [isUsageCapEnabled, setIsUsageCapEnabled] = useState(false);
// Replace with your default value

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
          <Ionicons name="key-outline" size={24} color="white" />
          <Text style={styles.optionText}>Forgot TPIN</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} onPress={ChangePassword}>
        <View style={styles.leftContainer}>
          <Ionicons name="key-outline" size={24} color="white" />
          <Text style={styles.optionText}>Change TPIN</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="white" style={{marginLeft:195}}/>
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
    paddingVertical: 16,
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
  enableDisableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  enableDisableText: {
    fontSize: 16,
    marginRight: 8,
  },
  enableDisableButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 2,
  },
  enableDisableButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default SecuritySettingsCard;
