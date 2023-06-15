import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TopBar, Container, Header} from '../../components';
import {appConfig} from '../../utils/appConfig';
import styles from './styles';
import {colors} from '../../utils/theme';

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TopBar title="Hakkımızda" />
      <ScrollView>
        <Container
          child={<Text style={{color: colors.black}}>{appConfig.aboutUs}</Text>}
        />
      </ScrollView>
    </View>
  );
};
