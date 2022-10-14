import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component () {
  render(){
      return (
  <HomeScreen/>
  );
      }
}


