import {Dimensions, Platform} from 'react-native';

export const IS_IOS = Platform.OS === 'ios' ? true : false;
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
