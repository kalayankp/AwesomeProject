import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Animated ,Text,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CardWithPANInput = ({navigation}) => {

  const handleContinue = () => {
    navigation.navigate('Address');
  };
  const [panNumber, setPANNumber] = useState('');
 const [error4, setError4] = useState(null);
  const [cardAnimation] = useState(new Animated.Value(0));


    const ValidateEnterPAN = EnterPAN => {
    var pattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    return pattern.test(EnterPAN);
  };
  useEffect(() => {
    Animated.spring(cardAnimation, {
      toValue: 1,
      tension: 10,
      useNativeDriver: true,
    }).start();
  }, []);

  

  const cardTranslateY = cardAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-400, 0],
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: cardTranslateY }] }]}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Enter PAN Number"
          value={panNumber}
           onChangeText={(text) => {

          setPANNumber(text);

          if (!ValidateEnterPAN(text)) {

            setError4('Invalid PAN address');

          } else {

            setError4(null);

          }

        }}
      />
      {error4 && <Text style={{ color: 'red' }}>{error4}</Text>}
      <Text style={styles.loginButtonText}>Continue</Text><FontAwesome name="arrow-right" size={20} color='white' style={{marginLeft:123,bottom:13}}/>
      <TouchableOpacity style={styles.loginButton} onPress={handleContinue}>
        <Text style={styles.loginButtonText}>Continue</Text><FontAwesome name="arrow-right" size={20} color='white' style={{marginLeft:123,bottom:13}}/>
      </TouchableOpacity>
      </View>
    </Animated.View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    height:'50%',
    width:'60%'
  },
  input: {
    height: 40,
    top:30,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 1,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: '50%',
    height: 40,
    borderRadius: 25,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    top:90,
    marginLeft:48
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
    top:8
  },
  setError4:{
     top:34
  },
});

export default CardWithPANInput;
