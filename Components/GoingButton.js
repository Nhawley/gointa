import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ListView,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Alert
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import { Result } from '../Screens/Result.js'

class GoingButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      going: false
    };
  }

  handleClick() {
    this.setState({going: !this.state.going})
  }

  render() {
  if (Platform.OS === 'android') {
    if (!this.state.going) {
      return (
        <TouchableNativeFeedback onPress={this.handleClick.bind(this)}>
          <View style={styles.notGoing}>
            <Text style={styles.centeredText}>
              Not Yet Going!
            </Text>
          </View>
        </TouchableNativeFeedback>
      )
    }

    return (
      <TouchableNativeFeedback onPress={this.handleClick.bind(this)}>
        <View style={styles.Going}>
          <Text style={styles.centeredText}>
            Going!
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  } else {
    if (!this.state.going) {
      return (
        <TouchableOpacity onPress={this.handleClick.bind(this)}>
          <View style={styles.notGoing}>
            <Text style={styles.centeredText}>
              Not Yet Going!
            </Text>
          </View>
        </TouchableOpacity>
      )
    }

    return (
      <TouchableOpacity onPress={this.handleClick.bind(this)}>
        <View style={styles.Going}>
          <Text style={styles.centeredText}>
            Going!
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  }

}

const styles = StyleSheet.create({
  notGoing: {
    width: 150,
    height: 40,
    backgroundColor: "#4ed7c2",
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Going: {
    width: 150,
    height: 40,
    backgroundColor: "#e76248",
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    color: 'white'
  },
});

export default GoingButton;