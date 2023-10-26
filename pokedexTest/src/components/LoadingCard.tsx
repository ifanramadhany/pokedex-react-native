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
    height: responsiveHeight(16),
    padding: responsiveWidth(1),
  },
});

export default LoadingCard;
