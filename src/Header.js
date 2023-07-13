import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated ,Image} from 'react-native';
import { MaterialCommunityIcons } from 'vector-icons';
import { useNavigation } from '@react-navigation/native';



const Header = () => {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const shadowOpacity = useRef(new Animated.Value(0)).current;

  const handleSearchFocus = () => {
    setIsFocused(true);
    Animated.timing(shadowOpacity, {
      toValue: 0.4,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleSearchBlur = () => {
    setIsFocused(false);
    Animated.timing(shadowOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleProfilePress = () => {
    Animated.timing(shadowOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      // Add your navigation animation here, e.g., slide transition
      navigation.navigate('Profile', { transition: 'slide' });
    });
  };

  return (
    <Animated.View style={[styles.header, { shadowOpacity }]}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={handleProfilePress} style={styles.menuContainer}>
        <Image source={require('../src/img/menu.png')} style={{ width: 24, height: 24 ,tintColor: 'white',}}/>
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          style={[styles.searchInput, isFocused && styles.focusedInput]}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        <TouchableOpacity style={styles.voiceSearchContainer}>
        <Image source={require('../src/img/voice.png')} style={{ width: 24, height: 24 ,tintColor: 'white',}}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.notificationContainer}>
     <Image source={require('../src/img/notification.png')} style={{ width: 24, height: 24 ,tintColor: 'white',}}/>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    backgroundColor: '#0078D7',
 
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 40,
    paddingHorizontal: 8,
    paddingVertical:8,
    marginRight: 43,
   
  },
  menuContainer: {
    marginRight: 70,
  },
  voiceSearchContainer: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    padding: 4,
    color: 'white',
  },
  focusedInput: {
    borderColor: '#4c669f',
    
  },
  notificationContainer: {
    marginLeft: 20,
  },
});

export default Header;
