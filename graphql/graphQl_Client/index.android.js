/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class graphQl_Client extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }
  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch('http://192.168.56.1:4000/graphql?query={%20name%20}')
    .then(resp => {
      let response = JSON.parse(resp._bodyText)
      this.setState({ value: response.data.name });
    })
    .catch()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         GET RESPONSE FROM SERVER
        </Text>
        <Text style={styles.instructions}>
          RESPONSE: {this.state.value}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('graphQl_Client', () => graphQl_Client);
