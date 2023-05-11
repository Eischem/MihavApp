import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  header: {
    height: 50,
    width: sizes.width,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.width * 0.9,
    height: 50,
  },
  titleText: {
    color: colors.darkOrange,
    fontSize: sizes.large,
    fontWeight: 'bold',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    paddingHorizontal: 15,
    flexDirection: 'row',
    borderRadius: sizes.radius,
    backgroundColor: colors.white,
    elevation: 3,
  },
  leftButton: {
    left: 0,
    position: 'absolute',
  },
  rightButton: {
    right: 0,
    position: 'absolute',
  },
});
