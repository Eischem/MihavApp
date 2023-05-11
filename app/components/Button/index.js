import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Icon} from '../Icon';
import styles from './styles';

export const Button = ({
  preset = 'primary',
  text,
  icon,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[preset === 'primary' ? styles.button : styles.bigButton, style]}
      onPress={onPress}>
      {icon && <Icon icon={icon} />}
      {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
};
