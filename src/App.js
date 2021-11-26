import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ContactDetails, ContactList} from './Containers';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ContactList} />
        <Stack.Screen name="Details" component={ContactDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
