import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { LoginButton, AccessToken }  from 'react-native-fbsdk';
import { Router, Scene } from 'react-native-router-flux';

import Home from './src/components/Home';
import Search from './src/components/Search';
import Login from './src/components/Login';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
            tabBarPosition='bottom'
          >    
            <Scene
              key="home"
              component={Home}
              title="Home"
            />
            <Scene
              key="search"
              component={Search}
              title="Search"
            />        
            <Scene
              key="login"
              component={Login}
              title="Login"
            />       
        </Scene>
      </Scene>
    </Router>
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
});
