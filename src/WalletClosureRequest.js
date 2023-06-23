import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const WalletClosureRequest = () => {
  const [selectedReason, setSelectedReason] = useState(null);

  const handleReasonChange = (value) => {
    setSelectedReason(value);
  };

  const handleSubmit = () => {
    // Implement your logic here to handle the wallet closure request
    console.log('Wallet closure requested with reason:', selectedReason);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Wallet Closure Request</Text>
      <Text style={styles.label}>Select Reason for Closure:</Text>
      <DropDownPicker
        items={[
          { label: 'Reason 1', value: 'reason1' },
          { label: 'Reason 2', value: 'reason2' },
          { label: 'Reason 3', value: 'reason3' },
          // Add more reasons as needed
        ]}
        defaultValue={selectedReason}
        placeholder="Select reason"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownMenu}
        onChangeItem={handleReasonChange}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 16,
  },
  dropdown: {
    backgroundColor: '#fafafa',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 4,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownMenu: {
    marginTop: 8,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default WalletClosureRequest;
