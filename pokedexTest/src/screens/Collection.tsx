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
  useColorScheme,
} from 'react-native';

import {responsiveWidth, COLORS} from '../utils';

const Collection = () => {
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
      <Text style={{color: COLORS.blue}}>Collection</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: responsiveWidth(140),
    paddingBottom: responsiveWidth(70),
    paddingHorizontal: responsiveWidth(15),
    gap: responsiveWidth(8),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperOwnerName: {
    width: '120%',
    alignItems: 'flex-end',
  },
  wrapperPkmnIcon: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(45),
  },
  wrapperBtnStart: {
    width: '100%',
    borderRadius: responsiveWidth(12),
    height: 'auto',
    padding: responsiveWidth(10),
    backgroundColor: COLORS.blue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsiveWidth(8),
  },
  btnStart: {
    fontSize: responsiveWidth(20),
    color: COLORS.white,
    fontFamily: 'Courier Prime Bold',
  },
});

export default Collection;
