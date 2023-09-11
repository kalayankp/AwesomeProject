import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import React, { Component, useEffect, useState } from 'react';

import { useQuery, gql } from '@apollo/client';



const COUNTRY_QUERY = gql`
  query Countries {
    countries {
      name
      code
      capital
      currency
      native
      emoji
      code
      
    }
  }
`

export default function Home() {
  const { data, loading } = useQuery(COUNTRY_QUERY)
  console.log('GraphQL is ===', data)

  const renderItem = ({ item }) => (
    <View style={styles.countryContainer}>
      <Text style={styles.countryName}>{item.name}</Text>
      <Text>Code: {item.code}</Text>
      <Text>Capital: {item.capital}</Text>
      <Text>Currency: {item.currency}</Text>
      <Text>Native: {item.native}</Text>
      <Text>emoji: {item.emoji}</Text>
      <Text>Code: {item.code}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={styles.heading}>GraphQL ----</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data.countries}
          renderItem={renderItem}
          keyExtractor={(item) => item.code}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 38,
    justifyContent: 'center',
  },
  countryContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  flagImage: {
    width: 100,
    height: 60,
    marginTop: 10,
  },
});
