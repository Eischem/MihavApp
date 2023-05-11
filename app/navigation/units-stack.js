import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {UnitsScreen} from '../screens';

const UnitsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="units-screen" component={UnitsScreen} />
    </Stack.Navigator>
  );
};
export default UnitsStack;
