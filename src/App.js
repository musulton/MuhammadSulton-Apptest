import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ContactDetails, ContactList, ContactForm} from './Containers';
import Constants from './Constants';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Constants.ROUTES.LIST} component={ContactList} />
        <Stack.Screen name={Constants.ROUTES.DETAILS} component={ContactDetails} />
        <Stack.Screen name={Constants.ROUTES.FORM} component={ContactForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
