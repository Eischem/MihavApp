import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: colors.powderBlue,
  },
  content: {
    flexDirection: 'row',
    width: sizes.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  supportText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
  image: {
    width: sizes.width / 2.6,
    height: sizes.width / 1.5,
    borderRadius: sizes.radius,
  },
  button: {
    backgroundColor: colors.lightBlue,
    height: 50,
    width: 300,
    maxWidth: 300,
  },
  buttonText: {
    color: colors.powderBlue,
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
