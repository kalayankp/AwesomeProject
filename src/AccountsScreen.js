// AddressScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddressScreen = ({ navigation }) => {
  const [doorNumber, setDoorNumber] = useState('');
  const [street, setStreet] = useState('');
  const [locality, setLocality] = useState('');
  const [landmark, setLandmark] = useState('');
  const [village, setVillage] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');

  const handleSaveAddress = () => {
    // Perform any necessary logic here to save the address details
    console.log('Address saved!');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Door Number"
        value={doorNumber}
        onChangeText={setDoorNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Street"
        value={street}
        onChangeText={setStreet}
      />
      <TextInput
        style={styles.input}
        placeholder="Locality"
        value={locality}
        onChangeText={setLocality}
      />
      <TextInput
        style={styles.input}
        placeholder="Landmark"
        value={landmark}
        onChangeText={setLandmark}
      />
      <TextInput
        style={styles.input}
        placeholder="Village / Town / City"
        value={village}
        onChangeText={setVillage}
      />
      <TextInput
        style={styles.input}
        placeholder="Pin Code"
        value={pinCode}
        onChangeText={setPinCode}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />

      <Button title="Save Address" onPress={handleSaveAddress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default AddressScreen;
