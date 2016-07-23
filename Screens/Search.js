import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ListView,
  Alert,
  TouchableNativeFeedback,
  Dimensions,
  ScrollView,
  Picker,
  StatusBar
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Button from '../Components/Button';
import DropDown, {
  Select,
  Option,
  OptionList,
  updatePosition
} from 'react-native-selectme';

var moment = require('moment')


class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      distance: '',
      category: ''
    }
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  _category(cat) {
    this.setState({
      ...this.state,
      category: cat
    });
  }

  _distance(howFar) {
    this.setState({
      ...this.state,
      distance: howFar
    });
  }

  search() {
    var searchInfoObject = {
      type: 'searchPage',
      zipcode: this.state.zipcode,
      distance: this.state.distance
    };
    Actions.searchresults({searchInfo: searchInfoObject});
  }

  render() {

    return (

      <View style={styles.center}>
        <StatusBar backgroundColor="#4ed7c2" />
        <View>
          <TextInput 
            style={styles.inputZip}
            placeholder='Zipcode' 
            value={this.state.zipcode}
            onChangeText={(zipcode) => this.setState({ zipcode: zipcode })}
            returnKeyType="done"
            keyboardType="number-pad"
            maxLength={5}
          />
        </View>

{/*        <View>
          <Select
            style={styles.input}
            width={windowWidth*.7}
            styleText={{textAlign: 'center'}}
            ref="SELECT2"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Category"
            onSelect={this._category.bind(this)}>
            <Option styleText={{textAlign: 'center'}}>Sports</Option>
            <Option styleText={{textAlign: 'center'}}>Gaming</Option>
            <Option styleText={{textAlign: 'center'}}>Food</Option>
            <Option styleText={{textAlign: 'center'}}>Music</Option>
            <Option styleText={{textAlign: 'center'}}>Entertainment</Option>
            <Option styleText={{textAlign: 'center'}}>Sponsored</Option>
          </Select>
        </View>*/}
        
        <View>
          <Select
            style={styles.input}
            width={windowWidth*.7}
            styleText={{textAlign: 'center'}}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Distance"
            onSelect={this._distance.bind(this)}>
            <Option styleText={{textAlign: 'center'}}>5</Option>
            <Option styleText={{textAlign: 'center'}}>10</Option>
            <Option styleText={{textAlign: 'center'}}>15</Option>
            <Option styleText={{textAlign: 'center'}}>20</Option>
            <Option styleText={{textAlign: 'center'}}>25</Option>
            <Option styleText={{textAlign: 'center'}}>50</Option>
          </Select>
        </View>

        <Button
          onPress={this.search.bind(this)} 
          style={styles.button}
        >
          {"Search"}
        </Button>
        
        <OptionList overlayStyles={{backgroundColor:'#ffffffd9'}} ref="OPTIONLIST"/>

      </View>
    )

  }

}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: windowWidth*.70,
    backgroundColor: '#c0cac9',
    margin: 10,
    opacity: .5
  },
  inputZip: {
    height: 40,
    width: windowWidth*.70,
    backgroundColor: '#c0cac9',
    margin: 10,
    textAlign: 'center',
    opacity: .5
  },
  button: {
    width: windowWidth*.70
  },
  center: {
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1  
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    width: windowWidth*.8,
    borderRadius: 10,
    margin: 5
  },
  image: {
    width: windowWidth,
    height: 175,
  },
  thumb: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  test: {
    margin: 10,
    backgroundColor: '#C0FF00'
  }
});


export default Search;