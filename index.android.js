import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  Navigator,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import PageOne from './PageOne.js';

import SignUp from './Screens/SignUp'
import LogIn from './Screens/LogIn'
import LoggedIn from './Screens/LoggedIn'
import SearchResults from './Screens/SearchResults'
import Result from './Screens/Result'
import CreateEvent from './Screens/CreateEvent'
import UpdateUser from './Screens/UpdateUser'
import UserList from './Screens/UserList'
import Search from './Screens/Search'
import Profile from './Screens/Profile'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class TabIcon extends React.Component {
    render(){
        return (
            <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="search" size={30} color="white" />
        );
    }
}

class TabIcon2 extends React.Component {
    render(){
        return (
            <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="add-circle" size={30} color="white" />
        );
    }
}

class TabIcon3 extends React.Component {
    render(){
        return (
            <MaterialIcons style={{marginRight: 20, marginLeft: 20}} name="account-circle" size={30} color="white" />
        );
    }
}

class FinalProject extends Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar} backButtonTextStyle={styles.backButton}>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="Welcome!" />
          <Scene key="login" direction="vertical" component={LogIn} initial={true} title="Log In!" />
          <Scene key="signup" component={SignUp} title="Sign Up!" />
          <Scene key="welcome" component={LoggedIn} title="Welcome!" />

          <Scene tabBarStyle={{backgroundColor:'#4ed7c2'}} key="tabbed" tabs={true}>
            <Scene icon={TabIcon} sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, paddingBottom: 50}} rightTitle="Right" key="search" component={Search} title="Search!" />
            <Scene icon={TabIcon2} sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, paddingBottom: 50}} key="createevent" component={CreateEvent} title="Create Event!" />
            <Scene icon={TabIcon3} sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, paddingBottom: 50}} key="profile" component={Profile} title="Profile!" />
          </Scene>

          <Scene sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight}} key="searchresults" component={SearchResults} title="Search Results!" />
          <Scene sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight}} key="eventpage" component={Result} title="Event Page!" />
          {/*<Scene sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight}} key="createevent" component={CreateEvent} title="Create Event!" />*/}
          <Scene key="updateuser" component={UpdateUser} title="Update User" />
          <Scene sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight}} key="userlist" component={UserList} title="User List" />
          {/*<Scene sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight}} key="search" component={Search} title="Search!" />*/}
          {/*<Scene sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight}} key="profile" component={Profile} title="Profile!" />*/}
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    borderBottomWidth: 0
  },
  backButton: {
    color: '#c0cac9'
  }
});


AppRegistry.registerComponent('FinalProject', () => FinalProject);