import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

const ChangeEmailScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = () => {
    ImagePicker.showImagePicker({}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error:', response.error);
      } else {
        setSelectedImage(response.uri);
      }
    });
  };

  // Add your logic for changing email here

  return (
    <View style={styles.container}>
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
      <Input
        placeholder="New Email"
        leftIcon={<Image source={require('../src/img/mail.png')} style={styles.icon} />}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        leftIcon={<Image source={require('../src/img/eye.png')} style={styles.icon} />}
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
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
});

export default ChangeEmailScreen;
