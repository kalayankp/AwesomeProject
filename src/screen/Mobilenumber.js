import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert,
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';


const Mobilenumber = ({navigation}) => {
  const handleContinue = () => {
    navigation.navigate('OTP');
  };
 
  const [mobilenumber, setmobilenumber] = useState('');
  const [error, setError] = useState(null);
 
  const [shakingAnimation] = useState(new Animated.Value(0));

 

 


  const validateMobilenumber = (Mobilenumber) => {
    

    const MobilenumberRegex = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
    return MobilenumberRegex.test(Mobilenumber);

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
        style={(styles.input)}
        placeholder="Enter your mobile number"
        keyboardType="number-pad"
        onChangeText={(text) => {

          setmobilenumber(text);

          if (!validateMobilenumber(text)) {

            setError('Invalid Mobilenumber address');

          } else {

            setError(null);

          }

        }}
        
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
     
     
      </Animated.View>
    
      <TouchableOpacity style={{width: '50%',
      height: 50,
      borderRadius: 25,
      backgroundColor: '#007aff',
      justifyContent: 'center',
      alignItems: 'center',
      top:34}} onPress={handleContinue}>
        <Text style={styles.loginButtonText}>Continue</Text><FontAwesome name="arrow-right" size={20} color='white' style={{marginLeft:123,bottom:13}}/>
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
    top:34
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
    top:8
  },
  forgotPasswordText: {
    color: '#007aff',
  marginLeft:204,
    marginRight:10,
    alignContent:'center',
    fontSize:16  ,
    bottom:20  
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

export default Mobilenumber;