import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';
export const bar_width = 200;
export const bar_height = 15;

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
    color: colors.powderBlue,
  },
  infoContainer: {
    width: sizes.width * 0.9,
    marginTop: 30,
    backgroundColor: colors.lightBlue,
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
  rows: {flexDirection: 'row', marginVertical: 4, alignItems: 'center'},
  barContainer: {
    position: 'absolute',
    right: 0,
    width: bar_width,
    backgroundColor: colors.lightGray,
    height: bar_height,
    borderRadius: 20,
  },
});
