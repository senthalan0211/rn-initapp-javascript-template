import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {COLORS} from '../../Utilities/Constants';
const CustomDrawer = ({navigation}) => {
  const [selectedValue, setselectedValue] = useState(0);

  const cutomerNavigationData = [{labelName: 'Home', id: 'HomeStack'}]; //Add your screens

  const handleSelectedItem = (index, id) => {
    setselectedValue(parseInt(index));
    navigation.closeDrawer();
    navigation.navigate(id);
  };

  const renderDrawerItem = ({item, index}) => {
    const bgColor = selectedValue === index ? '#F5F5F5' : COLORS.white;
    const textColor = COLORS.black;
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          {backgroundColor: bgColor, borderRadius: 10},
        ]}
        onPress={() => handleSelectedItem(index, item.id)}>
        <View style={styles.labelContainer}>
          <Text style={[styles.labelStyle, {color: textColor}]}>
            {item.labelName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Text>Your Logo</Text>
        {/* Place Your Logo */}
      </View>
      <View style={styles.divider} />
      <FlatList
        bounces={false}
        data={cutomerNavigationData}
        showsVerticalScrollIndicator={false}
        renderItem={renderDrawerItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  labelStyle: {
    color: COLORS.white,
    fontSize: 14,
  },
  labelContainer: {
    alignItems: 'center',
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.black,
    opacity: 0.1,
    marginVertical: 10,
  },
});
