import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../Store/Actions/authAction';
import TextBox from '../Components/TextBox';
import {COLORS, IS_IOS} from '../Utilities/Constants';

const Login = () => {
  const [isEnableSecure, setisEnableSecure] = useState(true);
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={IS_IOS ? 'padding' : null}>
      <View style={styles.contentContainer}>
        <View style={styles.loginImage}>
          <Text>Logo</Text>
        </View>
        <TextBox
          title="UserName"
          textInputProps={{placeholder: 'Enter User Name'}}
        />
        <TextBox
          title="Password"
          textInputProps={{
            placeholder: 'Enter Password',
          }}
          isEnablePassword
          isEnableSecure={isEnableSecure}
          onPressShowPassword={() => setisEnableSecure(pre => !pre)}
        />
        <TouchableOpacity style={styles.forgotPassword}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            dispatch(login('kkkk'));
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    flexGrow: 1,
  },

  contentContainer: {
    paddingHorizontal: 15,
  },
  loginImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingHorizontal: 50,
    alignSelf: 'center',
    marginTop: 20,
  },
  forgotPassword: {
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
});
