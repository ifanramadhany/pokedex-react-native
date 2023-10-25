/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import CookieManager from '@react-native-cookies/cookies';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome, Main, Detail, DetailMyCollection} from './screens';
import rootStore from './stores/_RootStore';
import {Provider as MobXProvider} from 'mobx-react';
import {RootStackParamList} from './ts/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [getCookiesFinished, setGetCookiesFinished] = useState<boolean>(false);
  const [welcomeScreen, setWelcomeScreen] = useState<boolean>(false);

  useEffect(() => {
    CookieManager.get('http://ifan.com')
      .then(cookies => {
        if (cookies.hasOwnProperty('pokedexIfan')) {
          if (cookies.pokedexIfan.value === 'active') {
            setWelcomeScreen(true);
          }
        }
      })
      .finally(() => setGetCookiesFinished(true));
  }, []);

  return (
    getCookiesFinished && (
      <MobXProvider store={rootStore}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={welcomeScreen ? 'Main' : 'Welcome'}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen
              name="DetailMyCollection"
              component={DetailMyCollection}
            />
            {!welcomeScreen && (
              <Stack.Screen name="Welcome" component={Welcome} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </MobXProvider>
    )
  );
};

export default App;
