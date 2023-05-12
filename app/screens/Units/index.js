import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TopBar, Container, Header, Icon} from '../../components';
import {appConfig} from '../../utils/appConfig';
import styles from './styles';
import {colors, sizes} from '../../utils/theme';

const colorPalette = [colors.indigo, colors.darkOrange, colors.blue];

const unitTitles = ['Yem Miktarı', 'Su Miktarı', 'Nem', 'Sıcaklık'];

const unitInfos = [
  {id: 0, location: 'Kültür'},
  {id: 1, location: 'Bosna'},
  {id: 2, location: 'Kampüs'},
];

const UnitContainer = ({unit, index}) => {
  return (
    <View style={{width: 300, padding: sizes.base}}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: sizes.base,
        }}>
        {unitInfos[index].location}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text>{unitTitles[0]} : </Text>
        <Text style={{color: 'black'}}>{unit.yemmesafe}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>{unitTitles[1]} : </Text>
        <Text style={{color: 'black'}}>{unit.sumesafe}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>{unitTitles[2]} : </Text>
        <Text style={{color: 'black'}}>{unit.nem.slice(0, 5)}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>{unitTitles[3]} : </Text>
        <Text style={{color: 'black'}}>{unit.sicaklik.slice(0, 5)}</Text>
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
    const dbRef = database().ref('unite');
    dbRef.on('value', snapshot => {
      const data = snapshot.val();
      const lastUnit = data[Object.keys(data).pop()];
      setUnit(lastUnit);
    });

    return () => dbRef.off('value');
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
          unitInfos.map((item, index) => {
            return (
              <Container
                key={index}
                child={<UnitContainer unit={unit} index={index} />}
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
