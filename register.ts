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
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handlesignup = () => {
    navigation.navigate('Mobile');
  };

  const [Mobilenumber, setmobilenumber] = useState('');
  const [error, setError] = useState(null);
  const [password, setEnterPassword] = useState('');
  const [error2, setError2] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = async () => {
    
    fetch('http://192.168.1.5:7000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile: Mobilenumber,
        password:password,
      
      }),
    })
      .then((response) => response.json())
      .then ((data)=>{
        console.log(data)
        if(data.status==true){
          alert("Login success !")
          navigation.navigate('Tab');
        }
        else{
          alert(" Invalid Credentials !!!")
        }
      })
      .catch(error => console.error(error));
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

  const validateMobilenumber = (Mobilenumber) => {
    const MobilenumberRegex = /^[0-9]{10}$/;
    return MobilenumberRegex.test(Mobilenumber);
  };

  const Validatepassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const forgotPasswordText = () => {
    // Implement forgot password functionality
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Animated.Text style={[styles.logo, animatedStyles]}>Login</Animated.Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="numeric"
            value={Mobilenumber}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={(text) => {
              if (text.length <= 10) {
                setmobilenumber(text);

                if (!validateMobilenumber(text)) {
                  setError('Invalid Mobile number address');
                } else {
                  setError(null);
                }
              }
            }}
          />
          {error && <Text style={{ color: 'red', bottom: 12 }}>{error}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={(text) => {
              setEnterPassword(text);

              if (!Validatepassword(text)) {
                setError2('Invalid password address');
              } else {
                setError2(null);
              }
            }}
          />
          {error2 && <Text style={{ color: 'red', bottom: 12 }}>{error2}</Text>}
                  
          <TouchableOpacity onPress={forgotPasswordText}>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </TouchableOpacity>


          <View style={styles.termsContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setTermsAccepted(!termsAccepted)}
            >
              {termsAccepted && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
            <Text style={styles.termsText}>I accept the Terms and Conditions</Text>
          </View>
          <TouchableOpacity
            style={[styles.loginButton, !termsAccepted && styles.disabledButton]}
            onPress={handleLogin}
            activeOpacity={0.8}
            disabled={!termsAccepted}
          >
            <Animated.Text
              style={[
                styles.buttonText,
                {
                  opacity: animation,
                  transform: [
                    {
                      translateY: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              Login
            </Animated.Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity onPress={handlesignup}>
              <Text style={styles.signupLink}>Sign up</Text>
            </TouchableOpacity>
          </View>

        
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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
  input: {
    height: 50,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'blue',
    marginLeft: 204,
  bottom:20,
    alignContent: 'center',
    fontSize: 16,
   
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
  checkmark: {
    color: '#333',
    fontSize: 14,
  },
  termsText: {
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft:40
  },
  signupText: {
    fontSize: 16,
    marginRight: 5,
  },
  signupLink: {
    color: 'blue',
    fontSize: 16,
  },
});

export default LoginScreen;
