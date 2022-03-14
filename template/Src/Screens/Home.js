import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import {COLORS} from '../Utilities/Constants';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        navigation={navigation}
        title="Home Screen"
        enableBack={false}
        bgColor={COLORS.white}
        enableMenu
        onPressMenu={() => {
          navigation.openDrawer();
        }}
      />
      <Text style={{alignSelf: 'center'}}>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
