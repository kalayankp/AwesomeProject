import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const ChangeTpinScreen = ({ onNext }) => {
  const handleNext = () => {
    onNext();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change TPIN</Text>

      {/* Old TPIN */}
      <TextInput style={styles.input} placeholder="Old TPIN" secureTextEntry />

      {/* New TPIN */}
      <TextInput style={styles.input} placeholder="New TPIN" secureTextEntry />

      {/* Confirm New TPIN */}
      <TextInput style={styles.input} placeholder="Confirm New TPIN" secureTextEntry />

      {/* Next button */}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangeTpinScreen;
