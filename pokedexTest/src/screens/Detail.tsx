import React, {useState, useEffect} from 'react';
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
  Modal,
  BackHandler,
} from 'react-native';
import Pokedex from '../assets/svgs/pokedex.svg';
import {
  COLORS,
  convertNumber,
  responsiveHeight,
  responsiveWidth,
} from '../utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  AboutContainer,
  MovesContainer,
  BaseStatusContainer,
} from '../components';
import LottieView from 'lottie-react-native';
import {renderTabBarProps, ProfileProps, RouteType} from '../ts/types';
import rootStore from '../stores/_RootStore';
import {Observer} from 'mobx-react';

const renderScene = SceneMap({
  about: AboutContainer,
  baseStatus: BaseStatusContainer,
  moves: MovesContainer,
});

export default function Detail({navigation}: ProfileProps) {
  const {pokemonStore} = rootStore;
  const layout = useWindowDimensions();
  const [catchMModal, setCatchModal] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState<RouteType>([
    {key: 'about', title: 'About'},
    {key: 'baseStatus', title: 'Base Status'},
    {key: 'moves', title: 'Moves'},
  ]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.black : COLORS.white,
  };

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonStore.pokemonDetail.id}.png`;

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

  const toHomeScreen = () => {
    // pokemonStore.setPokemonDetail(null);
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

  return (
    <Observer>
      {() => (
        <SafeAreaView style={styles.safeAreaViewStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Modal transparent={true} visible={catchMModal}>
            <View style={styles.catchModal}>
              <LottieView
                style={styles.lottiePokeBall}
                source={require('../assets/lotties/congratulation_animation.json')}
                autoPlay
                loop
              />
              <Image
                style={{
                  transform: [{scale: catchMModal ? 1.5 : 0}],
                  width: responsiveWidth(53),
                  height: responsiveHeight(25),
                }}
                source={{
                  uri: imageUrl,
                }}
              />
              <Text
                onPress={() => {
                  setCatchModal(false);
                }}
                style={styles.catchButton}>
                Catch Modal
              </Text>
            </View>
          </Modal>
          <View style={styles.wrapperDetail}>
            <View style={styles.backButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  toHomeScreen();
                }}>
                <MaterialIcons
                  name="arrow-back-ios-new"
                  size={responsiveWidth(8)}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.numberAndName}>
              <Text style={styles.number}>
                #{convertNumber(pokemonStore.pokemonDetail.id)}
              </Text>
              <Text numberOfLines={1} style={styles.name}>
                {pokemonStore.pokemonDetail.name}
              </Text>
            </View>
            <View style={styles.img}>
              <Image
                style={{
                  transform: [{scale: catchMModal ? 0 : 1}],
                  width: responsiveWidth(68),
                  height: responsiveHeight(30),
                }}
                source={{
                  uri: imageUrl,
                }}
              />
            </View>
            <View style={styles.imgStand} />
            <Pokedex
              width={responsiveWidth(150)}
              height={responsiveHeight(100)}
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
            <TouchableOpacity
              onPress={() => {
                setCatchModal(true);
              }}
              style={styles.wrapperBtnCatch}>
              <Text style={styles.textBtnCatch}>Catch</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </Observer>
  );
}

const styles = StyleSheet.create({
  catchButton: {
    zIndex: 6,
  },
  lottiePokeBall: {
    width: '150%',
    height: '150%',
    position: 'absolute',
    top: '-30%',
    zIndex: 5,
  },
  catchModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.transparent_grey,
  },
  safeAreaViewStyle: {
    height: '100%',
  },
  wrapperDetail: {
    height: responsiveHeight(50),
    justifyContent: 'space-between',
    backgroundColor: COLORS.light_blue,
  },
  numberAndName: {
    zIndex: 1,
    marginTop: responsiveHeight(3),
    paddingLeft: responsiveWidth(5),
  },
  pokedex: {
    position: 'absolute',
    top: '-40%',
  },
  tabBar: {
    backgroundColor: COLORS.beige,
  },
  labelStyle: {
    textTransform: 'none',
    fontWeight: '500',
    fontFamily: 'Nokia Cellphone FC',
    fontSize: responsiveWidth(3),
  },
  backButton: {
    justifyContent: 'center',
    marginTop: responsiveHeight(3),
    paddingLeft: responsiveWidth(3),
  },
  button: {
    zIndex: 1,
  },
  number: {
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.light_grey,
    fontSize: responsiveWidth(7),
  },
  name: {
    fontFamily: 'Nokia Cellphone FC',
    color: COLORS.blue,
    fontSize: responsiveWidth(8),
    textTransform: 'capitalize',
  },
  img: {
    color: COLORS.black,
    zIndex: 99,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: '11%',
  },
  imgStand: {
    zIndex: 1,
    backgroundColor: COLORS.beige,
    height: responsiveHeight(5),
    borderTopLeftRadius: responsiveWidth(10),
    borderTopRightRadius: responsiveWidth(10),
  },
  wrapperButton: {
    height: responsiveHeight(10),
    backgroundColor: COLORS.beige,
    paddingHorizontal: responsiveWidth(5),
    justifyContent: 'center',
  },
  wrapperBtnCatch: {
    width: '100%',
    borderRadius: responsiveWidth(10),
    height: 'auto',
    paddingVertical: responsiveHeight(1.7),
    backgroundColor: COLORS.blue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnCatch: {
    fontSize: responsiveWidth(3.5),
    color: COLORS.white,
    fontFamily: 'Nokia Cellphone FC',
  },
});
