import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Pokedex from '../assets/svgs/pokedex.svg';
import FavoriteStar from '../assets/svgs/favorite_star.svg';
import {COLORS, responsiveHeight, responsiveWidth} from '../utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  AboutContainer,
  MovesContainer,
  BaseStatusContainer,
} from '../components';
import {ProfileProps, renderTabBarProps, RouteType} from '../ts/types';

const renderScene = SceneMap({
  about: AboutContainer,
  baseStatus: BaseStatusContainer,
  moves: MovesContainer,
});

export default function DetailMyCollection({navigation}: ProfileProps) {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState<RouteType>([
    {key: 'about', title: 'About'},
    {key: 'baseStatus', title: 'Base Status'},
    {key: 'moves', title: 'Moves'},
  ]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.black : COLORS.white,
  };

  const imageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';

  const renderTabBar = (props: renderTabBarProps) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: COLORS.blue}}
      labelStyle={styles.labelStyle}
      style={styles.tabBar}
      activeColor={COLORS.blue}
      inactiveColor={COLORS.grey}
    />
  );

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.wrapperDetail}>
        <View style={styles.backButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Main', {screen: 'Collection'});
            }}>
            <MaterialIcons
              name="arrow-back-ios-new"
              size={responsiveWidth(30)}
              color={COLORS.white}
            />
          </TouchableOpacity>
          <View style={styles.yourPokemonStar}>
            <Text style={styles.yourPokemon}>Your Pokémon</Text>
            <FavoriteStar
              width={responsiveWidth(40)}
              height={responsiveHeight(40)}
            />
          </View>
        </View>

        <View style={styles.numberAndName}>
          <Text style={styles.number}>#001</Text>
          <Text style={styles.name}>Bulbasaur</Text>
          <Text style={styles.nickname}>Jackson</Text>
        </View>
        <View style={styles.img}>
          <Image
            style={{
              width: responsiveWidth(220),
              height: responsiveHeight(220),
            }}
            source={{
              uri: imageUrl,
            }}
          />
        </View>
        <View style={styles.imgStand} />
        <Pokedex
          width={responsiveWidth(600)}
          height={responsiveHeight(600)}
          style={styles.pokedex}
        />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
      <View style={styles.wrapperButton}>
        <TouchableOpacity style={styles.wrapperBtnRename}>
          <Text style={styles.btnCatch}>Rename</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperBtnRelease}>
          <Text style={styles.btnCatch}>Release</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    height: '100%',
  },
  wrapperDetail: {
    height: responsiveHeight(390),
    justifyContent: 'space-between',
    backgroundColor: COLORS.light_blue,
  },
  numberAndName: {
    zIndex: 1,
    marginTop: responsiveWidth(15),
  },
  wrapperButton: {
    height: responsiveHeight(100),
    backgroundColor: COLORS.beige,
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveWidth(20),
    justifyContent: 'center',
    flexDirection: 'row',
    gap: responsiveWidth(15),
  },
  yourPokemonStar: {
    flexDirection: 'row',
    gap: responsiveWidth(5),
    alignItems: 'center',
    backgroundColor: COLORS.transparent_blue,
    paddingRight: responsiveWidth(5),
    paddingLeft: responsiveWidth(25),
    borderRadius: responsiveWidth(30),
  },
  yourPokemon: {
    fontFamily: 'Nokia Cellphone FC',
    color: COLORS.white,
    fontSize: responsiveWidth(11),
  },
  pokedex: {
    position: 'absolute',
    left: '-10%',
    top: '0%',
  },
  tabBar: {
    backgroundColor: COLORS.beige,
  },
  labelStyle: {
    textTransform: 'none',
    fontWeight: '500',
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(11),
  },
  backButton: {
    height: responsiveHeight(40),
    marginHorizontal: responsiveWidth(15),
    marginTop: responsiveWidth(5),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    zIndex: 1,
  },
  number: {
    paddingHorizontal: responsiveWidth(20),
    paddingTop: responsiveWidth(10),
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.white,
    fontSize: responsiveWidth(25),
  },
  name: {
    fontFamily: 'Nokia Cellphone FC',
    color: COLORS.blue,
    fontSize: responsiveWidth(25),
    paddingHorizontal: responsiveWidth(20),
  },
  nickname: {
    fontFamily: 'Nokia Cellphone FC',
    color: COLORS.yellow,
    fontSize: responsiveWidth(20),
    paddingHorizontal: responsiveWidth(20),
  },
  img: {
    color: COLORS.black,
    zIndex: 2,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: responsiveWidth(30),
  },
  imgStand: {
    zIndex: 1,
    backgroundColor: COLORS.beige,
    height: responsiveHeight(35),
    borderTopLeftRadius: responsiveWidth(30),
    borderTopRightRadius: responsiveWidth(30),
  },
  wrapperBtnRename: {
    width: '45%',
    borderRadius: responsiveWidth(100),
    height: 'auto',
    padding: responsiveWidth(12),
    backgroundColor: COLORS.green,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperBtnRelease: {
    width: '45%',
    borderRadius: responsiveWidth(100),
    height: 'auto',
    padding: responsiveWidth(12),
    backgroundColor: COLORS.red,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCatch: {
    fontSize: responsiveWidth(16),
    color: COLORS.white,
    fontFamily: 'Nokia Cellphone FC',
  },
});
