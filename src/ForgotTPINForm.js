import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ForgotTPINForm = () => {
  const [option, setOption] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');

  const handleSendOTP = () => {
    // Logic to send OTP to the user's phone number
    console.log('OTP sent');
  };

  const handleVerifyOTP = () => {
    // Logic to verify the OTP entered by the user
    console.log('OTP verified');
  };

  const handleResetTPIN = () => {
    // Logic to reset the TPIN using the selected option (OTP or Security Question)
    console.log('TPIN reset');
  };

  return (
    <View style={styles.container}>
      <Button title="Reset TPIN using OTP" onPress={() => setOption('otp')} />
      <View style={styles.buttoncontainer}>
     <Button title="Reset TPIN using Security Question" onPress={() => setOption('security')}/>
     </View>

      {option === 'otp' && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          <Button title="Send OTP" onPress={handleSendOTP} />
          <TextInput style={styles.input} placeholder="Enter OTP" />
          <Button title="Verify OTP" onPress={handleVerifyOTP} />
        </>
      )}

      {option === 'security' && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Security Answer"
            value={securityAnswer}
            onChangeText={setSecurityAnswer}
          />

          <Button title="Reset TPIN" onPress={handleResetTPIN} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'space-between',
   
  },
  buttoncontainer: {
    flex: 1,
    padding: 26,
    top:23
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    
  },
});

export default ForgotTPINForm;
