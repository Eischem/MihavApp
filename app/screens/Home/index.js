import React from 'react';
import {View, FlatList} from 'react-native';
import {Button, Header} from '../../components';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const butons = [
    {
      name: 'Haberler',
      icon: 'Home',
      onPress: () => {
        navigation.navigate('news-stack');
      },
    },
    {
      name: 'Hakkımızda',
      icon: 'About',
      onPress: () => {
        navigation.navigate('about-stack');
      },
    },
    {
      name: 'Üniteler',
      icon: 'Inbox',
      onPress: () => {
        navigation.navigate('units-stack');
      },
    },
    {
      name: 'Dostalara Hediye',
      icon: 'Gift',
      onPress: () => {
        navigation.navigate('gift-stack');
      },
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={butons}
        renderItem={({item}) => (
          <View style={styles.renderItem}>
            <Button
              preset="secondary"
              text={item.name}
              icon={item.icon}
              onPress={item.onPress}
            />
          </View>
        )}
      />
    </View>
  );
};
