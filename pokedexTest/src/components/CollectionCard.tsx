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
import {ProfileProps} from '../ts/types';

const CollectionCard = ({navigation}: ProfileProps) => {
  const imageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';

  const nickName = 'Jackson';

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailMyCollection');
      }}
      style={styles.card}>
      <View style={styles.contentCard}>
        <View style={styles.imgAndDetail}>
          <View style={styles.img}>
            <Image
              style={{
                width: responsiveWidth(62),
                height: responsiveHeight(62),
              }}
              source={{
                uri: imageUrl,
              }}
            />
          </View>
          <View style={styles.nameNumberSkills}>
            <View style={styles.nameNicknameNumber}>
              <View style={styles.nameNickname}>
                <Text numberOfLines={1} style={styles.name}>
                  Bulbasaur
                </Text>
                <Text numberOfLines={1} style={styles.nickName}>
                  ({nickName})
                </Text>
              </View>
              <Text numberOfLines={1} style={styles.number}>
                #001
              </Text>
            </View>
            <View style={styles.skills}>
              <Text style={styles.skill}>Grass</Text>
              <Text style={styles.skill}>Poison</Text>
            </View>
          </View>
        </View>

        <Pokedex
          width={responsiveWidth(145)}
          height={responsiveHeight(145)}
          style={styles.pokedexInCard}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pokedexInCard: {
    position: 'absolute',
    transform: [{rotate: '10deg'}],
    left: '75%',
    top: '-8%',
  },
  imgAndDetail: {
    width: '100%',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameNumberSkills: {
    width: '100%',
    zIndex: 1,
    paddingHorizontal: responsiveWidth(15),
    display: 'flex',
  },
  nameNicknameNumber: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameNickname: {
    flexDirection: 'row',
    gap: responsiveWidth(5),
  },
  name: {
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.white,
    minWidth: responsiveWidth(60),
    maxWidth: responsiveWidth(120),
    fontSize: responsiveWidth(13),
  },
  nickName: {
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.yellow,
    width: responsiveWidth(110),
    fontSize: responsiveWidth(13),
  },
  number: {
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.blue,
    fontSize: responsiveWidth(17),
  },
  skills: {
    width: 'auto',
    flexDirection: 'row',
    gap: responsiveWidth(6),
  },
  skill: {
    width: 'auto',
    paddingHorizontal: responsiveWidth(15),
    paddingVertical: responsiveWidth(2),
    backgroundColor: COLORS.transparent_blue,
    color: COLORS.white,
    fontFamily: 'Minecraftia-Regular',
    fontSize: responsiveWidth(12),
  },
  img: {
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentCard: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.light_blue,
    padding: responsiveWidth(10),
  },
  card: {
    width: '100%',
    height: responsiveHeight(100),
    padding: responsiveWidth(4),
    backgroundColor: COLORS.white,
  },
});

export default CollectionCard;
