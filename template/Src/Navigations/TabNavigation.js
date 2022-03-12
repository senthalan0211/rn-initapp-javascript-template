import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../Assets/Svgs/Icons/home.svg';
import {BLACKCOLOR} from '../Utilities/Colors';
import HomeDrawerNavigation from './DrawerNavigation/HomeDrawerNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="DrawerHome"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let TabIcon;
          if (route.name === 'DrawerHome') {
            TabIcon = HomeIcon;
          }
          return <TabIcon />;
        },
        tabBarStyle: {
          backgroundColor: '#F8F8F8',
        },
        headerShown: false,
        tabBarItemStyle: {height: 40, alignSelf: 'center'},
      })}>
      <Tab.Screen
        options={{
          tabBarLabelStyle: {color: BLACKCOLOR},
          tabBarLabel: 'Home',
        }}
        name="DrawerHome"
        component={HomeDrawerNavigation}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
