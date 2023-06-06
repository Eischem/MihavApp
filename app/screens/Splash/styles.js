import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.blue},
  appTextContainer: {
    position: 'absolute',
    left: '10%',
    top: '20%',
  },
  appText: {
    // fontFamily: 'CaesarDressing-Regular',
    fontWeight: 'bold',
    fontSize: sizes.large * 3,
    color: colors.indigo,
  },
  pawContainer: {
    position: 'absolute',
    left: 280,
    top: 140,
    zIndex: -1,
    transform: [{rotate: '-5deg'}],
  },
  catImage: {
    height: 500,
    width: 500,
    position: 'absolute',
    bottom: 0,
    left: -50,
  },
});
