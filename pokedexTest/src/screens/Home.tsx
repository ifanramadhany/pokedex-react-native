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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.black : COLORS.white,
  };

  useEffect(() => {
    pokemonStore.fetchPokemons(0, 20);
    pokemonStore.fetchAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  let oneItemOnly = pokemonStore.resultBySearch.length === 1;

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
                width={responsiveWidth(220)}
                height={responsiveHeight(220)}
                style={styles.pokedex}
              />
            </View>
          </View>
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
  listEmptyWrapper: {
    width: '100%',
    paddingVertical: responsiveWidth(40),
  },
  listEmptyText: {
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.light_black,
    fontSize: responsiveWidth(10),
  },
  loaderStyle: {
    marginVertical: responsiveWidth(10),
    alignItems: 'center',
  },
  safeAreaViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainerStyle: {
    width: '100%',
    padding: responsiveWidth(4),
  },
  contentContainerStyleShow: {
    width: '100%',
    padding: responsiveWidth(4),
  },
  contentContainerStyleHidden: {
    width: '100%',
    padding: responsiveWidth(4),
    display: 'none',
  },
  searchWrapper: {
    width: '100%',
    height: responsiveHeight(140),
    backgroundColor: COLORS.blue,
    elevation: 30,
    paddingBottom: 1,
  },
  title: {
    fontSize: responsiveWidth(28),
    marginHorizontal: responsiveWidth(10),
    marginBottom: responsiveWidth(9),
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
    left: '61%',
    top: '-50%',
  },
  inputSearch: {
    height: 'auto',
    zIndex: 1,
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveWidth(6),
    marginBottom: responsiveWidth(20),
    marginHorizontal: responsiveWidth(10),
    borderRadius: responsiveWidth(10),
    borderWidth: 2,
    borderColor: COLORS.light_grey,
    backgroundColor: COLORS.white,
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.light_black,
    fontSize: responsiveWidth(12),
  },
  listWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Home;
