import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Header from './components/Header/Header'



const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
    </View>
  )
}
const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});

export default App;
