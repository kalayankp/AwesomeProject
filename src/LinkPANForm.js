import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LinkPANForm = () => {
  const [panNumber, setPanNumber] = useState('');
  const [panLinked, setPanLinked] = useState(false);

  const handleLinkPAN = () => {
    // Here, you can perform the PAN verification logic against the user's name
    // For simplicity, we'll assume the verification is successful and the PAN is linked
    setPanLinked(true);
  };

  return (
    <View style={styles.container}>
      {panLinked ? (
        <Text style={styles.successText}>PAN already linked</Text>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter PAN Number"
            value={panNumber}
            onChangeText={setPanNumber}
          />

          <Button title="Link PAN" onPress={handleLinkPAN} />
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
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 16,
  },
});

export default LinkPANForm;
