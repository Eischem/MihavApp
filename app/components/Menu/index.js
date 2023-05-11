import React, {useState, useRef} from 'react';
import {ScrollView, View, Image, TouchableOpacity, Text} from 'react-native';

import styles from './styles';
import {Icon} from '../Icon';

export const Menu = ({imageList}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / styles.imageContainer.width);
    setActiveIndex(index);
  };

  const handlePrevious = () => {
    const index = activeIndex > 0 ? activeIndex - 1 : 0;
    scrollViewRef.current.scrollTo({
      x: index * styles.imageContainer.width,
      animated: true,
    });
    setActiveIndex(index);
  };

  const handleNext = () => {
    const index =
      activeIndex < imageList.length - 1 ? activeIndex + 1 : activeIndex;
    scrollViewRef.current.scrollTo({
      x: index * styles.imageContainer.width,
      animated: true,
    });
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        pagingEnabled
        ref={scrollViewRef}>
        {imageList.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={image.imageSource} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.topIcons}>
        <TouchableOpacity onPress={handlePrevious}>
          <Icon icon="ArrowLeft" width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Icon icon="ArrowRight" width={30} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
