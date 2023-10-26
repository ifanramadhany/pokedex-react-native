/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, responsiveHeight, responsiveWidth} from '../utils';
import {Home, Collection} from '.';
import Pokeball from '../assets/svgs/pokeball.svg';
import PokeballOutline from '../assets/svgs/pokeball_outline.svg';
import Bag from '../assets/svgs/bag.svg';
import BagOutline from '../assets/svgs/bag_outline.svg';

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
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) =>
            focused ? (
              <Pokeball
                width={responsiveWidth(6)}
                height={responsiveHeight(6)}
              />
            ) : (
              <PokeballOutline
                width={responsiveWidth(6)}
                height={responsiveHeight(6)}
              />
            ),
        }}
      />
      <Tab.Screen
        name="My Collection"
        component={Collection}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) =>
            focused ? (
              <Bag width={responsiveWidth(6)} height={responsiveHeight(6)} />
            ) : (
              <BagOutline
                width={responsiveWidth(6)}
                height={responsiveHeight(6)}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
