/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {COLORS, responsiveWidth} from '../utils';

const MovesContainer = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.aboutCard}>
        <Text style={styles.text}>Swords-Dance</Text>
      </View>
      <View style={styles.aboutCard}>
        <Text style={styles.text}>Swords-Dance</Text>
      </View>
      <View style={styles.aboutCard}>
        <Text style={styles.text}>
          Swords-Dance Swords-Dance Swords-Dance Swords-Dance Swords-Dance
          Swords-Dance
        </Text>
      </View>
      <View style={styles.aboutCard}>
        <Text style={styles.text}>Swords-Dance</Text>
      </View>
      <View style={styles.aboutCard}>
        <Text style={styles.text}>Swords-Dance</Text>
      </View>
      <View style={styles.aboutCard}>
        <Text style={styles.text}>Swords-Dance</Text>
      </View>
      <View style={styles.aboutCard}>
        <Text style={styles.text}>
          Swords-Dance Swords-Dance Swords-Dance Swords-Dance Swords-Dance
          Swords-Dance
        </Text>
      </View>
      <View style={styles.aboutCard}>
        <Text style={styles.text}>Swords-Dance</Text>
      </View>
      <View style={styles.aboutCard}>
        <Text style={styles.text}>Swords-Dance</Text>
      </View>
      <View style={styles.aboutCard}>
        <Text style={styles.text}>Swords-Dance</Text>
      </View>
      <View style={styles.aboutCard}>
        <Text style={styles.text}>
          Swords-Dance Swords-Dance Swords-Dance Swords-Dance Swords-Dance
          Swords-Dance
        </Text>
      </View>
      <View style={styles.aboutCard}>
        <Text style={styles.text}>Swords-Dance</Text>
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
  text: {
    width: '100%',
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(13),
    textAlign: 'center',
    textShadowColor: COLORS.yellow,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    color: COLORS.light_blue,
  },
});

export default MovesContainer;
