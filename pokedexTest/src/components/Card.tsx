/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {CardProps} from '../ts/types';
import {LoadingCard} from './index';
import RealCard from './RealCard';
import {ApiResponse} from '../ts/types';
import {getRequest} from '../api/api';

const Card = ({navigation, item, oneItemOnly}: CardProps) => {
  const [pokemonDetail, setPokeomnDetail] = useState<any[] | {} | null>(null);
  const fetchPokemonDetail = async () => {
    try {
      const response: ApiResponse = await getRequest(`/pokemon/${item.name}`);
      setPokeomnDetail(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPokemonDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return pokemonDetail ? (
    <RealCard
      oneItemOnly={oneItemOnly}
      navigation={navigation}
      item={pokemonDetail}
    />
  ) : (
    <LoadingCard />
  );
};

export default Card;
