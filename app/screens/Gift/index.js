import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {TopBar, Container, Button, Header, Icon} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {appConfig} from '../../utils/appConfig';
import styles from './styles';
import {colors, sizes} from '../../utils/theme';

const images = [
  {id: 0, imageSource: require('../../../assets/images/images3.jpg')},
  {id: 1, imageSource: require('../../../assets/images/images4.jpg')},
];

export const GiftScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />

      <TopBar title={appConfig.howToSuppurtProject} />

      <ScrollView>
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

        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Button
            style={styles.button}
            text={'MAMA SATIN AL'}
            textStyle={styles.buttonText}
            onPress={() => navigation.navigate('buy-pet-food-screen')}
          />
          <Button
            style={styles.button}
            text={'BAĞIŞ YAP'}
            textStyle={styles.buttonText}
            onPress={() => navigation.navigate('donate-screen')}
          />
        </View>
      </ScrollView>
    </View>
  );
};
