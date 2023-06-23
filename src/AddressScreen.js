import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Button } from 'react-native';

const UpdateAddressForm = () => {
  const [doorNumber, setDoorNumber] = useState('');
  const [street, setStreet] = useState('');
  const [locality, setLocality] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');

  const handleDoorNumberChange = (value) => {
    setDoorNumber(value);
  };

  const handleStreetChange = (value) => {
    setStreet(value);
  };

  const handleLocalityChange = (value) => {
    setLocality(value);
  };

  const handleLandmarkChange = (value) => {
    setLandmark(value);
  };

  const handleCityChange = (value) => {
    setCity(value);
  };

  const handlePinCodeChange = (value) => {
    setPinCode(value);
  };

  const handleStateChange = (value) => {
    setState(value);
  };

  const handleSave = () => {
    // Implement your logic here to save the address
    console.log('Address saved:', {
      doorNumber,
      street,
      locality,
      landmark,
      city,
      pinCode,
      state,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Add your logic here to implement capture address functionality */}
      <Text style={styles.label}>Door Number:</Text>
      <TextInput
        style={styles.input}
        value={doorNumber}
        onChangeText={handleDoorNumberChange}
      />

      <Text style={styles.label}>Street:</Text>
      <TextInput
        style={styles.input}
        value={street}
        onChangeText={handleStreetChange}
      />

      <Text style={styles.label}>Locality:</Text>
      <TextInput
        style={styles.input}
        value={locality}
        onChangeText={handleLocalityChange}
      />

      <Text style={styles.label}>Landmark:</Text>
      <TextInput
        style={styles.input}
        value={landmark}
        onChangeText={handleLandmarkChange}
      />

      <Text style={styles.label}>Village /Town/City:</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={handleCityChange}
      />

      <Text style={styles.label}>Pin Code:</Text>
      <TextInput
        style={styles.input}
        value={pinCode}
        onChangeText={handlePinCodeChange}
        keyboardType="numeric"
      />

      <Text style={styles.label}>State:</Text>
      <TextInput
        style={styles.input}
        value={state}
        onChangeText={handleStateChange}
      />

      <Button title="Save" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default UpdateAddressForm;
