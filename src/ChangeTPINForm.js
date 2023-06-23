import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ChangeTPINForm = () => {
  const [oldTPIN, setOldTPIN] = useState('');
  const [newTPIN, setNewTPIN] = useState('');

  const handleChangeTPIN = () => {
    // Perform the TPIN change logic here
    console.log('TPIN changed successfully');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Old TPIN"
        value={oldTPIN}
        onChangeText={setOldTPIN}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="New TPIN"
        value={newTPIN}
        onChangeText={setNewTPIN}
      />

      <Button title="Change TPIN" onPress={handleChangeTPIN} />
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

export default ChangeTPINForm;
