/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../utils';
import SkeletonLoading from './SkeletonLoading';

const LoadingCard = () => {
  return (
    <View style={styles.wrapperSkeleton}>
      <SkeletonLoading
        width={'100%'}
        borderRadius={0}
        height={'100%'}
        backgroundColorHex={undefined}
        foregroundColorHex={undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperSkeleton: {
    width: '50%',
    height: responsiveHeight(130),
    padding: responsiveWidth(4),
  },
});

export default LoadingCard;
