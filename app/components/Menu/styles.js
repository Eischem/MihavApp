import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

const IMAGE_WIDTH = sizes.width - 10;
const IMAGE_HEIGHT = 0.75 * IMAGE_WIDTH;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: IMAGE_WIDTH,
    height: 250,
    marginTop: 10,
  },
  imageContainer: {
    width: IMAGE_WIDTH,
    height: 260,
    overflow: 'hidden',
  },
  image: {
    flex: 0.75,
    height: 200,
    width: IMAGE_WIDTH,
    resizeMode: 'cover',
  },
  topIcons: {
    position: 'absolute',
    top: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    transform: [{translateY: -IMAGE_HEIGHT / 2}],
  },
  imageText: {
    height: 60,
    flex: 0.25,
    backgroundColor: colors.lightGray,
  },
});
