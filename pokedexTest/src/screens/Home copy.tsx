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
  View,
  useColorScheme,
  // ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {responsiveWidth, responsiveHeight, COLORS} from '../utils';
import Pokedex from '../assets/svgs/pokedex.svg';
import {Card} from '../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../ts/types';
import {Observer} from 'mobx-react';
import rootStore from '../stores/_RootStore';
import Config from 'react-native-config';

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;
const Home = ({navigation, route}: ProfileProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {pokemonStore} = rootStore;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.black : COLORS.white,
  };

  console.log('Home.tsx rendered', Config.BASE_URL);

  useEffect(() => {
    pokemonStore.fetchPokemons(0, 30);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderLoader = () => {
    return (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  };

  const loadMoreItem = () => {
    console.log('loadMoreItem!!');
  };

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
                placeholder="Search Pokemon.."
                placeholderTextColor={COLORS.grey}
              />
              <Pokedex
                width={responsiveWidth(220)}
                height={responsiveHeight(220)}
                style={styles.pokedex}
              />
            </View>
          </View>
          <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            data={pokemonStore.pokemons}
            renderItem={({item}) => (
              <Card
                key={item.name}
                item={item}
                navigation={navigation}
                route={route}
                name={undefined}
              />
            )}
            keyExtractor={(_item, index) => index.toString()}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItem}
            numColumns={2}
          />
          {/* <ScrollView
            style={styles.scrollViewStyle}
            contentInsetAdjustmentBehavior="automatic">
            <View style={styles.listWrapper}>
              {pokemonStore.pokemons.map(
                (item: {name: any; url?: string | undefined}) => (
                  <Card
                    key={item.name}
                    item={item}
                    navigation={navigation}
                    route={route}
                    name={undefined}
                  />
                ),
              )}
            </View>
          </ScrollView> */}
        </SafeAreaView>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
  contentContainerStyle: {
    width: '100%',
    backgroundColor: 'pink',
  },
  item: {
    width: '100%',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  safeAreaViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewStyle: {
    width: '100%',
    padding: responsiveWidth(4),
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
