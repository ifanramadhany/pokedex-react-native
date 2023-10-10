import React from 'react';
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

import {Scene, Event} from 'react-native-tab-view/lib/typescript/src/types';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

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

export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  'Main' | 'DetailMyCollection' | 'Detail' | 'Welcome'
>;

export type RouteType = {key: string; title: string}[];
