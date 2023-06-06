/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import {View, Text, ScrollView, ActivityIndicator, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TopBar, Container, Header} from '../../components';
import {appConfig} from '../../utils/appConfig';
import styles from './styles';
import {colors, sizes} from '../../utils/theme';

const unitTitles = ['Yem Miktarı', 'Su Miktarı', 'Nem', 'Sıcaklık'];

const LimitBar = ({value = 0, barColor}) => {
  const width = 200;
  const height = 15;
  const per = (value / 100) * width;
  const len = Math.floor((per / 100) * width) / 2;
  if (value > 100) {
    return <Text style={{position: 'absolute', right: 0}}>hatalı değer</Text>;
  }
  return (
    <View
      style={{
        position: 'absolute',
        right: 0,
        width: width,
        backgroundColor: colors.gray,
        height: height,
        borderRadius: 20,
      }}>
      <View
        style={{
          width: len,
          height: height,
          borderRadius: 20,
          backgroundColor: barColor || colors.blue,
        }}
      />
    </View>
  );
};
const UnitContainer = ({unit, index}) => {
  if (!unit) return <ActivityIndicator />;

  return (
    <View style={{width: 350, padding: sizes.base / 2}}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: sizes.base,
        }}>
        {unit.konum}
      </Text>
      <View style={styles.rows}>
        <Text>{unitTitles[0]} : </Text>
        <Text style={{color: 'black'}}>{unit.yemmesafe}</Text>
        <LimitBar value={unit.yemmesafe} barColor={colors.green} />
      </View>
      <View style={styles.rows}>
        <Text>{unitTitles[1]} : </Text>
        <Text style={{color: 'black'}}>{unit.sumesafe}</Text>
        <LimitBar value={unit.sumesafe} barColor={colors.indigo} />
      </View>
      <View style={styles.rows}>
        <Text>{unitTitles[2]} : </Text>
        <Text style={{color: 'black'}}>{unit.nem.toString().slice(0, 5)}</Text>
        <LimitBar value={unit.nem} barColor={colors.blue} />
      </View>
      <View style={styles.rows}>
        <Text>{unitTitles[3]} : </Text>
        <Text style={{color: 'black'}}>
          {unit.sicaklik.toString().slice(0, 5)}
        </Text>
        <LimitBar value={unit.sicaklik} barColor={colors.darkOrange} />
      </View>
    </View>
  );
};

export const UnitsScreen = () => {
  const navigation = useNavigation();
  const [unit, setUnit] = useState(null);

  const rightIconPress = () => {
    navigation.navigate('gift-stack');
  };

  useEffect(() => {
    // unite1 ve unite2 birimlerini çekmek için sorgu
    database()
      .ref('unite')
      .once('value')
      .then(snapshot => {
        const uniteData = snapshot.val();
        const uniteKeys = Object.keys(uniteData);

        // unite1 ve unite2 birimlerinin listesini al - ileriye dönük kullanılabilir
        // const uniteList = uniteKeys.filter(key => key.includes('unite'));

        // unite1 biriminin son değerini al
        const unite1Data = uniteData[uniteKeys[0]];
        const unite1Keys = Object.keys(unite1Data);
        const unite1LastKey = unite1Keys[0];
        const unite1LastValue = unite1Data[unite1LastKey];

        const unite2Data = uniteData[uniteKeys[1]];
        const unite2Keys = Object.keys(unite2Data);
        const unite2LastKey = unite2Keys[0];
        const unite2LastValue = unite2Data[unite2LastKey];

        if (unite1LastValue && unite2LastValue) {
          setUnit([unite1LastValue, unite2LastValue]);
        }
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
      <Header />
      <TopBar
        title="ÜNİTELER"
        leftIcon="Left"
        rightIcon={'Gift'}
        rightIconPress={rightIconPress}
      />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Container
          child={
            <Text style={styles.supportText}>{appConfig.howCanIUseUnits}</Text>
          }
          style={styles.infoContainer}
        />

        {unit ? (
          unit.map((item, index) => {
            return (
              <Container
                key={index}
                child={<UnitContainer unit={item} index={index} />}
              />
            );
          })
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
    </View>
  );
};
