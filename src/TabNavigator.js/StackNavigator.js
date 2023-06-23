import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Homepage from '../Homepage';
import SelfScreen from '../SelfScreen';
import TabNavigator from './TavNavigator';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
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
      </Stack.Navigator>
    
  );
}
export default StackNavigator