import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native';

const LoginScreen = ({ navigation, route }) => {
  const { items } = route.params;
  console.log('register----', items);

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [idProofName, setIdProofName] = useState('');
  const [idProofNumber, setIdProofNumber] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [password, setEnterPassword] = useState('');
  const [error2, setError2] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selected) => {
    const currentDate = selected || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);

    if (currentDate) {
      const day = currentDate.getDate().toString().padStart(2, '0');
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const year = currentDate.getFullYear().toString();

      const formattedDate = `${day}/${month}/${year}`;
      setDob(formattedDate);
    } else {
      setDob('');
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.1.5:7000/users/registerForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: items,
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          gender: gender,
          dob: dob,
          id_proof_name: idProofName,
          id_proof_number: idProofNumber,
          email: email,
        }),
      });
      const data = await response.json();
      console.log();
      if (data.status === true) {
        console.log('', data.id);
        navigation.navigate('Password', { regitemValue: data.data.id });
      } else {
        setError('Invalid error');
      }
    } catch (error) {
      console.error('tdrt', error);
    }
  };

  const handleFocus = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyles = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30],
        }),
      },
    ],
  };

  const validateMobileNumber = (mobileNumber) => {
    const mobileNumberRegex = /^[0-9]{10}$/;
    return mobileNumberRegex.test(mobileNumber);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const forgotPasswordText = () => {
    // Implement forgot password functionality
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]{1,63}@[a-zA-Z0-9.-]{1,63}.[a-zA-Z]{2,63}$/;
    return emailRegex.test(email);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
          <Animated.Text style={[styles.logo, animatedStyles]}></Animated.Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <TextInput
            style={styles.input}
            placeholder="Middle Name"
            value={middleName}
            onChangeText={setMiddleName}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <Picker
            style={styles.input}
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Others" value="female" />
          </Picker>

          <View style={styles.inputContains}>
            <Text style={styles.labeltext}>Select Date of Birth</Text>
            <TouchableOpacity style={styles.input} onPress={showDatePickerModal}>
              <Text style={styles.label}>{dob ? dob : 'DD/MON/YYYY'}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={selectedDate || new Date()}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View>
        
          <Picker
            style={styles.input}
          
            selectedValue={idProofName}
            onValueChange={(itemValue) => setIdProofName(itemValue)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
          <Picker.Item label=" Select ID Proof" value="" />
            <Picker.Item label="Aadhar Card" value="Aadhar Card" />
            <Picker.Item label="Voter Card" value="Voter Card" />
            <Picker.Item label="Others" value="female" />
          </Picker>

          <TextInput
            style={styles.input}
            placeholder="ID Proof Number"
            value={idProofNumber}
            onChangeText={setIdProofNumber}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={(text) => {
              setEmail(text);

              if (!validateEmail(text)) {
                setError('Invalid email address');
              } else {
                setError(null);
              }
            }}
          />
          {error && <Text style={{ color: 'red', marginBottom: 12 }}>{error}</Text>}

          <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

          {error2 && <Text style={{ color: 'red', marginBottom: 12 }}>{error2}</Text>}

         
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 1,
    bottom:30
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    width: '80%',
  },
  inputContains: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    top: 14,
  },
  labeltext: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    top: 4,
  },
  continueButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 5,
    marginTop: 20,
   
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:20
  },
  input: {
    height: 50,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    fontWeight: 'bold',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#333',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#333',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
  },
  termsText: {
    fontSize: 14,
  },
});

export default LoginScreen;
