import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Fontisto from 'react-native-vector-icons/Fontisto';

const roles = [
  'Select Gender',
  'Male',
  'Female',
  'Other',
];

const Login = ({ navigation }) => {
  const handleContinue = () => {
    navigation.navigate('Address');
  };

  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [error4, setError4] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [selectedRole, setSelectedRole] = useState('Select Role');

  const [shakingAnimation] = useState(new Animated.Value(0));

  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const onRoleChange = (itemValue) => {
    setSelectedRole(itemValue);
  };

  const handleAddressChange = (text) => {
    setAddress(text);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.inputWrapper,
          { transform: [{ translateX: shakingAnimation }] },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="First Name *"
          value={firstname}
          onChangeText={setFirstname}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.inputWrapper,
          { transform: [{ translateX: shakingAnimation }] },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Middle Name"
          secureTextEntry
          value={middlename}
          onChangeText={setMiddlename}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.inputWrapper,
          { transform: [{ translateX: shakingAnimation }] },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Last Name *"
          secureTextEntry
          value={lastname}
          onChangeText={setLastname}
        />
        {error4 ? <Text style={{ color: 'red' }}>{error4}</Text> : null}
      </Animated.View>

      <Animated.View
        style={[
          styles.inputWrapper,
          { transform: [{ translateX: shakingAnimation }] },
        ]}
      >
        <Picker
          style={styles.input}
          selectedValue={selectedRole}
          onValueChange={onRoleChange}
        >
          {roles.map((role) => (
            <Picker.Item key={role} label={role} value={role} />
          ))}
        </Picker>
      </Animated.View>

      <Animated.View
        style={[
          styles.inputWrapper,
          { transform: [{ translateX: shakingAnimation }] },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Enter Address *"
          value={address}
          onChangeText={handleAddressChange}
          numberOfLines={4}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.inputWrapper,
          { transform: [{ translateX: shakingAnimation }] },
        ]}
      >
   <View style={styles.input}>
   <Text style={styles.textDOB}>Select Date Of Birth</Text>
   <DateTimePickerModal
     isVisible={isDatePickerVisible}
     mode="date"
     onConfirm={handleConfirm}
     onCancel={hideDatePicker}
   />

<View >
<TouchableOpacity onPress={showDatePicker}  >
 <Text style={styles.text}>{`${selectedDate? moment(selectedDate).format("DD/MM/YYYY"):"DD/MM/YYYY"}`}</Text>
</TouchableOpacity>
</View>

 </View>
      </Animated.View>

      <TouchableOpacity
        style={{
          width: '50%',
          height: 50,
          borderRadius: 25,
          backgroundColor: '#007aff',
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 6,
        }}
        onPress={handleContinue}
      >
        <Text style={styles.loginButtonText}>Continue</Text>
        <FontAwesome
          name="arrow-right"
          size={20}
          color="white"
          style={{ marginLeft: 123, bottom: 13 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    top: 47,
  },
  containerview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  inputWrapper: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginBottom: 30,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 4,
  },
  input: {
    fontSize: 18,
    color: '#333',
  },
  text: {
    fontSize: 18,
    color: '#333',
    bottom: 10,
  },
  textDOB: {
    fontSize: 18,
    color: '#333',
    bottom: 10,
  },
  loginButton: {
    width: '50%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
    top: 8,
  },
  error: {
    fontSize: 12,
    top: 12,
  },
  setError: {
    bottom: 23,
  },
});

export default Login;
