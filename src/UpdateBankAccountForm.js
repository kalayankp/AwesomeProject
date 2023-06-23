import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const UpdateBankAccountForm = () => {
  const [accountName, setAccountName] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [note, setNote] = useState('');

  const handleUpdateBankAccount = () => {
    if (accountNumber !== confirmAccountNumber) {
      // Handle account number mismatch error
      console.log('Account numbers do not match');
      return;
    }

    // Perform the bank account update logic here
    console.log('Bank account updated successfully');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Account Name"
        value={accountName}
        onChangeText={setAccountName}
      />
      <TextInput
        style={styles.input}
        placeholder="Bank Name"
        value={bankName}
        onChangeText={setBankName}
      />
      <TextInput
        style={styles.input}
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Re-enter Account Number"
        value={confirmAccountNumber}
        onChangeText={setConfirmAccountNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="IFSC Code"
        value={ifscCode}
        onChangeText={setIfscCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Note for Wallet Closure"
        value={note}
        onChangeText={setNote}
      />

      <Button title="Update Bank Account" onPress={handleUpdateBankAccount} />
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

export default UpdateBankAccountForm;
