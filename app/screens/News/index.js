import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, ScrollView, View} from 'react-native';
import database from '@react-native-firebase/database';
import {TopBar, Header, Menu} from '../../components';
import styles from './styles';

export const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [announcement, setAnnouncement] = useState([]);

  useEffect(() => {
    const duyuruPromise = database().ref('duyuru').once('value');
    const haberPromise = database().ref('haber').once('value');

    Promise.all([duyuruPromise, haberPromise])
      .then(results => {
        const duyuruSnapshot = results[0];
        const haberSnapshot = results[1];

        const duyuruData = duyuruSnapshot.val();
        const duyuruKeys = Object.keys(duyuruData);
        const duyuruList = duyuruKeys.map(key => duyuruData[key]);
        setAnnouncement(duyuruList);

        const haberData = haberSnapshot.val();
        const haberKeys = Object.keys(haberData);
        const haberList = haberKeys.map(key => haberData[key]);
        setNews(haberList);
      })
      .catch(error => {
        Alert.alert(
          'Bir hata oluştu. Lütfen yeniden deneyiniz.',
          error.message,
        );
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headers}>
          <Header />
        </View>

        <TopBar title="Haberler" />
        {news ? <Menu list={news} /> : <ActivityIndicator />}
        <TopBar title="Duyurular" />
        {announcement ? <Menu list={announcement} /> : <ActivityIndicator />}
      </ScrollView>
    </View>
  );
};
