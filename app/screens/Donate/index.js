import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TopBar, Container} from '../../components';
import {appConfig} from '../../utils/appConfig';
import styles from './styles';
import {colors} from '../../utils/theme';

export const DonateScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar title="BAĞIŞ YAP" leftIcon="Left" rightIcon={'MihavIcon'} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Container
          child={<Text style={styles.supportText}>BAĞIŞ İŞLEMİ</Text>}
          style={{backgroundColor: colors.orange, width: '95%'}}
        />
        <Container
          child={
            <Text style={styles.contactText}>
              {appConfig.donateInfo + '\n\n' + appConfig.howCanISendDonate}
            </Text>
          }
        />
        <Container
          child={
            <Text style={styles.bankAccountInfoText}>
              {appConfig.bankAccountInfo}
            </Text>
          }
          style={{
            width: '95%',
          }}
        />
        <Container
          child={
            <Text style={styles.contactText}>{appConfig.contactForDonate}</Text>
          }
        />
      </ScrollView>
    </View>
  );
};
