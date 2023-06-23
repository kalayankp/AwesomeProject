import React, { useState ,useEffect} from 'react';
import { View, TextInput, Button, Alert,  Animated, StyleSheet,TouchableOpacity,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OTPVerificationScreen = ({ navigation, route }) => {

  const [otp, setOTP] = useState('');
  const [remainingTime, setRemainingTime] = useState(60); 

  const [shakingAnimation] = useState(new Animated.Value(0));



  const handleContinue = () => {
    navigation.navigate('Login');
  };
  useEffect(() => {
    // Start the countdown
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval); // Stop the countdown when the remaining time reaches 0
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Format the remaining time as mm:ss
  const formattedTime = `${Math.floor(remainingTime / 60)
    .toString()
    .padStart(2, '0')}:${(remainingTime % 60).toString().padStart(2, '0')}`;
 
  const Sendotp = () =>{
    
  } 
  return (
    <View style={styles.container}>
            <Text style={{ color:'black',position: 'relative',fontSize:18, bottom:83}}>Enter otp Sent To Registered Mobile number!</Text>
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

       <Text style={styles.timerText}>{formattedTime}</Text>

       <TouchableOpacity style={{width: '50%',
      height: 50,
      borderRadius: 25,
      backgroundColor: '#007aff',
      justifyContent: 'center',
      alignItems: 'center',
      top:34}} onPress={handleContinue}>
        <Text style={styles.loginButtonText}>Verify OTP</Text><FontAwesome name="arrow-right" size={20} color='white' style={{marginLeft:123,bottom:13}}/>
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
      top:3
     
    },
    timerText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 2,
      marginLeft:184,
      bottom:12
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
      top:24
    },
    loginButtonText: {
      fontSize: 18,
      color: '#fff',
      top:8
    },
    
  
    
    loginButton: {
      width: '50%',
      height: 50,
      borderRadius: 25,
      backgroundColor: '#007aff',
      justifyContent: 'center',
      alignItems: 'center',
   
    },
    forgotPasswordText: {
      color: '#007aff',
    marginLeft:204,
      marginRight:10,
      alignContent:'center',
      fontSize:16,
      bottom:20  
    },
  
  
  });
export default OTPVerificationScreen;