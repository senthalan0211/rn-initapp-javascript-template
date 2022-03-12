import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../Store/Actions/authAction';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          dispatch(login('kkkk'));
        }}>
        <Text>Login Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
