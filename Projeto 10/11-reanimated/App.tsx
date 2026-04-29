import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Animated, { useSharedValue } from 'react-native-reanimated';
import AnimatedStyle from './src/examples/02 - AnimatedStyle';
import WithTiming from './src/examples/03 - WithTiming';
import WithSpring from './src/examples/04 - WithSpring';
import ButtonScale from './src/examples/05 - ButtonScale';
import EasyAnimations from './src/examples/06 - EasyAnimations';

export default function App() {
  return (
    // <ButtonScale />
    <EasyAnimations />
  );
}
