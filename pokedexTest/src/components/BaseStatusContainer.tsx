/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import * as Progress from 'react-native-progress';
import rootStore from '../stores/_RootStore';
import {Observer} from 'mobx-react';
import {COLORS, responsiveWidth, responsiveHeight} from '../utils';
import {IndexProps, StatProps} from '../ts/types';

const BaseStatusContainer = () => {
  const {pokemonStore} = rootStore;

  function statComponent(stat: number) {
    const statNumber = `0.${stat}`;
    if (stat >= 55) {
      return (
        <>
          <View style={styles.center}>
            <Text
              style={[
                styles.centerText,
                {
                  color: COLORS.green,
                },
              ]}>
              {stat}
            </Text>
          </View>
          <View style={styles.right}>
            {(() => {
              if (stat >= 100) {
                return (
                  <Progress.Bar
                    unfilledColor={COLORS.light_grey}
                    borderColor={COLORS.beige}
                    color={COLORS.green}
                    progress={1}
                    width={null}
                    height={9}
                  />
                );
              } else if (stat >= 55) {
                return (
                  <Progress.Bar
                    unfilledColor={COLORS.light_grey}
                    borderColor={COLORS.beige}
                    color={COLORS.green}
                    progress={Number(statNumber)}
                    width={null}
                    height={9}
                  />
                );
              }
            })()}
          </View>
        </>
      );
    } else {
      return (
        <>
          <View style={styles.center}>
            <Text
              style={[
                styles.centerText,
                {
                  color: COLORS.red,
                },
              ]}>
              {stat}
            </Text>
          </View>
          <View style={styles.right}>
            <Progress.Bar
              unfilledColor={COLORS.light_grey}
              borderColor={COLORS.beige}
              color={COLORS.red}
              progress={Number(statNumber)}
              width={null}
              height={9}
            />
          </View>
        </>
      );
    }
  }

  return (
    <Observer>
      {() => (
        <ScrollView style={styles.container}>
          {pokemonStore.pokemonDetail.stats.map(
            (item: StatProps, index: IndexProps) => (
              <View key={index} style={styles.aboutCard}>
                <View style={styles.left}>
                  <Text style={styles.leftText}>{item.stat.name}</Text>
                </View>
                {statComponent(item.base_stat)}
              </View>
            ),
          )}
        </ScrollView>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.beige,
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
  },
  aboutCard: {
    width: '100%',
    height: 'auto',
    borderBottomColor: COLORS.light_grey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: responsiveHeight(2),
  },
  left: {
    height: 'auto',
    width: '35%',
  },
  leftText: {
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(3),
    color: COLORS.light_black,
    textTransform: 'capitalize',
  },
  right: {
    height: 'auto',
    width: '50%',
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
    fontSize: responsiveWidth(3),
  },
});

export default BaseStatusContainer;
