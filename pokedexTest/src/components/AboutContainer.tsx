/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {COLORS, responsiveWidth} from '../utils';

const AboutContainer = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Name</Text>
        </View>
        <View style={styles.dot}>
          <Text style={styles.dotText}>:</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rightText}>Bulbasaur</Text>
        </View>
      </View>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Name</Text>
        </View>
        <View style={styles.dot}>
          <Text style={styles.dotText}>:</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rightText}>Bulbasaur</Text>
        </View>
      </View>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Name</Text>
        </View>
        <View style={styles.dot}>
          <Text style={styles.dotText}>:</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rightText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            in!
          </Text>
        </View>
      </View>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Name</Text>
        </View>
        <View style={styles.dot}>
          <Text style={styles.dotText}>:</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rightText}>Bulbasaur</Text>
        </View>
      </View>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Name</Text>
        </View>
        <View style={styles.dot}>
          <Text style={styles.dotText}>:</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rightText}>Bulbasaur</Text>
        </View>
      </View>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Name</Text>
        </View>
        <View style={styles.dot}>
          <Text style={styles.dotText}>:</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rightText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            in!
          </Text>
        </View>
      </View>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Name</Text>
        </View>
        <View style={styles.dot}>
          <Text style={styles.dotText}>:</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rightText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            in!
          </Text>
        </View>
      </View>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Name</Text>
        </View>
        <View style={styles.dot}>
          <Text style={styles.dotText}>:</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rightText}>Bulbasaur</Text>
        </View>
      </View>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Name</Text>
        </View>
        <View style={styles.dot}>
          <Text style={styles.dotText}>:</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rightText}>Bulbasaur</Text>
        </View>
      </View>
      <View style={styles.aboutCard}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Name</Text>
        </View>
        <View style={styles.dot}>
          <Text style={styles.dotText}>:</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rightText}>Bulbasaur</Text>
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
    width: '36%',
  },
  leftText: {
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(13),
  },
  right: {
    height: 'auto',
    width: '61%',
  },
  rightText: {
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(13),
  },
  dot: {
    height: 'auto',
    width: '3%',
    marginHorizontal: '1%',
  },
  dotText: {
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(13),
  },
});

export default AboutContainer;
