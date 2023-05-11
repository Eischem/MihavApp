import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsStack from './news-stack';
import AboutStack from './about-stack';
import GiftStack from './gift-stack';
import UnitsStack from './units-stack';
import {HomeScreen, SplashScreen} from '../screens';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash-screen" component={SplashScreen} />
        <Stack.Screen name="home-screen" component={HomeScreen} />
        <Stack.Screen name="news-stack" component={NewsStack} />
        <Stack.Screen name="about-stack" component={AboutStack} />
        <Stack.Screen name="gift-stack" component={GiftStack} />
        <Stack.Screen name="units-stack" component={UnitsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
