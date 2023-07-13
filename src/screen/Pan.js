import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Animated, TouchableOpacity, Text } from 'react-native';

const PanCard = ({navigation,route}) => {
  const { item } = route.params;
  // console.log("PAN----",item)
  const [panNumber, setPanNumber] = useState('');
  const [error, setError] = useState(null);
  const [shadowAnimation] = useState(new Animated.Value(1));

  const handlePanChange = (text) => {
    setPanNumber(text);
  };

  const handleFocus = () => {
    Animated.spring(shadowAnimation, {
      toValue: 0.7,
      friction: 6,
      tension: 60,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    Animated.spring(shadowAnimation, {
      toValue: 1,
      friction: 6,
      tension: 60,
      useNativeDriver: false,
    }).start();
  };

  const shadowStyle = {
    shadowOpacity: shadowAnimation.interpolate({
      inputRange: [0.7, 1],
      outputRange: [0.5, 0.7],
    }),
    transform: [
      {
        scale: shadowAnimation.interpolate({
          inputRange: [0.7, 1],
          outputRange: [1.03, 1],
        }),
      },
    ],
  };

  const handleContinue = async () => {
    try {
      const response = await fetch('http://192.168.1.5:7000/users/registerPAN', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: item,
          PAN: panNumber,
        }),
      });

      const data = await response.json();
      if (data.status == true) {
        console.log(''.data)
        navigation.navigate('Register',{ items:data.data.id});
      } else {
        setError('Invalid ');
      }
    } catch (error) {
      console.error("tdrt", error);
    }
    
  };

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Enter PAN </Text>
      <View style={styles.card}>
        <Animated.View style={[styles.cardContent, shadowStyle]}>
          <TextInput
            style={styles.panInput}
            value={panNumber}
            onChangeText={handlePanChange}
            placeholder="Enter PAN number "
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </Animated.View>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        {console.log('---',panNumber)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  card: {
    width: 400,
    height: 300,
    backgroundColor: 'black',
    borderRadius: 20,
    elevation: 6,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    bottom:40
  },
  cardContent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    overflow: 'hidden',
    width: 360,
    top: 40,
    marginLeft: 6
  },
  panInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 80,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    
    
  },
  continueButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 5,
    marginTop: 20,
    top:200
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80,
  },
});

export default PanCard;
