import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Player extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.paragraph}>
        <Text style={styles.textPlayer}>
          {this.props.player}
        </Text>
      </View>
      <View style={styles.paragraphImg}>
        <Image source={{uri: this.props.img }} style={styles.img}
    />
      </View>
      <View style={styles.paragraph}>
        <Text>
          {this.props.choice}
        </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    flex: 0.1 
  },
  paragraphImg: {
    flex: 0.8  
  },
  img: {
    width: 130,
    height: 130,
  },
  textPlayer: {
    fontWeight: 'bold',
    fontSize: 20,
    textDecorationLine: 'underline'
  }
});
