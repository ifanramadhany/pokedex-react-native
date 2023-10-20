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
  Modal,
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
                  width: responsiveWidth(220),
                  height: responsiveHeight(220),
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
                  navigation.navigate('Main', {screen: 'Main'});
                }}>
                <MaterialIcons
                  name="arrow-back-ios-new"
                  size={responsiveWidth(30)}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.numberAndName}>
              <Text style={styles.number}>
                #{convertNumber(pokemonStore.pokemonDetail.id)}
              </Text>
              <Text style={styles.name}>{pokemonStore.pokemonDetail.name}</Text>
            </View>
            <View style={styles.img}>
              <Image
                style={{
                  transform: [{scale: catchMModal ? 0 : 1}],
                  width: responsiveWidth(250),
                  height: responsiveHeight(250),
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
            <TouchableOpacity
              onPress={() => {
                setCatchModal(true);
              }}
              style={styles.wrapperBtnCatch}>
              <Text style={styles.btnCatch}>Catch</Text>
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
    width: responsiveWidth(700),
    height: responsiveHeight(700),
    position: 'absolute',
    top: responsiveWidth(80),
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
    justifyContent: 'center',
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
    justifyContent: 'center',
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
    textTransform: 'capitalize',
  },
  img: {
    color: COLORS.black,
    zIndex: 99,
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
  wrapperBtnCatch: {
    width: '100%',
    borderRadius: responsiveWidth(100),
    height: 'auto',
    padding: responsiveWidth(12),
    backgroundColor: COLORS.blue,
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
