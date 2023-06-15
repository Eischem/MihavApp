import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {TopBar, Header, Menu} from '../../components';
import styles from './styles';

const imageListForAnnouncement = [
  {id: 6, imageSource: require('../../../assets/images/images6.jpg')},
  {id: 4, imageSource: require('../../../assets/images/images4.jpg')},
  {id: 5, imageSource: require('../../../assets/images/images5.jpg')},
  {id: 7, imageSource: require('../../../assets/images/images7.jpg')},
  {id: 8, imageSource: require('../../../assets/images/images8.jpg')},
];
const imageListForNews = [
  {id: 8, imageSource: require('../../../assets/images/images8.jpg')},
  {id: 1, imageSource: require('../../../assets/images/images1.jpg')},
  {id: 2, imageSource: require('../../../assets/images/images2.jpg')},
  {id: 3, imageSource: require('../../../assets/images/images3.jpg')},
  {id: 7, imageSource: require('../../../assets/images/images7.jpg')},
];

export const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headers}>
          <Header />
        </View>
        <TopBar title="Haberler" />
        <Menu imageList={imageListForNews} />
        <TopBar title="Duyurular" />
        <Menu imageList={imageListForAnnouncement} />
      </ScrollView>
    </View>
  );
};
