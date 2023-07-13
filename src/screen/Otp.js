import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const OTPScreen = ({ navigation, route }) => {
  const { itemId } = route.params;
  console.log("otp----",itemId)
  const [otp, setOTP] = useState('');
  const [error, setError] = useState(null);

  const handleOTPVerification = async () => {
    try {
      const response = await fetch('http://192.168.1.5:7000/users/registerValidateOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: itemId,
          OTP: otp,
        }),
      });

      const data = await response.json();
      if (data.status == true) {
        console.log('====',data)
        navigation.navigate('PAN', { item: data.data.id });
      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      console.error("tdrt", error);
    }
  };

  const handleEditMobileNumber = () => {
    // Navigate to the mobile number screen
    navigation.navigate('Mobile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Enter the 4-digit code sent to your mobile number</Text>
      </View>
      <View style={styles.otpContainer}>
        <View style={styles.circleInput}>
          <TextInput
            style={styles.input}
            placeholder="-"
            keyboardType="numeric"
            value={otp.charAt(0)}
            onChangeText={(text) => setOTP(text + otp.slice(1))}
          />
        </View>
        <View style={styles.circleInput}>
          <TextInput
            style={styles.input}
            placeholder="-"
            keyboardType="numeric"
            value={otp.charAt(1)}
            onChangeText={(text) => setOTP(otp.charAt(0) + text + otp.charAt(2))}
          />
        </View>
        <View style={styles.circleInput}>
          <TextInput
            style={styles.input}
            placeholder="-"
            keyboardType="numeric"
            value={otp.charAt(2)}
            onChangeText={(text) => setOTP(otp.slice(0, 2) + text + otp.charAt(3))}
          />
        </View>
        <View style={styles.circleInput}>
          <TextInput
            style={styles.input}
            placeholder="-"
            keyboardType="numeric"
            value={otp.charAt(3)}
            onChangeText={(text) => setOTP(otp.slice(0, 3) + text)}
          />
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleOTPVerification}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editMobileButton} onPress={handleEditMobileNumber}>
        <Text style={styles.editMobileButtonText}>Edit Mobile Number</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  headerContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    bottom:20
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  circleInput: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    width: '100%',
    height: '100%',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  editMobileButton: {
    marginTop: 10,
  },
  editMobileButtonText: {
    color: 'blue',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default OTPScreen;
