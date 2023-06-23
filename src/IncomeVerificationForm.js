import React, { useState } from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import Picker from 'react-native-picker-select';

const IncomeVerificationForm = () => {
  const [occupation, setOccupation] = useState('');
  const [income, setIncome] = useState('');

  const handleOccupationChange = (value) => {
    setOccupation(value);
  };

  const handleIncomeChange = (value) => {
    setIncome(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Occupation:</Text>
      <Picker
        selectedValue={occupation}
        style={styles.picker}
        onValueChange={handleOccupationChange}
      >
        <Picker.Item label="House Wife" value="House Wife" />
        <Picker.Item label="Retired" value="Retired" />
        <Picker.Item label="Salaried" value="Salaried" />
        <Picker.Item label="Self Employed" value="Self Employed" />
        <Picker.Item label="Self Employed Professional" value="Self Employed Professional" />
        <Picker.Item label="Student Above 18 years" value="Student Above 18 years" />
        <Picker.Item label="Politicians" value="Politicians" />
        <Picker.Item label="Others" value="Others" />
      </Picker>
     <View>
      <Text style={styles.label}>Select Income:</Text>
      <Picker
        selectedValue={income}
        style={styles.picker}
        onValueChange={handleIncomeChange}
      >
        <Picker.Item label="< 1 Lakh per Annum" value="< 1 Lakh per Annum" />
        <Picker.Item label="Rs 1 to 3 Lakh per Annum" value="Rs 1 to 3 Lakh per Annum" />
        <Picker.Item label="3 Lakh to 10 Lakh per Annum" value="3 Lakh to 10 Lakh per Annum" />
        <Picker.Item label="Rs 10 L to Rs 30 Lakh per Annum" value="Rs 10 L to Rs 30 Lakh per Annum" />
        <Picker.Item label="More than Rs. 30 Lakh per Annum" value="More than Rs. 30 Lakh per Annum" />
      </Picker>
      </View>
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
  picker: {
    height: 40,
    marginBottom: 16,
  },
});

export default IncomeVerificationForm;
