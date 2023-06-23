import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Animated, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const OTPVerificationScreen = ({ navigation, route }) => {
    const handleSubmit = () => {
        if (Enterpassword !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }else{
            navigation.navigate('PAN');
        }
    
      };
    const [Enterpassword, setEnterPassword] = useState('');
    const [error2, setError2] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error3, setError3] = useState(null)
    const [otp, setOTP] = useState('');

    const [shakingAnimation] = useState(new Animated.Value(0));

    const Validatepassword = (Enterpassword) => {
        const EnterpasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return EnterpasswordRegex.test(Enterpassword);


    };
    const ValidateConfirmPassword = () => {

        const ConfirmPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return ConfirmPasswordRegex.test(confirmPassword);
    
    
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
                    placeholder="Enter password"
                    secureTextEntry
                    onChangeText={(text) => {

                        setEnterPassword(text);

                        if (!Validatepassword(text)) {

                            setError2('Invalid password address');

                        } else {

                            setError2(null);

                        }

                    }}
                />
                {error2 && <Text style={{ color: 'red' }}>{error2}</Text>}
            </Animated.View>
            <Animated.View
        style={[
          styles.inputWrapper,
          { transform: [{ translateX: shakingAnimation }] },
        ]}
      >
      <TextInput
        style={styles.input}
        placeholder="Re Enter password"
        secureTextEntry
        onChangeText={(text) => {

          setConfirmPassword(text);

          if (!ValidateConfirmPassword(text)) {

            setError3('Invalid password address');

          } else {

            setError3(null);

          }

        }}

      />
      {error3 && <Text style={{ color: 'red' }}>{error3}</Text>}
       </Animated.View>

            <TouchableOpacity style={{
                width: '50%',
                height: 50,
                borderRadius: 25,
                backgroundColor: '#007aff',
                justifyContent: 'center',
                alignItems: 'center',
                top: 34
            }} onPress={handleSubmit}>
                <Text style={styles.loginButtonText}>Continue</Text><FontAwesome name="arrow-right" size={20} color='white' style={{ marginLeft: 123, bottom: 13 }} />
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
        top: 3

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
        top: 24
    },
    loginButtonText: {
        fontSize: 18,
        color: '#fff',
        top: 8
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
        marginLeft: 204,
        marginRight: 10,
        alignContent: 'center',
        fontSize: 16,
        bottom: 20
    },


});
export default OTPVerificationScreen;