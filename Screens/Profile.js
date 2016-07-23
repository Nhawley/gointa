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
  AsyncStorage,
  StatusBar
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Button from '../Components/Button';

var moment = require('moment')


class Profile extends Component {

  logout() {
    AsyncStorage.removeItem('STORAGE_KEY');
    alert('You have been logged out.');
    Actions.pop()
  }

  render() {

    return (
      <View style={styles.center} >
      <StatusBar backgroundColor="#4ed7c2" />
        <View style={styles.profilePicContainer}>
          <Image style={styles.image} source={{uri: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13094190_10101052751294856_94502647272426993_n.jpg?oh=4cd32dd8b088a3efd8532ec79b9e188d&oe=581B8774'}}/>
        </View>

        <View style={styles.bio}>
          {/*<MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="book" size={30} color="#e76248" />*/}
          <Text style={{fontFamily: 'Roboto-Thin'}}> I'm a huge nerd and I love playing all kinds of games! Let's play some Pokemon GO together!</Text>
        </View>

        <View style={styles.infoContainer}>
          <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="email" size={30} color="#e76248" />
          <Text style={{fontFamily: 'Roboto-Thin'}}> KJG310@Gmail.com </Text>
        </View>

        {/*<View style={styles.infoContainer}>
          <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="lock-outline" size={30} color="#e76248" />
          <Text style={{fontFamily: 'Roboto-Thin'}}> ********* </Text>
        </View>*/}

        <View style={styles.infoContainer}>
          <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="cake" size={30} color="#e76248" />
          <Text style={{fontFamily: 'Roboto-Thin'}}> 28 </Text>
        </View>

        <View style={styles.infoContainer}>
          <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="pin-drop" size={30} color="#e76248" />
          <Text style={{fontFamily: 'Roboto-Thin'}}> 07920 </Text>
        </View>

        <View style={styles.infoContainer}>
          <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="group" size={30} color="#e76248" />
          <Text style={{fontFamily: 'Roboto-Thin'}}> 10 Friends </Text>
        </View>

        {/*<Text>password</Text>
        <Text>bio</Text>
        <Text>age</Text>
        <Text>homezip</Text>
        <Text>workzip</Text>
        <Text>friends</Text>*/}

        <Button 
          onPress={this.logout.bind(this)}
          style={{width: windowWidth*.5}}
        >
          {"Log Out"}
        </Button>

      </View>
    )

  }

}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  profilePicContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 20,
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
  bio: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    // height: 50,
    backgroundColor: 'white',
    width: windowWidth*.8,
    borderRadius: 10,
    margin: 10
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "lightgray",
    color: '#4ed7c2',
    fontSize: 16,
    padding: 5
  },
  center: {
    justifyContent: 'center', 
    alignItems: 'center', 
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
    width: windowWidth*.35,
    height: windowWidth*.35,
    borderRadius: 150
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


export default Profile;

