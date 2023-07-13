import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Animated, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Password = ({ navigation, route }) => {
  const { regitemValue } = route.params;
  console.log("password----",regitemValue)
  const [enterPassword, setEnterPassword] = useState('');
  const [error2, setError2] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error3, setError3] = useState(null);

  const [shakingAnimation] = useState(new Animated.Value(0));

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://192.168.1.5:7000/users/registerPwd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: regitemValue,
          password: enterPassword,
        }),
      });

      const data = await response.json();
     
      if (data.status == true) {
        console.log('',data)
        navigation.navigate('Tab',{ Value: data.data.id });

      } else {
        setError3('Invalid ');
      }
    } catch (error) {
      console.error("tdrt", error);
    }
    // if (enterPassword !== confirmPassword) {
    //   Alert.alert('Error', 'Passwords do not match');
    //   return;
    // } else {

    // }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
    return passwordRegex.test(password);
  };

  const validateConfirmPassword = () => {
    const confirmPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
    return confirmPasswordRegex.test(confirmPassword);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inputWrapper, { transform: [{ translateX: shakingAnimation }] }]}>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          onChangeText={(text) => {
            setEnterPassword(text);
            if (!validatePassword(text)) {
              setError2(' invalid password');
            } else {
              setError2(null);
            }
          }}
        />
        {error2 && <Text style={{ color: 'red', top: 10 }}>{error2}</Text>}
      </Animated.View>

      <Animated.View style={[styles.inputWrapper, { transform: [{ translateX: shakingAnimation }] }]}>
        <TextInput
          style={styles.input}
          placeholder="Re-enter password"
          secureTextEntry
          onChangeText={(text) => {
            setConfirmPassword(text);
            if (!validateConfirmPassword(text)) {
              setError3('Invalid password')
              setError3(null);
            }
          }}
        />
        {error3 && <Text style={{ color: 'red', top: 10 }}>{error3}</Text>}
      </Animated.View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSubmit}
        disabled={error2 !== null || error3 !== null}
      >
        <Text style={styles.loginButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    top: 3
  },
  inputWrapper: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginBottom: 20,
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
  input: {
    fontSize: 18,
    color: '#333',
   
  },
  loginButton: {
    width: '50%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    top: 34
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
  }
});

export default Password;
