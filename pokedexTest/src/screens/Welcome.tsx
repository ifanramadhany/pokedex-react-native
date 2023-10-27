/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import CookieManager from '@react-native-cookies/cookies';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import PokemonIcon from '../assets/svgs/pokemon_logo.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {responsiveHeight, responsiveWidth, COLORS} from '../utils';
import {ProfileProps} from '../ts/types';

const Welcome = ({navigation}: ProfileProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.black : COLORS.white,
  };

  const toHomeScreen = () => {
    navigation.navigate('Main', {screen: 'Main'});
    CookieManager.set('http://ifan.com', {
      name: 'pokedexIfan',
      value: 'active',
    }).then(done => {
      console.log('CookieManager.set =>', done);
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.wrapperPkmnIcon}>
        <PokemonIcon
          width={responsiveHeight(35)}
          height={responsiveHeight(35)}
        />
        <View style={styles.wrapperOwnerName}>
          <Text style={styles.ownerName}>by Ifan Ramadhany</Text>
        </View>
      </View>
      <View style={styles.wrapperBtnStart}>
        <TouchableOpacity
          style={styles.btnStart}
          onPress={() => {
            toHomeScreen();
          }}>
          <Text style={styles.textBtnStart}>Let's Begin</Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={responsiveWidth(4)}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperOwnerName: {
    width: responsiveWidth(80),
    alignItems: 'flex-end',
    bottom: responsiveHeight(10),
  },
  ownerName: {
    color: COLORS.blue,
    fontSize: responsiveWidth(2.5),
  },
  wrapperPkmnIcon: {
    width: '100%',
    height: responsiveHeight(90),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2),
    paddingTop: responsiveHeight(10),
  },
  wrapperBtnStart: {
    height: responsiveHeight(10),
    width: '100%',
    paddingHorizontal: responsiveWidth(5),
    justifyContent: 'center',
  },
  btnStart: {
    width: '100%',
    borderRadius: responsiveWidth(10),
    backgroundColor: COLORS.blue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsiveWidth(2),
    paddingVertical: responsiveHeight(1.7),
  },
  textBtnStart: {
    fontSize: responsiveWidth(3.5),
    color: COLORS.white,
    fontFamily: 'Nokia Cellphone FC',
  },
});

export default Welcome;
