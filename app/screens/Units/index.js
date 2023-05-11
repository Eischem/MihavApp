import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TopBar, Container, Header, Icon} from '../../components';
import {appConfig} from '../../utils/appConfig';
import styles from './styles';
import {colors} from '../../utils/theme';

const colorPalette = [colors.indigo, colors.darkOrange, colors.blue];

const unitTitles = ['Ünite Adı', 'Mama Oranı', 'Su Oranı'];

const unitInfos = [
  {id: 0, location: 'Kültür', food: '%20', water: '%50'},
  {id: 1, location: 'Bosna', food: '%80', water: '%45'},
  {id: 2, location: 'Kampüs', food: '%34', water: '%72'},
];

const UnitContainer = ({itemsText, key}) => {
  return (
    <View style={styles.unitContainer}>
      {itemsText.map((item, index) => (
        <Text style={[styles.unitText, {color: colorPalette[index]}]}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const UnitInfo = ({icon, item, key}) => {
  return (
    <View style={styles.unitContainer}>
      {icon && <Icon icon={icon} />}
      <Text style={[styles.unitText, {color: colorPalette[0]}]}>
        {item.location}
      </Text>
      <Text
        style={[
          styles.unitText,
          styles.valueContainer,
          {backgroundColor: colorPalette[1]},
        ]}>
        {item.food}
      </Text>
      <Text
        style={[
          styles.unitText,
          styles.valueContainer,
          {backgroundColor: colorPalette[2]},
        ]}>
        {item.water}
      </Text>
    </View>
  );
};

export const UnitsScreen = () => {
  const navigation = useNavigation();
  const rightIconPress = () => {
    navigation.navigate('gift-stack');
  };

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
        <UnitContainer itemsText={unitTitles} />
        {unitInfos.map((item, index) => (
          <UnitInfo icon="Unit" item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};
