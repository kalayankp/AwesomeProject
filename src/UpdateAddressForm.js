import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const UpdateAddressForm = () => {
  const [allowCaptureAddress, setAllowCaptureAddress] = useState(false);
  const [doorNumber, setDoorNumber] = useState('');
  const [street, setStreet] = useState('');
  const [locality, setLocality] = useState('');
  const [landmark, setLandmark] = useState('');
  const [village, setVillage] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');

  const handleAllowCaptureAddress = () => {
    setAllowCaptureAddress(!allowCaptureAddress);
  };

  return (
    <View style={styles.container}>
      <View style={styles.optionContainer}>
        <Text style={styles.label}>Allow Capture of Current Address</Text>
        <Switch
          value={allowCaptureAddress}
          onValueChange={handleAllowCaptureAddress}
        />
      </View>

      <Text style={styles.label}>Door Number:</Text>
      <TextInput
        style={styles.input}
        value={doorNumber}
        onChangeText={setDoorNumber}
      />

      <Text style={styles.label}>Street:</Text>
      <TextInput
        style={styles.input}
        value={street}
        onChangeText={setStreet}
      />

      <Text style={styles.label}>Locality:</Text>
      <TextInput
        style={styles.input}
        value={locality}
        onChangeText={setLocality}
      />

      <Text style={styles.label}>Landmark:</Text>
      <TextInput
        style={styles.input}
        value={landmark}
        onChangeText={setLandmark}
      />

      {allowCaptureAddress && (
        <>
          <Text style={styles.label}>Village/Town/City:</Text>
          <TextInput
            style={styles.input}
            value={village}
            onChangeText={setVillage}
          />

          <Text style={styles.label}>Pin Code:</Text>
          <TextInput
            style={styles.input}
            value={pinCode}
            onChangeText={setPinCode}
          />

          <Text style={styles.label}>State:</Text>
          <TextInput
            style={styles.input}
            value={state}
            onChangeText={setState}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default UpdateAddressForm;
