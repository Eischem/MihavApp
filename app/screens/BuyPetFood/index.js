import React from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import {TopBar, Container, Button, Header} from '../../components';
import {appConfig} from '../../utils/appConfig';
import styles from './styles';
import {colors} from '../../utils/theme';

const openWebsite = url => {
  Linking.openURL(url)
    .then(res => console.log('Website opened successfully'))
    .catch(err => console.error('An error occurred', err));
};

export const BuyPetFoodScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TopBar title="MAMA SATIN AL" leftIcon="Left" rightIcon={'gift'} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Container
          child={
            <Text style={styles.contactText}>{appConfig.howShouldIDonate}</Text>
          }
        />
        <Container
          child={
            <Text style={styles.contactText}>{appConfig.contactForDonate}</Text>
          }
        />

        <Button
          style={styles.button}
          text={'MAMA SATIN AL'}
          textStyle={styles.buttonText}
          onPress={() => openWebsite(appConfig.linkForBuyFood)}
        />
      </ScrollView>
    </View>
  );
};
