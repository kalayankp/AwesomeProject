import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CircleIcons = () => {
  const navigation = useNavigation();

  const handleTransferPress = () => {
    navigation.navigate('TransferScreen');
  };

  return (
    <ScrollView horizontal style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleTransferPress} style={styles.circleContainer}>
          <Icon name="line-chart" size={30} color="#333" />
          <Text style={styles.iconLabel}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleContainer}>
          <Icon name="refresh" size={30} color="#333" />
          <Text style={styles.iconLabel}>Recharge</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleContainer}>
          <Icon name="money" size={30} color="#333" />
          <Text style={styles.iconLabel}>Bills</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleContainer}>
          <Icon name="ticket" size={30} color="#333" />
          <Text style={styles.iconLabel}>Tickets</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  circleContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 80,
    height: 80,
    borderRadius: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
  },
  iconLabel: {
    marginTop: 8,
    textAlign: 'center',
  },
});

export default CircleIcons;
