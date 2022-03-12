import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../Navigations/TabNavigation';
// import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabScreen" component={TabNavigation} />
      {/* <Stack.Screen name="HomeStack" component={HomeStack} /> */}
    </Stack.Navigator>
  );
};

export default MainStack;
