import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TopBar, Container, Header} from '../../components';
import {appConfig} from '../../utils/appConfig';
import styles from './styles';

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TopBar title="Hakkımızda" leftIcon="Left" />
      <ScrollView>
        <Container child={<Text>{appConfig.aboutUs}</Text>} />
      </ScrollView>
    </View>
  );
};
