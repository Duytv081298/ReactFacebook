import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import InforComponent from './components/InforComponent'
import StatusComponent from './components/StatusComponent'
import InstagramComponent from './components/InstagramComponent'
export default function App() {
  return (
      <StatusComponent/>
      // <InforComponent/>
      // <InstagramComponent/>
  );
}
const styles = StyleSheet.create({
  
});

