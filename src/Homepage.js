import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  const handleSignup = () => {
    navigation.navigate('Mobile');
  };

  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [error2, setError2] = useState(null);
  const [shakingAnimation] = useState(new Animated.Value(0));

  const handleLogin = async () => {
    // Login logic here
  };

  const validateMobileNumber = (number) => {
    const mobileNumberRegex = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
    return mobileNumberRegex.test(number);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const forgotPasswordText = () => {
    // Forgot password logic here
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black', position: 'relative', fontSize: 26, bottom: 10, marginLeft: 23, color: 'blue' }}>
        Welcome User .... <FontAwesome name="handshake-o" size={25} color="#191970" style={{ bottom: 12, marginRight: 83 }} />
      </Text>

      <Animated.View style={[styles.inputWrapper, { transform: [{ translateX: shakingAnimation }] }]}>
        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          keyboardType="number-pad"
          onChangeText={(text) => {
            setMobileNumber(text);
            if (!validateMobileNumber(text)) {
              setError('Invalid mobile number');
            } else {
              setError(null);
            }
          }}
        />
        {error && <Text style={styles.error}>{error}</Text>}
      </Animated.View>

      <Animated.View style={[styles.inputWrapper, { transform: [{ translateX: shakingAnimation }] }]}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
            if (!validatePassword(text)) {
              setError2('Invalid password');
            } else {
              setError2(null);
            }
          }}
        />
        {error2 && <Text style={styles.error}>{error2}</Text>}
      </Animated.View>

      <TouchableOpacity onPress={forgotPasswordText}>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signUpText}>
        Don't have an account?{' '}
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signUpLink}>Sign up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    
  },
  inputWrapper: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 2,
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
    top: 83,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    width: '50%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    top: 104,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  forgotPasswordText: {
    color: 'blue',
    marginLeft: 154,
    marginRight: 10,
    alignContent: 'center',
    fontSize: 16,
    top: 74,
  },
  signUpText: {
    height: 23,
    top: 103,
    marginTop: 10,
    color: 'black',
    fontSize: 16,
  },
  signUpLink: {
    top: 3,
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 16,
  },
  error: {
    alignContent: 'center',
    color: 'blue',
  },
});

export default Login;
