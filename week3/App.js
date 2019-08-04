import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import Result from './components/Result';
import Player from './components/Player';

const CHOICES = [ 
{ name: 'rock', uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png' },
{ name: 'paper', uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png' }, 
{ name: 'scissors', uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png' } ];

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userChoice : '',
      computerChoice : '',
      finalResult : ''
    }
  }

 onPressButton = data => {
  this.setState({userChoice: data})
  const randomComputerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  this.setState({computerChoice: randomComputerChoice})
  if (data.name === 'rock') {
    this.setState({finalResult: randomComputerChoice.name === 'scissors' ? 'Victory!' : 'Defeat!'}) ;
  }
  if (data.name === 'paper') {
    this.setState({finalResult: randomComputerChoice.name === 'rock' ? 'Victory!' : 'Defeat!'});
  }
  if (data.name === 'scissors') {
    this.setState({finalResult: randomComputerChoice.name === 'paper' ? 'Victory!' : 'Defeat!'});
  }

  if (data.name === randomComputerChoice.name) this.setState({finalResult: 'Tie game!'});
}; 


  render() {
    const colorResult = () => {
  if (this.state.finalResult === 'Victory!') return 'green';
  if (this.state.finalResult === 'Defeat!') return 'red';
  return null;
};
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Result result={this.state.finalResult} colorResult={colorResult()}/>
        </View>
        <View style={styles.player}>
          <View style={styles.viewPlayer}>
            <Player player='You' img={this.state.userChoice.uri} choice={this.state.userChoice.name}/>
          </View>
          <View style={styles.vs}>
            <Text style={styles.textVs}>vs</Text>
          </View>
          <View style={styles.viewPlayer}>
            <Player player='Comp' img={this.state.computerChoice.uri} choice={this.state.computerChoice.name}/>
          </View>
        </View>
        <View style={styles.buttons}>
        {
  CHOICES.map(choice => {
    return <View style={styles.viewButton}><TouchableOpacity style={styles.button} key={choice.name} name={choice.name} onPress={() => this.onPressButton(choice)}><Text style={styles.textButton}>{choice.name}</Text></TouchableOpacity></View>;
  })
}
       
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  result: {
    flex: 0.1,
  },
  player: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1.5,
    
  },
  buttons: {
    flex: 0.3,
  },
  viewButton: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 30,
    backgroundColor: 'brown',
    borderRadius: 10,
  },
  textButton: {
    color: 'white',
  },
  viewPlayer: {
    flex: 0.45,
  },
  vs: {
    flex: 0.1
  },
  textVs: {
    fontWeight: 'bold'
  }
});
