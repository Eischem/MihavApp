/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import {View, Text, ScrollView, ActivityIndicator, Alert} from 'react-native';
import {TopBar, Container, Header} from '../../components';
import {appConfig} from '../../utils/appConfig';
import styles, {bar_height, bar_width} from './styles';
import {colors, sizes} from '../../utils/theme';

const unitTitles = ['Yem Miktarı', 'Su Miktarı', 'Nem', 'Sıcaklık'];

const calculatePer = (value, limit) => {
  const per = (value / limit) * 100;
  return Math.floor(per);
};

const LimitBar = ({value = 0, barColor, limit}) => {
  const per = calculatePer(value, limit);
  const len = Math.floor((per / 100) * bar_width);

  if (value > limit) {
    return <Text style={{position: 'absolute', right: 0}}>Hatalı değer</Text>;
  }

  return (
    <View style={styles.barContainer}>
      <View
        style={{
          width: len,
          height: bar_height,
          borderRadius: 20,
          backgroundColor: barColor || 'blue',
        }}
      />
    </View>
  );
};
const UnitContainer = ({unit, index}) => {
  if (!unit) {
    return <ActivityIndicator />;
  }

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
        <Text style={{color: 'black'}}>{`%${calculatePer(
          unit.yemmesafe,
          40,
        )}`}</Text>
        <LimitBar value={unit.yemmesafe} barColor={colors.green} limit={40} />
      </View>
      <View style={styles.rows}>
        <Text>{unitTitles[1]} : </Text>
        <Text style={{color: 'black'}}>{`%${calculatePer(
          unit.sumesafe,
          40,
        )}`}</Text>
        <LimitBar value={unit.sumesafe} barColor={colors.indigo} limit={40} />
      </View>
      <View style={styles.rows}>
        <Text>{unitTitles[2]} : </Text>
        <Text style={{color: 'black'}}>{unit.nem.toString().slice(0, 5)}</Text>
        <LimitBar value={unit.nem} barColor={colors.blue} limit={100} />
      </View>
      <View style={styles.rows}>
        <Text>{unitTitles[3]} : </Text>
        <Text style={{color: 'black'}}>
          {unit.sicaklik.toString().slice(0, 5)}
        </Text>
        <LimitBar
          value={unit.sicaklik}
          barColor={colors.darkOrange}
          limit={100}
        />
      </View>
    </View>
  );
};

export const UnitsScreen = () => {
  const [unit, setUnit] = useState(null);

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
      <TopBar title="ÜNİTELER" />

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
