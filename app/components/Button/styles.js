import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
    maxWidth: sizes.width * 0.4,
    height: 45,
    borderRadius: sizes.radius,
    borderWidth: 1,
    borderColor: colors.lightGray,
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    margin: 5,
    backgroundColor: colors.white,
  },
  bigButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.width * 0.4,
    height: sizes.height * 0.2,
    borderRadius: sizes.radius,
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    backgroundColor: colors.white,
  },
});
