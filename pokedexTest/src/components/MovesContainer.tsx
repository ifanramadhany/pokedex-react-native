/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import rootStore from '../stores/_RootStore';
import {Observer} from 'mobx-react';
import {COLORS, responsiveWidth} from '../utils';
import {MovesProps, IndexProps} from '../ts/types';

const MovesContainer = () => {
  const {pokemonStore} = rootStore;

  return (
    <Observer>
      {() => (
        <ScrollView style={styles.container}>
          {pokemonStore.pokemonDetail.moves.map(
            (item: MovesProps, index: IndexProps) => {
              return (
                <View key={index} style={styles.aboutCard}>
                  <Text style={styles.text}>{item.move.name}</Text>
                </View>
              );
            },
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
  text: {
    width: '100%',
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(13),
    textAlign: 'center',
    textShadowColor: COLORS.yellow,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    color: COLORS.light_blue,
    textTransform: 'capitalize',
  },
});

export default MovesContainer;
