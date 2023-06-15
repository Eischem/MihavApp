import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: colors.powderBlue,
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  supportText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  button: {
    backgroundColor: colors.orange,
    height: 50,
    width: 300,
    maxWidth: 300,
  },
  contactText: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: colors.black,
  },
  bankAccountInfoText: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: colors.red,
  },
});
