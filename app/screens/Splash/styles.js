import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.lightGray},
  appTextContainer: {
    position: 'absolute',
    left: '10%',
    top: '20%',
  },
  appText: {
    // fontFamily: 'CaesarDressing-Regular',
    fontWeight: 'bold',
    fontSize: sizes.large * 2,
  },
  pawContainer: {position: 'absolute', left: -100, bottom: -60},
});
