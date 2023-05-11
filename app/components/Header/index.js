import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

export const Header = ({
  source = require('../../../assets/images/mihav.png'),
}) => {
  return (
    <View style={styles.trapezoid}>
      <View style={{height: 100}}>
        <Image source={source} style={styles.image} />
      </View>
    </View>
  );
};
