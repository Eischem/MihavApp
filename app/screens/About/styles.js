import {StyleSheet} from 'react-native';
import {sizes} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: sizes.width,
    paddingHorizontal: 10,
  },
});
