/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {COLORS, arrayToString, responsiveWidth} from '../utils';
import rootStore from '../stores/_RootStore';
import {Observer} from 'mobx-react';

const AboutContainer = () => {
  const {pokemonStore} = rootStore;

  return (
    <Observer>
      {() => (
        <ScrollView style={styles.container}>
          <View style={styles.aboutCard}>
            <View style={styles.left}>
              <Text style={styles.leftText}>Name</Text>
            </View>
            <View style={styles.dot}>
              <Text style={styles.dotText}>:</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.rightTextCapitalize}>
                {pokemonStore.pokemonDetail.name}
              </Text>
            </View>
          </View>
          <View style={styles.aboutCard}>
            <View style={styles.left}>
              <Text style={styles.leftText}>Height</Text>
            </View>
            <View style={styles.dot}>
              <Text style={styles.dotText}>:</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.rightText}>
                {pokemonStore.pokemonDetail.height}0 cm
              </Text>
            </View>
          </View>
          <View style={styles.aboutCard}>
            <View style={styles.left}>
              <Text style={styles.leftText}>Weight</Text>
            </View>
            <View style={styles.dot}>
              <Text style={styles.dotText}>:</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.rightText}>
                {pokemonStore.pokemonDetail.weight} kg
              </Text>
            </View>
          </View>
          <View style={styles.aboutCard}>
            <View style={styles.left}>
              <Text style={styles.leftText}>Types</Text>
            </View>
            <View style={styles.dot}>
              <Text style={styles.dotText}>:</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.rightTextCapitalize}>
                {arrayToString(pokemonStore.pokemonDetail.types, 'type')}
              </Text>
            </View>
          </View>
          <View style={styles.aboutCard}>
            <View style={styles.left}>
              <Text style={styles.leftText}>Abilities</Text>
            </View>
            <View style={styles.dot}>
              <Text style={styles.dotText}>:</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.rightTextCapitalize}>
                {arrayToString(pokemonStore.pokemonDetail.abilities, 'ability')}
              </Text>
            </View>
          </View>
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
  left: {
    height: 'auto',
    width: '36%',
  },
  leftText: {
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(13),
    color: COLORS.light_black,
  },
  right: {
    height: 'auto',
    width: '61%',
  },
  rightTextCapitalize: {
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(13),
    color: COLORS.light_black,
    textTransform: 'capitalize',
  },
  rightText: {
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(13),
    color: COLORS.light_black,
  },
  dot: {
    height: 'auto',
    width: '3%',
    marginHorizontal: '1%',
  },
  dotText: {
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(13),
    color: COLORS.light_black,
  },
});

export default AboutContainer;
