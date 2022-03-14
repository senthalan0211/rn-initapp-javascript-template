import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setisSeenIntro} from '../Store/Actions/authAction';
import {COLORS, WINDOW_WIDTH} from '../Utilities/Constants';

const Intro = () => {
  const dispatch = useDispatch();

  const scrollY = useRef(new Animated.Value(0)).current;
  const INTROSCREENS = [
    {text: 'Screen 1'},
    {text: 'Screen 2'},
    {text: 'Screen 3'},
  ];

  const ScrollIndicator = () => {
    return (
      <View style={styles.indicatorContainer}>
        {INTROSCREENS.map((item, index) => {
          const width = scrollY.interpolate({
            inputRange: [
              WINDOW_WIDTH * (index - 1),
              WINDOW_WIDTH * index,
              WINDOW_WIDTH * (index + 1),
            ],
            outputRange: ['red', COLORS.black, 'red'],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={[styles.scrollIndicatorDots, {backgroundColor: width}]}
            />
          );
        })}
      </View>
    );
  };

  const renderIntroScreens = ({item}) => {
    return (
      <View style={styles.introScreensItemContainer}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => {
          dispatch(setisSeenIntro(true));
        }}>
        <Text>SKIP</Text>
      </TouchableOpacity>
      <Animated.FlatList
        data={INTROSCREENS}
        renderItem={renderIntroScreens}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollY,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
      />
      <ScrollIndicator />
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  skipButton: {
    padding: 5,
    margin: 10,
    alignSelf: 'flex-end',
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
    justifyContent: 'center',
  },
  scrollIndicatorDots: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  introScreensItemContainer: {
    width: WINDOW_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
