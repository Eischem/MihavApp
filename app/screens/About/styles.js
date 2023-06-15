import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.powderBlue,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: sizes.width,
    paddingHorizontal: 10,
  },
});
