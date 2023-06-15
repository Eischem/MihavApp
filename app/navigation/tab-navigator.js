import * as React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsStack from './news-stack';
import AboutStack from './about-stack';
import GiftStack from './gift-stack';
import UnitsStack from './units-stack';
import {colors, sizes} from '../utils/theme';
import {Icon} from '../components';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: styles.bottomContainer,
        headerShown: false,
        tabBarShowLabel: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'news-stack') {
            iconName = focused ? 'news' : 'newsolid';
          } else if (route.name === 'units-stack') {
            iconName = focused ? 'home2' : 'homesolid';
          } else if (route.name === 'gift-stack') {
            iconName = focused ? 'gift' : 'giftsolid';
          } else if (route.name === 'about-stack') {
            iconName = focused ? 'paper' : 'papersolid';
          }
          return <Icon icon={iconName} />;
        },
      })}>
      <Tab.Screen name="news-stack" component={NewsStack} />
      <Tab.Screen name="units-stack" component={UnitsStack} />
      <Tab.Screen name="gift-stack" component={GiftStack} />
      <Tab.Screen name="about-stack" component={AboutStack} />
    </Tab.Navigator>
  );
};
export default TabNav;

const styles = StyleSheet.create({
  bottomContainer: {
    paddingTop: sizes.base,
    backgroundColor: colors.lightBlue,
    margin: 5,
    height: 55,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
