import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {TopBar, Container, Button} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {appConfig} from '../../utils/appConfig';
import styles from './styles';
import {colors} from '../../utils/theme';

const images = [
  {id: 0, imageSource: require('../../../assets/images/images3.jpg')},
  {id: 1, imageSource: require('../../../assets/images/images4.jpg')},
];

export const GiftScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TopBar title="HEDİYE" leftIcon="Left" rightIcon={'MihavIcon'} />
      <ScrollView>
        <Container
          child={
            <Text style={styles.supportText}>
              {appConfig.howToSuppurtProject}
            </Text>
          }
          style={{backgroundColor: colors.orange}}
        />
        <View style={styles.content}>
          {images.map(image => {
            return (
              <Container
                key={image.id}
                child={
                  <Image source={image.imageSource} style={styles.image} />
                }
              />
            );
          })}
        </View>
        <Container
          child={
            <Button
              style={styles.button}
              text={'MAMA SATIN AL'}
              textStyle={styles.buttonText}
              onPress={() => navigation.navigate('buy-pet-food-screen')}
            />
          }
        />
        <Container
          child={
            <Button
              style={styles.button}
              text={'BAĞIŞ YAP'}
              textStyle={styles.buttonText}
              onPress={() => navigation.navigate('donate-screen')}
            />
          }
        />
        <Container
          child={<Text style={styles.contactText}>{appConfig.contactUs}</Text>}
        />
      </ScrollView>
    </View>
  );
};
