/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome, Main, Detail, DetailMyCollection} from './screens';
import rootStore from './stores/_RootStore';
import {Provider as MobXProvider, observer} from 'mobx-react';
import {RootStackParamList} from './ts/types';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS, responsiveHeight} from './utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = observer(() => {
  const [getAsyncStorage, setGetAsyncStorage] = useState<boolean>(false);
  const [welcomeScreen, setWelcomeScreen] = useState<boolean>(false);
  const {authStore, globalStore} = rootStore;

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('com.pokedextest');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log(error, 'error - GET_DATA_ASYNC_STORAGE');
    }
  };

  useEffect(() => {
    getData()
      .then(data => {
        console.log(data);
        if (data?.isLogin) {
          setWelcomeScreen(true);
          authStore.setIsAuth(true);
        } else {
          setWelcomeScreen(false);
          authStore.setIsAuth(false);
        }
      })
      .finally(() => setGetAsyncStorage(true));
  }, [authStore]);

  const GlobalLoadingComponent = () => {
    return (
      <View style={styles.loadingStyle}>
        <ActivityIndicator
          size={responsiveHeight(5)}
          color={COLORS.light_blue}
        />
      </View>
    );
  };

  return (
    getAsyncStorage && (
      <MobXProvider store={rootStore}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={welcomeScreen ? 'Main' : 'Welcome'}>
            {authStore.isAuth && (
              <>
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen
                  name="DetailMyCollection"
                  component={DetailMyCollection}
                />
              </>
            )}
            {!welcomeScreen && (
              <Stack.Screen name="Welcome" component={Welcome} />
            )}
          </Stack.Navigator>
          {globalStore.isLoading && <GlobalLoadingComponent />}
        </NavigationContainer>
      </MobXProvider>
    )
  );
});

const styles = StyleSheet.create({
  loadingStyle: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
