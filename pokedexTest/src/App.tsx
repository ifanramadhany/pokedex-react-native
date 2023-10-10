/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Welcome, Main, Detail, DetailMyCollection} from './screens';

export type MainScreenType = {
  screen: 'Main' | 'Collection' | 'My Collection';
};

export type RootStackParamList = {
  Welcome: undefined;
  Main: MainScreenType;
  Detail: undefined;
  DetailMyCollection: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen
          name="DetailMyCollection"
          component={DetailMyCollection}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
