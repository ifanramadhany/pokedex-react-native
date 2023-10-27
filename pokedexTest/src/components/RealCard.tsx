/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  COLORS,
  convertNumber,
} from '../utils';
import Pokedex from '../assets/svgs/pokedex.svg';
import {RealCardProps} from '../ts/types';
import rootStore from '../stores/_RootStore';

const RealCard = ({navigation, item, oneItemOnly}: RealCardProps) => {
  const {pokemonStore} = rootStore;
  const [pokemonDetail, setPokeomnDetail] = useState<any>();
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>();

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail?.id}.png`;

  useEffect(() => {
    setPokeomnDetail(item);
  }, [item]);

  const toDetailPage = () => {
    pokemonStore.setPokemonDetail(item);
    if (pokemonStore.pokemonDetail) {
      navigation.navigate('Detail');
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        toDetailPage();
      }}
      style={[oneItemOnly ? styles.cardOneOnly : styles.card]}>
      <View style={styles.contentCard}>
        <View style={styles.nameAndNumber}>
          <Text numberOfLines={1} style={styles.name}>
            {pokemonDetail?.name}
          </Text>
          <Text numberOfLines={1} style={styles.number}>
            #{pokemonDetail?.id ? convertNumber(pokemonDetail?.id) : ''}
          </Text>
        </View>
        <View style={styles.skillsAndImg}>
          <View style={styles.skills}>
            <Text style={styles.skill}>
              {pokemonDetail?.types[0]
                ? pokemonDetail?.types[0].type.name
                : '-'}
            </Text>
            <Text style={styles.skill}>
              {pokemonDetail?.types[1]
                ? pokemonDetail?.types[1].type.name
                : '-'}
            </Text>
          </View>
          <View style={styles.img}>
            {!isImgLoaded && (
              <ActivityIndicator
                style={styles.ActivityIndicator}
                size={responsiveWidth(10)}
                color={COLORS.transparent_blue}
              />
            )}
            <Image
              style={{
                width: responsiveHeight(10),
                height: responsiveHeight(10),
              }}
              source={{
                uri: imageUrl,
              }}
              onLoad={() => setIsImgLoaded(true)}
            />
          </View>
        </View>
        <Pokedex
          width={responsiveHeight(17)}
          height={responsiveHeight(17)}
          style={styles.pokedexInCard}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ActivityIndicator: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    left: '4%',
    top: '83%',
  },
  pokedexInCard: {
    transform: [{rotate: '10deg'}],
    position: 'absolute',
    top: '71%',
    left: '45%',
  },
  nameAndNumber: {
    width: '100%',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.white,
    width: responsiveWidth(28),
    fontSize: responsiveWidth(4),
    textTransform: 'capitalize',
  },
  number: {
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.blue,
    fontSize: responsiveWidth(3),
    paddingTop: responsiveHeight(0.5),
  },
  skillsAndImg: {
    width: '100%',
    height: responsiveHeight(4),
    flexDirection: 'row',
    zIndex: 1,
  },
  skills: {
    width: 'auto',
    gap: responsiveWidth(1),
  },
  skill: {
    minWidth: responsiveWidth(19),
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveWidth(1),
    backgroundColor: COLORS.transparent_blue,
    color: COLORS.white,
    fontFamily: 'Minecraftia-Regular',
    fontSize: responsiveWidth(2.7),
    textAlign: 'center',
  },
  img: {
    flex: 1,
    alignItems: 'flex-end',
    right: '10%',
    bottom: '4%',
  },
  contentCard: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.light_blue,
    padding: responsiveWidth(2),
  },
  cardOneOnly: {
    width: '100%',
    maxWidth: '50%',
    height: responsiveHeight(16),
    padding: responsiveWidth(1),
    backgroundColor: COLORS.white,
  },
  card: {
    width: '50%',
    height: responsiveHeight(16),
    padding: responsiveWidth(1),
    backgroundColor: COLORS.white,
  },
});

export default RealCard;
