import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SplashScreen} from '../screens';
import TabNav from './tab-navigator';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash-screen" component={SplashScreen} />
        <Stack.Screen name="tab-navigator" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
