import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

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
  content: {
    flexDirection: 'row',
    width: sizes.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  supportText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
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
    marginVertical: 30,
  },
  buttonText: {
    color: colors.powderBlue,
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
  },
  warnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.red,
    marginVertical: 20,
  },
  stockText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stockContainer: {
    flexDirection: 'row',
    width: sizes.width * 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    padding: 15,
    backgroundColor: colors.green,
  },
  valueContainer: {
    backgroundColor: colors.orange,
    padding: 10,
    color: colors.white,
  },
});
