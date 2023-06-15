import React, {useEffect} from 'react';
import {View, Text, Animated, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Paw from '../../../assets/svg/Paw.svg';
import styles from './styles';
import {appConfig} from '../../utils/appConfig';

export const SplashScreen = () => {
  const navigation = useNavigation();
  const opacity = new Animated.Value(0.4);

  const fadeInOut = Animated.sequence([
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }),
    Animated.timing(opacity, {
      toValue: 0.4,
      duration: 600,
      useNativeDriver: true,
    }),
  ]);

  useEffect(() => {
    Animated.loop(fadeInOut).start();
    setTimeout(() => {
      navigation.navigate('tab-navigator');
      fadeInOut.stop();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.appTextContainer}>
        <Text style={styles.appText}>{appConfig.appName}</Text>
      </View>
      <Image
        style={styles.catImage}
        source={require('../../../assets/images/Cat.png')}
      />
      <Animated.View
        style={[
          {
            opacity: opacity,
          },
          styles.pawContainer,
        ]}>
        <Paw height="100" width="100" />
      </Animated.View>
    </View>
  );
};
