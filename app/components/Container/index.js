import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export const Container = ({child, style}) => {
  return <View style={[styles.container, style]}>{child}</View>;
};
