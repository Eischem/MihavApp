import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
  },
  flatList: {paddingTop: sizes.xlarge * 3, backgroundColor: colors.lightGray},
  renderItem: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
  },
});
