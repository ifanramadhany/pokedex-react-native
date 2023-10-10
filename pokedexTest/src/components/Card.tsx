/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {ProfileProps} from '../ts/types';
import LoadingCard from './LoadingCard';
import RealCard from './RealCard';

const Card = ({navigation, route}: ProfileProps) => {
  const [hasData, setHasData] = useState<boolean>(false);

  useEffect(() => {
    let timer = setTimeout(() => setHasData(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return hasData ? (
    <RealCard navigation={navigation} route={route} />
  ) : (
    <LoadingCard />
  );
};

export default Card;
