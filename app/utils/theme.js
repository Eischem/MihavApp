import {Dimensions} from 'react-native';
const sizes = {
  small: 12,
  medium: 14,
  large: 16,
  xlarge: 18,
  font: 14,
  base: 8,
  radius: 20,
  height: Dimensions.get('screen').height,
  width: Dimensions.get('screen').width,
};

const colors = {
  primary: '#FFE7DD',
  orange: '#E19522',
  darkOrange: '#C58019',
  pink: '#D996DB',
  indigo: '#2D2DB9',
  blue: '#18A0FB',
  red: '#A30808',
  green: '#ACE57E',
  gray: '#E5E5E5',
  black: '#000000',
  white: '#FFFFFF',
  lightGray: '#f1f1f1',

  // New Colors
  powderBlue: '#F5F9FF',
  lightBlue: '#7494C2',
  darkBlue: '#36465E',
  buttonBlue: '#7497D9',
};

export {sizes, colors};
