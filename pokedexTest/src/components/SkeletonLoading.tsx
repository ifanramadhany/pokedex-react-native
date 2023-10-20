/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {responsiveWidth, responsiveHeight, COLORS} from '../utils';
import ContentLoader, {Rect} from 'react-content-loader/native';

type Percentage = `${number}%` | number | undefined | null;
type HexColor = `#${string}` | undefined | null;

type SkeletonLoadingProps = {
  borderRadius: Percentage;
  width: Percentage;
  height: Percentage;
  backgroundColorHex: HexColor;
  foregroundColorHex: HexColor;
};

const SkeletonLoading = ({
  borderRadius,
  width,
  height,
  backgroundColorHex,
  foregroundColorHex,
}: SkeletonLoadingProps) => {
  return (
    <ContentLoader
      width={width ? width : responsiveWidth(100)}
      height={height ? height : responsiveHeight(100)}
      backgroundColor={
        backgroundColorHex ? backgroundColorHex : COLORS.light_grey
      }
      foregroundColor={foregroundColorHex ? foregroundColorHex : '#eee'}>
      <Rect
        rx={borderRadius ? borderRadius : 0}
        ry={borderRadius ? borderRadius : 0}
        width="100%"
        height="100%"
      />
    </ContentLoader>
  );
};

export default SkeletonLoading;
