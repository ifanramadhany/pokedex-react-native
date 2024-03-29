/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
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
import GoogleIcon from '../assets/svgs/google_icon.svg';
import {responsiveHeight, responsiveWidth, COLORS} from '../utils';
import {ProfileProps} from '../ts/types';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import rootStore from '../stores/_RootStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = ({navigation}: ProfileProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {authStore, globalStore} = rootStore;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.black : COLORS.white,
  };

  const storeData = async (object: {email: string; isLogin: boolean}) => {
    try {
      const jsonValue = JSON.stringify(object);
      await AsyncStorage.setItem('com.pokedextest', jsonValue);
      return true;
    } catch (error) {
      console.log(error, 'error - STORE_DATA_ASYNC_STORAGE');
      return error;
    }
  };

  const toHomeScreen = () => {
    onGoogleButtonPress().then(data => {
      const userEmail = data?.user.email || '';
      authStore.setIsAuth(true);
      // console.log(JSON.stringify(data, null, 2));
      storeData({email: userEmail, isLogin: true})
        .then(result => {
          // Item stored successfully
          if (result) {
            navigation.navigate('Main', {screen: 'Main'});
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => globalStore.setIsLoading(false));
    });
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: Config.WEB_CLIENT_ID,
    });
  }, []);

  async function onGoogleButtonPress() {
    globalStore.setIsLoading(true);
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken, user} = await GoogleSignin.signIn();
      console.log(JSON.stringify(idToken, null, 2));
      console.log(JSON.stringify(user, null, 2));
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error, 'error - SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error, 'error - IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error, 'error - PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        // some other error happened
        console.log('error - GOOGLE_SIGN_IN');
      }

      return error;
    }
  }

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
          <GoogleIcon
            width={responsiveHeight(2.2)}
            height={responsiveHeight(2.2)}
          />
          <Text style={styles.textBtnStart}>Sign in with Google</Text>
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
    backgroundColor: COLORS.white,
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
    gap: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.7),
  },
  textBtnStart: {
    fontSize: responsiveWidth(3.5),
    color: COLORS.white,
    fontFamily: 'Nokia Cellphone FC',
  },
});

export default Welcome;
