import React, { useState } from 'react';
import { View, Text, Image, Animated, TouchableOpacity, StyleSheet ,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
  
  const navigation = useNavigation();
  const [showMore, setShowMore] = useState(false);
  const [shakingAnimation] = useState(new Animated.Value(0));
  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  
  const HandleEdit = () => {
    navigation.navigate('Edit Profile');
  };

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollContainer}
    >
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('./img/profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>John </Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.labelText}> Email   </Text>
          <Text style={styles.valueText}>XYZ@example.com</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.labelText}>Phone</Text>
          <Text style={styles.valueText}>1234567890</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.labelText}>Location</Text>
          <Text style={styles.valueText}>Bangalore</Text>
        </View>
      
        {showMore && (
          <>
            <View style={styles.infoItem}>
              <Text style={styles.labelText}>Virtual Account No</Text>
              <Text style={styles.valueText}>1234567890</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.labelText}>IFSC Code</Text>
              <Text style={styles.valueText}>ABC1234567</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.labelText}>MMID</Text>
              <Text style={styles.valueText}>98765432</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.labelText}>KYC Status</Text>
              <Text style={styles.valueText}>Verified</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.labelText}>Nominee Details</Text>
              <Text style={styles.valueText}>John Doe, Relationship: Son</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.labelText}>Registration Date and Time</Text>
              <Text style={styles.valueText}>2023-01-01 10:00 AM</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.labelText}>Last Login Date and Time</Text>
              <Text style={styles.valueText}>2023-06-01 08:30 PM</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.labelText}>No. of Login Failures since last Successful login</Text>
              <Text style={styles.valueText}> 2</Text>
            </View>
          </>
        )}
        
        <TouchableOpacity
          style={styles.viewMoreButton}
          onPress={handleViewMore}
        >
          <Text style={styles.viewMoreButtonText}>
            {showMore ? 'View Less' : 'View More'}
          </Text>
          <TouchableOpacity style={styles.editButton} onPress={HandleEdit}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight:23,
    
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color:'white'
  },
  infoContainer: {
    paddingHorizontal: 6,
  },
  
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 16,
  
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  
  },
  valueText: {
    fontSize: 16,
    color: 'black',
    
  },
  editButton: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal:12,
    alignItems: 'center',
    marginTop: 20,
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewMoreButton: {
    alignSelf: 'center',
    marginTop: 20,

  },
  viewMoreButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
   
  },
});

export default ProfileScreen;
