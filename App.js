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
  for (let i = 0; i < 6; i++) {
    do {
      numeros[i] = Math.floor(Math.random() * 61);
    } while (numeros[i] == numeros[i-1]);
  }
  return numeros;
}
// export default function App() {
//   const [texto, setTexto] = useState('Texto inicial')
//   return (
//     <View style={styles.container}>
//       <Text>{texto}</Text>
//       <Button title="Alterar Texto" onPress={() => setTexto("Outro texto")}>
//       </Button>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
