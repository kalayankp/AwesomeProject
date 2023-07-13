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
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState(null);
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
        fetch('http://192.168.1.5:7000/users/registerMobile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobile: mobileNumber,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                let otp = data.data.OTP;
                let newOTP = otp.toString();
                console.log('', data.id);
                alert(otp);
                if (data.status == true) {
                    navigation.navigate('OTP', { itemId: data.id });
                }
            })
            .catch((error) => console.error(error));
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

    const validateMobileNumber = (number) => {
        const mobileNumberRegex = /^[0-9]{10}$/;
        return mobileNumberRegex.test(number);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Animated.Text style={[styles.logo, animatedStyles]}>Login</Animated.Text>
                    <Text style={styles.description}>Enter your mobile number to continue</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.countryCodeContainer}>
                        <Text style={styles.countryCodeText}>+91</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile Number"
                        keyboardType="numeric"
                        value={mobileNumber}
                        maxLength={10}
                        onChangeText={(text) => {
                            setMobileNumber(text);
                            if (!validateMobileNumber(text)) {
                                setError('Invalid mobile number');
                            } else {
                                setError(null);
                            }
                        }}
                    />
                    {error && <Text style={styles.errorText}>{error}</Text>}
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
                        style={[styles.button, { backgroundColor: termsAccepted ? 'blue' : '#ccc' }]}
                        onPress={handleLogin}
                        activeOpacity={0.8}
                        disabled={!termsAccepted || !validateMobileNumber(mobileNumber)}
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
                            NEXT
                        </Animated.Text>
                    </TouchableOpacity>
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
        top: -16,
    },
    inputContainer: {
        width: '80%',
    },
    description: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
    },
    countryCodeContainer: {
        position: 'absolute',
        top: 1,
        left: 10,
        zIndex: 1,
    },
    countryCodeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 8
    },
    input: {
        height: 50,
        marginBottom: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 45, // Adjust the padding to accommodate the country code
        fontSize: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        bottom: 10,
        marginLeft: 10,
        alignContent: 'flex-end'
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
    checkmark: {
        color: '#333',
        fontSize: 14,
    },
    termsText: {
        fontSize: 14,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        marginBottom: 40,
        bottom: 20,
        marginLeft: 20
    },
});

export default LoginScreen;
