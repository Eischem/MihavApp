import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  supportText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    width: sizes.width * 0.9,
    marginTop: 30,
    backgroundColor: colors.pink,
  },
  unitContainer: {
    backgroundColor: colors.gray,
    flexDirection: 'row',
    width: sizes.width - 10,
    height: 75,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  unitText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: sizes.base,
  },
  valueContainer: {
    padding: 10,
    color: colors.white,
  },
});
