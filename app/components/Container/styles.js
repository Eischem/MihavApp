import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    padding: sizes.radius / 2,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
    minWidth: 110,
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
