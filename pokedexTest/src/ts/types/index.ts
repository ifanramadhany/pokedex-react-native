import React, {Key} from 'react';
import {
  PressableAndroidRippleConfig,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {
  NavigationState,
  Route,
  SceneRendererProps,
  TabBarIndicatorProps,
  TabBarItemProps,
} from 'react-native-tab-view';

import {RouteProp} from '@react-navigation/native';

import {Scene, Event} from 'react-native-tab-view/lib/typescript/src/types';

import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

export type MainScreenType = {
  screen: 'Main' | 'Collection' | 'My Collection';
};

export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  | 'Main'
  | 'DetailMyCollection'
  | 'Detail'
  | 'Welcome'
  | 'My Collection'
  | 'Home'
>;

export type RootStackParamList = {
  Welcome: undefined;
  Main: MainScreenType;
  Detail: undefined;
  DetailMyCollection: undefined;
  Home: undefined;
  'My Collection': undefined;
};

export type renderTabBarProps = React.JSX.IntrinsicAttributes &
  SceneRendererProps & {
    navigationState: NavigationState<Route>;
    scrollEnabled?: boolean | undefined;
    bounces?: boolean | undefined;
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    pressColor?: string | undefined;
    pressOpacity?: number | undefined;
    getLabelText?: ((scene: Scene<Route>) => string | undefined) | undefined;
    getAccessible?: ((scene: Scene<Route>) => boolean | undefined) | undefined;
    getAccessibilityLabel?:
      | ((scene: Scene<Route>) => string | undefined)
      | undefined;
    getTestID?: ((scene: Scene<Route>) => string | undefined) | undefined;
    renderLabel?:
      | ((
          scene: Scene<Route> & {focused: boolean; color: string},
        ) => React.ReactNode)
      | undefined;
    renderIcon?:
      | ((
          scene: Scene<Route> & {focused: boolean; color: string},
        ) => React.ReactNode)
      | undefined;
    renderBadge?: ((scene: Scene<Route>) => React.ReactNode) | undefined;
    renderIndicator?:
      | ((props: TabBarIndicatorProps<Route>) => React.ReactNode)
      | undefined;
    renderTabBarItem?:
      | ((
          props: TabBarItemProps<Route> & {key: string},
        ) => React.ReactElement<any, string | React.JSXElementConstructor<any>>)
      | undefined;
    onTabPress?: ((scene: Scene<Route> & Event) => void) | undefined;
    onTabLongPress?: ((scene: Scene<Route>) => void) | undefined;
    tabStyle?: StyleProp<ViewStyle>;
    indicatorStyle?: StyleProp<ViewStyle>;
    indicatorContainerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    gap?: number | undefined;
    testID?: string | undefined;
    android_ripple?: PressableAndroidRippleConfig | undefined;
  };

export type PokemonType = {
  name: string;
  url?: string;
};

type IntrinsicAttributes = React.JSX.IntrinsicAttributes;

export type CardProps = IntrinsicAttributes & {
  name: Key | null | undefined;
  key: Key | null | undefined;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    | 'Detail'
    | 'Main'
    | 'My Collection'
    | 'DetailMyCollection'
    | 'Welcome'
    | 'Home',
    undefined
  >;
  route: RouteProp<
    RootStackParamList,
    | 'Main'
    | 'DetailMyCollection'
    | 'Detail'
    | 'Welcome'
    | 'My Collection'
    | 'Home'
  >;
  item: PokemonType;
  oneItemOnly: boolean;
};

export type RealCardProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    | 'Detail'
    | 'Main'
    | 'My Collection'
    | 'DetailMyCollection'
    | 'Welcome'
    | 'Home',
    undefined
  >;
  item: any[] | {} | null;
  oneItemOnly: boolean;
};

export type RouteType = {key: string; title: string}[];

export type ApiResponse = {
  results: any[];
  next: string;
  previous: string;
};

export type MovesProps = {
  move: {
    name:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
  };
};

export type StatProps = {
  stat: {
    name:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
  };
  base_stat: number;
};

export type IndexProps = React.Key | null | undefined;
