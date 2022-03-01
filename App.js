import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import CountContextProvider from './src/countcont';
import { useCountContext } from './src/countcont';
import Mainscreen from './src/mainscreen.js';

export default function App() {


  const CountContext= useCountContext();
  console.log(CountContext);

  return (
    
    <CountContextProvider>
    <Mainscreen>

    </Mainscreen>
    </CountContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {

        
    backgroundColor:"green"

  },
  bg: {
    marginTop:10,
    backgroundColor: '#00FF00',
    padding:10

  }
});