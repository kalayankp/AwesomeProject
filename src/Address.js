import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
 
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Picker } from '@react-native-picker/picker';

import { ScrollView } from 'react-native-gesture-handler';





const roles = [
  'Select Bank Account Name',
  'State Bank of India',
  'Central Bank of India',
  'CANARA BANK ',
  'BANK OF BARODA',
  'ICICI Bank ',
  'CANARA BANK ',
  'Punjab National Bank',
];


const Login = ({navigation}) => {

  const handleContinue = () => {
    navigation.navigate('Dob');
  };
  
    const [error4, setError4] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [confirmaccountNumber, setconfirmAccountNumber] = useState('');
    const [ifscCode, setIFSCCode] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
  const [otp, setOTP] = useState('');
  const [selectedRole, setSelectedRole] = useState('Select Role');
  const [shakingAnimation] = useState(new Animated.Value(0));

  const onRoleChange = (itemValue) => {
    setSelectedRole(itemValue);
  };
 
 


  const handleAccountNumberChange = (text) => {
    setAccountNumber(text);
  };
  const  handleconfirmAccountNumberChange= (text) => {
    setconfirmAccountNumber(text);
  };

  const handleIFSCCodeChange = (text) => {
    setIFSCCode(text);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const validateEmail = (email) => {

    const emailRegex = /^[a-zA-Z0-9._%+-]{1,63}@[a-zA-Z0-9.-]{1,63}.[a-zA-Z]{2,63}$/;
    
    return emailRegex.test(email);
    
    };
    const Sendotp = () =>{
    
    } 
  return (
    <ScrollView>
    <View style={styles.container}>
    <Animated.View
        style={[
          styles.inputWrapper,
          { transform: [{ translateX: shakingAnimation }] },
        ]}
      >
      <Picker selectedValue={selectedRole} onValueChange={onRoleChange}>
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
        placeholder="Enter Account Number"
        value={accountNumber}
        onChangeText={handleAccountNumberChange}
        keyboardType="numeric"
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
        placeholder="Confirm Account Number"
        value={confirmaccountNumber}
        onChangeText={handleconfirmAccountNumberChange}
        keyboardType="numeric"
        secureTextEntry
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
        placeholder="Enter IFSC Code"
        value={ifscCode}
        onChangeText={handleIFSCCodeChange}
        autoCapitalize="characters"
      />
            {error4? <Text style={{ color: 'red' }}>{error4}</Text> : null}
      </Animated.View>
      
     
     
      <Animated.View
        style={[
          styles.inputWrapper,
          { transform: [{ translateX: shakingAnimation }] },
        ]}
      >
          <TextInput
           style={styles.input}
        placeholder="Enter Email Address"
        value={email}
       
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => {

            setEmail(text);
  
            if (!validateEmail(text)) {
  
              setError('Invalid email address');
  
            } else {
  
              setError(null);
  
            }
  
          }}
      />
       {error && <Text style={{ color: 'red' }}>{error}</Text>}   
          
      </Animated.View>
      <Animated.View
        style={[
          styles.inputWrapper,
          { transform: [{ translateX: shakingAnimation }] },
        ]}
      >
      <TextInput
       style={(styles.input)}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOTP}
        keyboardType="numeric"
        secureTextEntry
      />
       </Animated.View>

       <TouchableOpacity onPress={Sendotp}>
        <Text style={{ color: '#007aff',
  marginLeft:204,
    marginRight:10,
    alignContent:'center',
    fontSize:16 ,
    bottom:123 }}>OTP Sent to email</Text>
      </TouchableOpacity> 
    <TouchableOpacity style={{ width: '50%',height: 50,borderRadius: 25,backgroundColor: '#007aff',justifyContent: 'center',alignItems: 'center',bottom:30}} onPress={handleContinue}>
        <Text style={styles.loginButtonText}>Continue</Text><FontAwesome name="arrow-right" size={20} color='white' style={{marginLeft:123,bottom:13}}/>
      </TouchableOpacity>
             
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    top:30
  },
  forgotPasswordText: {
    color: '#007aff',
  marginLeft:204,
    marginRight:10,
    alignContent:'center',
    fontSize:18 ,
    bottom:43 
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
    marginBottom: 40,
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
    top:8
  },
  forgotPasswordText: {
    color: 'red',
   
  marginLeft:154,
    marginRight:10,
    alignContent:'center',
    fontSize:18  
  },
  signUpText:{
    height:23,
    top:33,
    marginTop:10,
    color:'black',
    fontSize:18,
  },
  loginButton: {
    width: '50%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
 
  },
error:{
  fontSize:12,
  top:12
},
setError:{
  bottom:23
},
signUpText:{
  height:23,
  bottom:53,
  marginTop:60,
  color:'black',
  fontSize:16,

}, 
});

export default Login;