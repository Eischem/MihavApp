import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {GiftScreen, DonateScreen, BuyPetFoodScreen} from '../screens';

const GiftStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="gift-screen" component={GiftScreen} />
      <Stack.Screen name="donate-screen" component={DonateScreen} />
      <Stack.Screen name="buy-pet-food-screen" component={BuyPetFoodScreen} />
    </Stack.Navigator>
  );
};
export default GiftStack;
