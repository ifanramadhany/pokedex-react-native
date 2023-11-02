import {Dimensions} from 'react-native';

// const heightMobileUI = 896;
// const widthMobileUI = 414;

// export const responsiveWidth = (width: number) => {
//   return (Dimensions.get('window').width * width) / widthMobileUI;
// };

// export const responsiveHeight = (height: number) => {
//   return (Dimensions.get('window').height * height) / heightMobileUI;
// };

export const responsiveWidth = (percentage: number) => {
  return (Dimensions.get('window').width * percentage) / 100;
};

export const responsiveHeight = (percentage: number) => {
  return (Dimensions.get('window').height * percentage) / 100;
};

export function convertNumber(number: number) {
  const str = '' + number;
  const pad = '0000';
  return pad.substring(0, pad.length - str.length) + str;
}

export function arrayToString(data: any[], type: string) {
  let array: any[] = [];
  data.map(item => array.push(item[type].name));
  return array.join(', ');
}

export const COLORS = {
  white: '#FFFFFF',
  black: '#191717',
  blue: '#375DAA',
  yellow: '#FFCC01',
  pink: '#ED5564',
  grey: '#B4B4B3',
  beige: '#FFFBE9',
  red: '#D80032',
  green: '#00DFA2',
  light_blue: '#6499E9',
  light_grey: '#D8D9DA',
  light_black: '#61677A',
  transparent_grey: 'rgba(25, 25, 23, 0.65)',
  transparent_blue: 'rgba(55, 93, 170, 0.6)',
};
