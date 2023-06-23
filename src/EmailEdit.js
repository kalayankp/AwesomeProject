import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const ChangeEmailScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // Add your logic for changing email here
  
    return (
      <View style={styles.container}>
        <Input
          placeholder="New Email"
          leftIcon={<Icon name="envelope" size={24} color="black" />}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          leftIcon={<Icon name="lock" size={24} color="black" />}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Change Email" onPress={() => console.log('Email Changed')} />
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
  });
  export default ChangeEmailScreen;
    