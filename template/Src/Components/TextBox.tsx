import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTSIZES} from '../Utilities/Constants';
import VisibilityIcon from '../Assets/Svgs/Icons/visibility.svg';
import VisibilityOffIcon from '../Assets/Svgs/Icons/visibility_off.svg';

interface TextBoxProps {
  textInputProps?: TextInputProps;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  title?: string;
  isEnablePassword: boolean;
  isEnableSecure?: boolean;
  onPressShowPassword?: () => void;
}
const TextBox = ({
  textInputProps = {maxLength: 100, style: {fontSize: FONTSIZES.medium}},
  containerStyle = {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    height: 40,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  titleStyle = {paddingVertical: 5},
  title = '',
  isEnableSecure = false,
  isEnablePassword = false,
  onPressShowPassword,
}: TextBoxProps) => {
  return (
    <>
      <Text style={titleStyle}>{title}</Text>
      <View style={containerStyle}>
        <TextInput
          secureTextEntry={isEnableSecure ? true : false}
          style={{height: '100%', width: isEnablePassword ? '93%' : '100%'}}
          {...textInputProps}
        />
        {isEnablePassword && (
          <TouchableOpacity onPress={onPressShowPassword}>
            {isEnableSecure ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default TextBox;
