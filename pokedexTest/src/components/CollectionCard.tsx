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
                width: responsiveHeight(9),
                height: responsiveHeight(9),
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
                #00001
              </Text>
            </View>
            <View style={styles.skills}>
              <Text style={styles.skill}>Grass</Text>
              <Text style={styles.skill}>Poison</Text>
            </View>
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
  pokedexInCard: {
    position: 'absolute',
    transform: [{rotate: '10deg'}],
    left: '80%',
    top: '-4%',
  },
  imgAndDetail: {
    width: '100%',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameNumberSkills: {
    flex: 1,
    zIndex: 1,
    paddingHorizontal: responsiveWidth(4),
    display: 'flex',
    justifyContent: 'center',
  },
  nameNicknameNumber: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameNickname: {
    flexDirection: 'row',
    gap: responsiveWidth(0.5),
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.white,
    minWidth: responsiveWidth(28),
    maxWidth: responsiveWidth(28),
    fontSize: responsiveWidth(4),
  },
  nickName: {
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.yellow,
    width: responsiveWidth(25),
    fontSize: responsiveWidth(3.5),
  },
  number: {
    fontFamily: 'Minecraftia-Regular',
    color: COLORS.blue,
    fontSize: responsiveWidth(3),
    paddingTop: responsiveHeight(0.2),
  },
  skills: {
    width: 'auto',
    flexDirection: 'row',
    gap: responsiveWidth(2),
  },
  skill: {
    width: 'auto',
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(0.5),
    backgroundColor: COLORS.transparent_blue,
    color: COLORS.white,
    fontFamily: 'Minecraftia-Regular',
    fontSize: responsiveWidth(2.8),
  },
  img: {
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: responsiveWidth(2),
  },
  contentCard: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.light_blue,
    padding: responsiveWidth(1),
  },
  card: {
    width: '100%',
    height: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(0.5),
    paddingVertical: responsiveHeight(0.3),
    backgroundColor: COLORS.white,
  },
});

export default CollectionCard;
