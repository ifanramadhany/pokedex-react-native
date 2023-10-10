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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewStyle: {
    width: '100%',
    padding: responsiveWidth(4),
  },
  searchWrapper: {
    width: '100%',
    height: responsiveHeight(70),
    backgroundColor: COLORS.blue,
    elevation: 30,
    paddingBottom: 1,
  },
  title: {
    fontSize: responsiveWidth(18),
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
  inputSearch: {
    height: 'auto',
    zIndex: 1,
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveWidth(6),
    marginBottom: responsiveWidth(20),
    marginHorizontal: responsiveWidth(10),
    borderRadius: responsiveWidth(10),
    borderWidth: 2,
    borderColor: COLORS.light_grey,
    backgroundColor: COLORS.white,
    fontFamily: 'Minecraftia-Regular',
    fontSize: responsiveWidth(12),
  },
  listWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Collection;
