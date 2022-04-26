import {Button, StyleSheet, Text, View } from 'react-native';

import React, {useState} from 'react'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Numeros: [],
      texto: "Texto Inicial",
      contador: 0
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>
          {this.state.Numeros}
        </Text>
        <Button 
        title="Ok" 
        onPress={() => {
              this.setState({
                Numeros: teste() + ","
              });
          }
        }
        ></Button>
      </View>
    )
  }
}
function teste() {
  let numeros = []; 
  let repetiu
  for (let i = 0; i < 6; i++) {
    do {
      let n = Math.floor(Math.random() * 61);
      if (!repete(numeros, n)) {
        numeros[i] = n
      }
      else(
        repetiu = true
      )
    } while (repetiu);
  }
  return numeros;
}

function repete(vetor, numero) {
  for (let i = 0; i < vetor.length; i++) {
    if(vetor[i] != numero){
      i++
    }
    else{
      return true
    }
  }
  return false
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
