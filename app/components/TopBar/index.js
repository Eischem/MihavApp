import React from 'react';
import {View, Text} from 'react-native';
import {Button, Container} from '../';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export const TopBar = ({
  title,
  leftIcon,
  rightIcon,
  leftIconPress,
  rightIconPress,
}) => {
  const navigation = useNavigation();
  leftIconPress = leftIconPress || (() => navigation.goBack());

  return (
    <View styles={styles.header}>
      <View style={styles.container}>
        {leftIcon && (
          <Button
            style={styles.leftButton}
            icon={leftIcon}
            onPress={leftIconPress}
          />
        )}
        <Container child={<Text style={styles.titleText}>{title}</Text>} />
        {rightIcon && (
          <Button
            style={styles.rightButton}
            icon={rightIcon}
            onPress={rightIconPress}
          />
        )}
      </View>
    </View>
  );
};
