import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {NewsScreen} from '../screens';

const NewsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="news-screen" component={NewsScreen} />
    </Stack.Navigator>
  );
};
export default NewsStack;
