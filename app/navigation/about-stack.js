import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {AboutScreen} from '../screens';

const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="about-screen" component={AboutScreen} />
    </Stack.Navigator>
  );
};
export default AboutStack;
