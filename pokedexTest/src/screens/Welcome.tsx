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
  View,
  TouchableOpacity,
} from 'react-native';

import PokemonIcon from '../assets/svgs/pokemon_logo.svg';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {responsiveHeight, responsiveWidth, COLORS} from '../utils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import LottieView from 'lottie-react-native';

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

const Welcome = ({navigation}: ProfileProps) => {
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
      <View style={styles.wrapperPkmnIcon}>
        <PokemonIcon
          width={responsiveWidth(300)}
          height={responsiveHeight(150)}
        />
        <View style={styles.wrapperOwnerName}>
          <Text>By MarkZuckerberg</Text>
        </View>
        <LottieView
          style={styles.lottieCongratulation}
          source={require('../assets/lotties/failed_animation.json')}
          autoPlay
          loop
        />
      </View>
      <TouchableOpacity
        style={styles.wrapperBtnStart}
        onPress={() => {
          navigation.navigate('Main', {screen: 'Main'});
        }}>
        <Text style={styles.btnStart}>Let's Begin</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={responsiveWidth(16)}
          color={COLORS.white}
        />
      </TouchableOpacity>
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
  lottieCongratulation: {
    width: responsiveWidth(550),
    height: responsiveHeight(550),
    position: 'absolute',
    top: '-110%',
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
    borderRadius: responsiveWidth(100),
    height: 'auto',
    padding: responsiveWidth(12),
    backgroundColor: COLORS.blue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsiveWidth(8),
  },
  btnStart: {
    fontSize: responsiveWidth(16),
    color: COLORS.white,
    fontFamily: 'Nokia Cellphone FC',
  },
});

export default Welcome;
