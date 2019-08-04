import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Result extends React.Component {
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={{color: this.props.colorResult, margin: 24,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',}}>
          {this.props.result}
        </Text>
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
  
  
});
