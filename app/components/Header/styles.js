import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  trapezoid: {
    width: sizes.width * 0.9,
    height: 0,
    borderBottomColor: colors.white,
    borderBottomWidth: 100,
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    marginVertical: 10,
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
});
