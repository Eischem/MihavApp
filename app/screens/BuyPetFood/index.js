import React from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import {TopBar, Container, Button} from '../../components';
import {appConfig} from '../../utils/appConfig';
import styles from './styles';
import {colors} from '../../utils/theme';

const StockContainer = () => {
  return (
    <View style={styles.stockContainer}>
      <Text style={styles.stockText}>STOK DOLULUK ORANI</Text>
      <Text style={[styles.stockText, styles.valueContainer]}>%50</Text>
    </View>
  );
};
const openWebsite = url => {
  Linking.openURL(url)
    .then(res => console.log('Website opened successfully'))
    .catch(err => console.error('An error occurred', err));
};

export const BuyPetFoodScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar title="MAMA SATIN AL" leftIcon="Left" rightIcon={'MihavIcon'} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Container
          child={<Text style={styles.supportText}>MAMA SATIN ALMA</Text>}
          style={{backgroundColor: colors.orange}}
        />
        <Container
          child={
            <Text style={styles.contactText}>{appConfig.howShouldIDonate}</Text>
          }
        />
        <Text style={styles.warnText}>DİKKAT EDİLMESİ GEREKENLER</Text>
        <Container
          child={
            <Text style={styles.contactText}>{appConfig.contactForDonate}</Text>
          }
        />
        <StockContainer />
        <Container
          child={
            <Button
              style={styles.button}
              text={'MAMA SATIN AL'}
              textStyle={styles.buttonText}
              onPress={() => openWebsite(appConfig.linkForBuyFood)}
            />
          }
        />
      </ScrollView>
    </View>
  );
};
