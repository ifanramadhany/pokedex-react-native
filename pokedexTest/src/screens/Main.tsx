/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {COLORS} from '../utils';

import {Home, Collection} from '.';

import Pokeball from '../assets/svgs/pokeball.svg';
import PokeballOutline from '../assets/svgs/pokeball_outline.svg';
import HomeIcon from '../assets/svgs/home.svg';
import HomeOutline from '../assets/svgs/home_outline.svg';

const Main = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.blue,
      })}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeIcon width={26} height={26} />
            ) : (
              <HomeOutline width={26} height={26} />
            ),
        }}
      />
      <Tab.Screen
        name="My Collection"
        component={Collection}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Pokeball width={26} height={26} />
            ) : (
              <PokeballOutline width={26} height={26} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
