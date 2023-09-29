/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {responsiveWidth, responsiveHeight, COLORS} from '../utils';

import Pokedex from '../assets/svgs/pokedex.svg';

const Card = () => {
  const imageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.contentCard}>
        <View style={styles.nameAndNumber}>
          <Text numberOfLines={1} style={styles.name}>
            Bulbasaur
          </Text>
          <Text numberOfLines={1} style={styles.number}>
            #001
          </Text>
        </View>
        <View style={styles.skillsAndImg}>
          <View style={styles.skills}>
            <Text style={styles.skill}>Grass</Text>
            <Text style={styles.skill}>Poison</Text>
          </View>
          <View style={styles.img}>
            <Image
              style={{
                width: responsiveWidth(75),
                height: responsiveHeight(75),
              }}
              source={{
                uri: imageUrl,
              }}
            />
          </View>
        </View>
        <Pokedex
          width={responsiveWidth(180)}
          height={responsiveHeight(180)}
          style={styles.pokedexInCard}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pokedexInCard: {
    transform: [{rotate: '10deg'}],
    position: 'absolute',
    left: '55%',
    top: 0,
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
    width: responsiveWidth(115),
  },
  number: {
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.blue,
    fontSize: responsiveWidth(17),
  },
  skillsAndImg: {
    width: '100%',
    height: responsiveHeight(80),
    flexDirection: 'row',
    zIndex: 1,
  },
  skills: {
    width: 'auto',
    gap: responsiveWidth(6),
  },
  skill: {
    width: 'auto',
    paddingHorizontal: responsiveWidth(15),
    paddingVertical: responsiveWidth(2),
    backgroundColor: 'rgba(55, 93, 170, 0.6)',
    color: COLORS.white,
    fontFamily: 'Minecraftia-Regular',
    fontSize: responsiveWidth(12),
  },
  img: {
    flex: 1,
    alignItems: 'flex-end',
  },
  contentCard: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.light_blue,
    padding: responsiveWidth(10),
  },
  card: {
    width: '50%',
    height: 115,
    padding: responsiveWidth(4),
    backgroundColor: COLORS.white,
  },
});

export default Card;
