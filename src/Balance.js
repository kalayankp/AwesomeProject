import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

const CardAnimation = () => {
  const [balance, setBalance] = useState('$8000');
  const [username, setUsername] = useState('User');


  const checkBalance = () => {
    // Simulating an API call to fetch the updated balance
    setTimeout(() => {
      setBalance('$8500');
    }, 1000);
  };

  const Send = () => {
    // Simulating an API call to fetch the updated balance
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animatable.View
        animation="fadeInDown"
        style={{
          width: 350,
          height: 200,
          backgroundColor: 'grey',
          borderRadius: 10,
          elevation: 4,
          alignItems: 'center',
          justifyContent: 'center',
          transform: [{ perspective: 1000 }, { rotateX: '360deg' }],
        }}
      >
        <Text style={styles.username}>Hi {username}</Text>

        <Text style={styles.balance}>Wallet Balance</Text>
        <Text style={styles.balanceAmount}>{balance}</Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    marginRight:234
  },
  
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom:34
  },
  balanceAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
});

export default CardAnimation;
