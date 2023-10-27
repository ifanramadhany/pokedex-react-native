/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TextInput,
  FlatList,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import {responsiveWidth, responsiveHeight, COLORS} from '../utils';
import Pokedex from '../assets/svgs/pokedex.svg';
import {Card} from '../components';
import {ProfileProps} from '../ts/types';
import {Observer} from 'mobx-react';
import rootStore from '../stores/_RootStore';

const Home = ({navigation, route}: ProfileProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {pokemonStore} = rootStore;
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [oneItemOnly, setOneItemOnly] = useState<boolean>(false);
  const [inputSearch, setInputSearch] = useState<string>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.black : COLORS.white,
  };

  useEffect(() => {
    pokemonStore.fetchPokemons(0, 20);
    pokemonStore.fetchAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pokemonStore.resultBySearch.length === 1) {
      setOneItemOnly(true);
    } else {
      setOneItemOnly(false);
    }
  }, [inputSearch, pokemonStore.resultBySearch.length]);

  const renderLoader = () => {
    return (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color={COLORS.light_blue} />
      </View>
    );
  };

  const listEmpty = () => {
    return (
      <View style={styles.listEmptyWrapper}>
        <Text style={styles.listEmptyText}>
          Pokémon not found / Search minimum 3 characters!
        </Text>
      </View>
    );
  };

  const loadMoreItem = () => {
    const urlString = pokemonStore.nextPreviousApi.next;

    // Parse the URL string
    const parsedUrl = urlString.split('?');
    if (parsedUrl.length >= 2) {
      const query = parsedUrl[1];
      const params = query.split('&');

      const paramObject: any = {};
      params.forEach(param => {
        const [key, value] = param.split('=');
        paramObject[key] = value;
      });

      const offset = paramObject.offset;
      const limit = paramObject.limit;

      pokemonStore.fetchPokemons(Number(offset), Number(limit));
    }
  };

  const toHomeScreen = () => {
    navigation.navigate('Main', {screen: 'Main'});
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      toHomeScreen,
    );

    return () => backHandler.remove();
  });

  const onChangeTextHandler = (input: string) => {
    setInputSearch(input);
    pokemonStore.setPokemonFilterByName([]);
    if (input.trim().length === 0) {
      setIsSearch(false);
    } else {
      if (input.length >= 3) {
        pokemonStore.filterByName(input);
        setIsSearch(true);
      }
    }
  };

  // let oneItemOnly = pokemonStore.resultBySearch.length === 1;

  const renderItem = ({item}: any) => (
    <Card
      key={item.name}
      item={item}
      navigation={navigation}
      route={route}
      name={undefined}
      oneItemOnly={false}
    />
  );

  const renderItemSearch = ({item}: any) => (
    <Card
      key={item.name}
      item={item}
      navigation={navigation}
      route={route}
      name={undefined}
      oneItemOnly={oneItemOnly}
    />
  );

  return (
    <Observer>
      {() => (
        <SafeAreaView style={styles.safeAreaViewStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <View style={styles.searchWrapper}>
            <View style={styles.searchWrapperInside}>
              <Text style={styles.title}>Pokédex</Text>
              <TextInput
                style={styles.inputSearch}
                placeholder="Minimum 3 characters.."
                placeholderTextColor={COLORS.grey}
                onChangeText={newText => onChangeTextHandler(newText)}
              />
              <Pokedex
                width={responsiveHeight(28)}
                height={responsiveHeight(28)}
                style={styles.pokedex}
              />
            </View>
          </View>
          <View style={styles.borderBottom} />
          <FlatList
            contentContainerStyle={[
              isSearch
                ? styles.contentContainerStyleShow
                : styles.contentContainerStyleHidden,
            ]}
            data={pokemonStore.resultBySearch}
            renderItem={renderItemSearch}
            keyExtractor={(_item, index) => index.toString()}
            numColumns={2}
            ListEmptyComponent={listEmpty}
          />
          <FlatList
            contentContainerStyle={[
              isSearch
                ? styles.contentContainerStyleHidden
                : styles.contentContainerStyleShow,
            ]}
            data={pokemonStore.pokemons}
            renderItem={renderItem}
            keyExtractor={(_item, index) => index.toString()}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItem}
            numColumns={2}
          />
        </SafeAreaView>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  borderBottom: {
    height: responsiveHeight(0.1),
    width: '100%',
    backgroundColor: COLORS.blue,
    zIndex: 5,
    elevation: 30,
  },
  listEmptyWrapper: {
    width: '100%',
    paddingVertical: responsiveHeight(3),
  },
  listEmptyText: {
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.light_black,
    fontSize: responsiveWidth(2.5),
  },
  loaderStyle: {
    marginVertical: responsiveWidth(2),
    alignItems: 'center',
  },
  safeAreaViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainerStyle: {
    width: '100%',
    padding: responsiveWidth(2),
  },
  contentContainerStyleShow: {
    width: '100%',
    padding: responsiveWidth(1),
  },
  contentContainerStyleHidden: {
    width: '100%',
    padding: responsiveWidth(1),
    display: 'none',
  },
  searchWrapper: {
    width: '100%',
    height: responsiveHeight(14),
    backgroundColor: COLORS.blue,
  },
  title: {
    fontSize: responsiveWidth(7.5),
    marginHorizontal: responsiveWidth(3),
    marginBottom: responsiveWidth(1),
    color: COLORS.white,
    fontFamily: 'Nokia Cellphone FC',
  },
  searchWrapperInside: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.light_blue,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  pokedex: {
    position: 'absolute',
    left: '70%',
    top: '-60%',
  },
  inputSearch: {
    height: 'auto',
    zIndex: 1,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
    marginBottom: responsiveWidth(2),
    marginHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(2),
    borderWidth: responsiveWidth(0.5),
    borderColor: COLORS.light_grey,
    backgroundColor: COLORS.white,
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.light_black,
    fontSize: responsiveWidth(2.7),
  },
  listWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Home;
