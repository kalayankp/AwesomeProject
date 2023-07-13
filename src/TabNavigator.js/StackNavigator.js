import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Homepage from '../Homepage';
import SelfScreen from '../SelfScreen';
import TabNavigator from './TavNavigator';
import { StyleSheet } from 'react-native/types';
import ProfileScreen from '../ProfileScreen';
import MobileScreen from '../MobileScreen';
import BankScreen from '../BankScreen';
import ChangeEmailScreen from '../EmailEdit';
import ChangePasswordForm from '../ChangePasswordForm';
import ForgotTPINForm from '../ForgotTPINForm';
import ChangeTPINForm from '../ChangeTPINForm';
import UpdateBankAccountForm from '../UpdateBankAccountForm';
import WalletClosureRequest from '../WalletClosureRequest';
import LinkPANForm from '../LinkPANForm';
import LedgerStatement from '../LedgerStatement';
import AddressScreen from '../AccountsScreen';
import PaymentSettings from '../PaymentSettings';
import Mobilenumber from '../screen/Mobilenumber';
import Otp from '../screen/Otp';
import Register from '../screen/Register';
import PasswordScreen from '../screen/PasswordScreen'
import Pan from '../screen/Pan'
import Dob from '../Dob';
import Address from '../Address'
import Login from '../screen/Login';
import WelcomeScreen from '../WelcomeScreen';


const Stack = createStackNavigator();

function StackNavigator() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: '',headerShown:'false'}}
        />
        <Stack.Screen
          name="Self"
          component={SelfScreen}
          options={{title: '',headerShown:'false'}}
        />
         <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{title: '',headerShown:'false'}}
        />
          <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          
        />

             <Stack.Screen name="Mobile" component={Mobilenumber} options={{
  headerStyle: {
    backgroundColor: '#007AFF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}}/>
 <Stack.Screen name="OTP" component={Otp}   options={{
  
  headerStyle: {
    backgroundColor: '#007AFF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}}/>
 <Stack.Screen name="Password" component={PasswordScreen} options={{
  
  headerStyle: {
    backgroundColor: '#007AFF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}} />
 <Stack.Screen name="PAN" component={Pan} options={{
  
  headerStyle: {
    backgroundColor: '#007AFF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}} />

<Stack.Screen name="Dob" component={Dob} options={{
  
  headerStyle: {
    backgroundColor: '#007AFF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}}/>
<Stack.Screen name="Address" component={Address} options={{
  
  headerStyle: {
    backgroundColor: '#007AFF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}}/>
<Stack.Screen name="Register" component={Register} options={{
  
  headerStyle: {
    backgroundColor: '#007AFF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

}}/>
  <Stack.Screen name="Welcome" component={WelcomeScreen} />
         <Stack.Screen name="MobileScreen" component={MobileScreen} />
         <Stack.Screen name="BankScreen" component={BankScreen} />
         <Stack.Screen name="SelfScreen" component={SelfScreen} />
         <Stack.Screen name="Edit Profile" component={ChangeEmailScreen} />
         <Stack.Screen name="Change Password" component={ChangePasswordForm} />

         <Stack.Screen name="Forgot TPIN" component={ForgotTPINForm} />
         <Stack.Screen name="Change" component={ChangeTPINForm} />
         <Stack.Screen name="Update" component={UpdateBankAccountForm} />
         <Stack.Screen name="Wallet" component={WalletClosureRequest} />
         <Stack.Screen name="LinkPANForm" component={LinkPANForm} />


         <Stack.Screen name="Ledger" component={LedgerStatement} />
         <Stack.Screen name="UpdateAddress" component={AddressScreen} />
          <Stack.Screen name="BankAccount" component={PaymentSettings} />

      </Stack.Navigator>
    
  );
}
export default StackNavigator