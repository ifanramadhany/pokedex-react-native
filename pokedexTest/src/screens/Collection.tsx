/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  ScrollView,
} from 'react-native';
import {responsiveWidth, responsiveHeight, COLORS} from '../utils';
import {CollectionCard} from '../components';
import {ProfileProps} from '../ts/types';

const Collection = ({navigation, route}: ProfileProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.black : COLORS.white,
  };

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.searchWrapper}>
        <View style={styles.searchWrapperInside}>
          <Text style={styles.title}>Your Pokémon</Text>
        </View>
      </View>
      <View style={styles.borderBottom} />
      <ScrollView
        style={styles.scrollViewStyle}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.listWrapper}>
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
          <CollectionCard navigation={navigation} route={route} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  borderBottom: {
    height: responsiveHeight(0.1),
    width: '100%',
    backgroundColor: COLORS.blue,
    zIndex: 5,
    elevation: 30,
  },
  safeAreaViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  scrollViewStyle: {
    width: '100%',
    padding: responsiveWidth(1),
  },
  searchWrapper: {
    width: '100%',
    height: responsiveHeight(8),
    backgroundColor: COLORS.blue,
  },
  title: {
    fontSize: responsiveWidth(4),
    color: COLORS.white,
    fontFamily: 'Nokia Cellphone FC',
  },
  searchWrapperInside: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.light_blue,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokedex: {
    position: 'absolute',
    left: '61%',
    top: '-50%',
  },
  listWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Collection;
