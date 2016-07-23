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
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import UserList from './UserList.js'

import FavoriteButton from '../Components/FavoriteButton.js'
import GoingButton from '../Components/GoingButton.js'

var moment = require('moment')


class Result extends Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      image: "",
      loaded: false
    };
  }

  fetchData(eventID) {
    var REQUEST_URL = 'http://ec2-52-90-83-128.compute-1.amazonaws.com/events/' + eventID;
    
    fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData)
          // console.log(responseData)

          this.setState({
            image: responseData[0].image,
            name: responseData[0].name,
            // location_name: responseData.location_name,
            location_name: "Placeholder",
            date_time: moment(responseData[0].date_time).format("MMMM Do"),
            description: responseData[0].description,
            // time: responseData.time,
            time: moment(responseData[0].date_time).format("h:mm A"),
            attendees: responseData[0].attendees,
            // going: responseData.going,
            // test: responseData.test,
            // attendees: responseData.attendees,
            loaded: true,
            dataSource: this.state.dataSource.cloneWithRows(responseData[0].attendees),
            numberGoing: responseData[0].attendees.length,
          });
        })
        .done();
  }

  renderRow(rowData, sectionID, rowID) {

      if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback>
          <View>
            <View style={styles.rowContainer}>
              <Image style={styles.thumb} source={{ uri: rowData.picture }} />
              <View style={styles.textContainer}>
                <Text>{rowData.username}</Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      )} else {
      return (
        <TouchableOpacity>
          <View>
            <View style={styles.rowContainer}>
              <Image style={styles.thumb} source={{ uri: rowData.picture }} />
              <View style={styles.textContainer}>
                <Text>{rowData.username}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
  }

  componentDidMount() {
    // this.stopPostListener = DataStore.listen(this.onListChange.bind(this));
    // Actions.loadPosts();
    // Alert.alert(this.props)
    this.fetchData(this.props.eventID);
  }

  rowPressed(UserData) {
    Actions.userlist({UserData: UserData})
  }

  render() {

    if (!this.state.loaded) {
      return (
        <View>
          <Image style={styles.image} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Donald_Trump_August_19,_2015_(cropped).jpg/220px-Donald_Trump_August_19,_2015_(cropped).jpg" }} />
        </View>
      )
    }
    if (Platform.OS === 'android') {
      return (
          <ScrollView style={{backgroundColor:'#E9E9EF'}}>
            <Image style={styles.image} source={{ uri: this.state.image }} />

            <View style={{flexDirection: 'column', justifyContent:'center', alignItems:'center'}} >
              <Text style={{fontFamily: 'Roboto-Thin', fontSize:25, margin: 15}} > {this.state.name} </Text>
            </View>

            <View style={styles.center}>

              <View style={styles.infoContainer}>
                <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="event" size={30} color="#e76248" />
                <Text style={{fontFamily: 'Roboto-Thin'}}> {this.state.date_time} </Text>
              </View>

              <View style={styles.infoContainer}>
                <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="access-time" size={30} color="#e76248" />
                <Text style={{fontFamily: 'Roboto-Thin'}}> {this.state.time} </Text>
              </View>

              <View style={styles.infoContainer}>
                <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="place" size={30} color="#e76248" />
                <Text style={{fontFamily: 'Roboto-Thin'}}> {this.state.location_name} </Text>
              </View>

              <TouchableNativeFeedback onPress={() => this.rowPressed(this.state.attendees)}>
                <View style={styles.infoContainer}>
                  <MaterialIcons  style={{marginRight: 20, marginLeft: 20}} name="face" size={30} color="#e76248" />
                  <Text style={{fontFamily: 'Roboto-Thin'}}> {this.state.numberGoing} People Going</Text>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="keyboard-arrow-right" size={30} color="#e76248" />
                  </View>
                </View>
              </TouchableNativeFeedback>

            </View>

            <Text>
              {this.props._id}
            </Text>

            <View style={styles.center}>
              <GoingButton />
              <FavoriteButton />
              {/*<MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="favorite-border" size={30} color="#e76248" />*/}
            </View>
          </ScrollView>
      )} else {
      return (
          <ScrollView style={{backgroundColor:'#E9E9EF'}}>
            <Image style={styles.image} source={{ uri: this.state.image }} />

            <View style={{flexDirection: 'column', justifyContent:'center', alignItems:'center'}} >
              <Text style={{fontFamily: 'Roboto-Thin', fontSize:25, margin: 15}} > {this.state.name} </Text>
            </View>

            <View style={styles.center}>

              <View style={styles.infoContainer}>
                <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="event" size={30} color="#e76248" />
                <Text style={{fontFamily: 'Roboto-Thin'}}> {this.state.date_time} </Text>
              </View>

              <View style={styles.infoContainer}>
                <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="access-time" size={30} color="#e76248" />
                <Text style={{fontFamily: 'Roboto-Thin'}}> {this.state.time} </Text>
              </View>

              <View style={styles.infoContainer}>
                <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="place" size={30} color="#e76248" />
                <Text style={{fontFamily: 'Roboto-Thin'}}> {this.state.location_name} </Text>
              </View>

              <TouchableOpacity onPress={() => this.rowPressed(this.state.attendees)}>
                <View style={styles.infoContainer}>
                  <MaterialIcons  style={{marginRight: 20, marginLeft: 20}} name="face" size={30} color="#e76248" />
                  <Text style={{fontFamily: 'Roboto-Thin'}}> {this.state.numberGoing} People Going</Text>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="keyboard-arrow-right" size={30} color="#e76248" />
                  </View>
                </View>
              </TouchableOpacity>

            </View>

            <Text>
              {this.props._id}
            </Text>

            <View style={styles.center}>
              <GoingButton />
              <FavoriteButton />
              {/*<MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="favorite-border" size={30} color="#e76248" />*/}
            </View>
          </ScrollView>
      )}
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
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


export default Result;