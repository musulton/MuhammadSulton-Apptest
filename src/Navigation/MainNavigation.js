import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScreenConfigs from './ScreenConfigs';

const Stack = createNativeStackNavigator();

const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {ScreenConfigs.map(item => (
        <Stack.Screen
          name={item.name}
          component={item.component}
          key={item.name}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigation;
