/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import * as Progress from 'react-native-progress';

import {COLORS, responsiveWidth} from '../utils';

const BaseStatusContainer = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Hp</Text>
        </View>
        <View style={styles.center}>
          <Text
            style={[
              styles.centerText,
              {
                color: COLORS.green,
              },
            ]}>
            100
          </Text>
        </View>
        <View style={styles.right}>
          <Progress.Bar
            unfilledColor={COLORS.light_grey}
            borderColor={COLORS.beige}
            color={COLORS.green}
            progress={1}
            width={180}
            height={7}
          />
        </View>
      </View>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Defence</Text>
        </View>
        <View style={styles.center}>
          <Text
            style={[
              styles.centerText,
              {
                color: COLORS.red,
              },
            ]}>
            45
          </Text>
        </View>
        <View style={styles.right}>
          <Progress.Bar
            unfilledColor={COLORS.light_grey}
            borderColor={COLORS.beige}
            color={COLORS.red}
            progress={0.45}
            width={180}
            height={7}
          />
        </View>
      </View>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Special-Attack Super</Text>
        </View>
        <View style={styles.center}>
          <Text
            style={[
              styles.centerText,
              {
                color: COLORS.green,
              },
            ]}>
            65
          </Text>
        </View>
        <View style={styles.right}>
          <Progress.Bar
            unfilledColor={COLORS.light_grey}
            borderColor={COLORS.beige}
            color={COLORS.green}
            progress={0.65}
            width={180}
            height={7}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.beige,
    flex: 1,
    paddingHorizontal: responsiveWidth(13),
  },
  aboutCard: {
    width: '100%',
    height: 'auto',
    borderBottomColor: COLORS.light_grey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: responsiveWidth(17),
  },
  left: {
    height: 'auto',
    width: '33%',
  },
  leftText: {
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(13),
  },
  right: {
    height: 'auto',
    width: '55%',
    justifyContent: 'center',
  },
  center: {
    height: 'auto',
    width: '12%',
    marginRight: '3%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  centerText: {
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(13),
  },
});

export default BaseStatusContainer;
