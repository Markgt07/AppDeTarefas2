import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';


 

export default function App() {

  const image = require ('./resources/');

  return (
    <View style={{flex:1}}>
      <ImageBackground source={image} style={styles.image}>
      <Text>Inside</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    resizeMode:"cover",
    justifyContent:"center"
    
  },
});
