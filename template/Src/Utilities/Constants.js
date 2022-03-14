import {Dimensions, Platform} from 'react-native';

export const IS_IOS = Platform.OS === 'ios' ? true : false;
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  borderColor: '#E1E1E1',
};

export const FONTSIZES = {
  tiny: 12,
  small: 14,
  medium: 16,
  large: 20,
  extra: 25,
};
