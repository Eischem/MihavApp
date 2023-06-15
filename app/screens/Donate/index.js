import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TopBar, Container, Header} from '../../components';
import {appConfig} from '../../utils/appConfig';
import styles from './styles';
import {colors} from '../../utils/theme';

export const DonateScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TopBar title="BAĞIŞ YAP" leftIcon="Left" rightIcon={'gift'} />
      <ScrollView contentContainerStyle={styles.scroll}>
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
