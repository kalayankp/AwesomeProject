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
import DateTimePicker from '@react-native-community/datetimepicker';
import Fontisto from 'react-native-vector-icons/Fontisto'





const roles = [
  'Select Gender',
  'Male',
  'Female',
  'Other ',
  
];


const Login = ({navigation}) => {

  const handleContinue = () => {
    navigation.navigate('Address');
  };
  const [firstname, setfirstname] = useState('');
  const [middlename, setmiddlename] = useState('');
  const [lastname, setlastname] = useState('');
  const [error4, setError4] = useState('');
    const [address, setAddress] = useState('');
    const [mydate, setDate] = useState(new Date());
    const [displaymode, setMode] = useState('date');
    const [isDisplayDate, setShow] = useState(false);

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
 const displayDatepicker = () => {
    showMode('date');

 };
 console.log('-----',mydate);
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
          onChangeText={setfirstname}
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
          onChangeText={setmiddlename}
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
          onChangeText={setlastname}
        />
            {error4? <Text style={{ color: 'red' }}>{error4}</Text> : null}
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
           onValueChange={onRoleChange}>
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
        <Text style={styles.text}>Select Date Of Birth</Text>
        {isDisplayDate && (
                  <DateTimePicker                 
                     testID="dateTimePicker"
                     value={mydate}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate}        
                  />
         )}
         <Fontisto name='date'size={25} onPress={displayDatepicker} style={{marginLeft:258,bottom:12}} />
      </Animated.View>
    
    <TouchableOpacity style={{ width: '50%',height: 50,borderRadius: 25,backgroundColor: '#007aff',justifyContent: 'center',alignItems: 'center',bottom:6}} onPress={handleContinue}>
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
    top:13
    
  
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