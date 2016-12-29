import React, { Component } from 'react';
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';

const config = {
  apiKey: "AIzaSyDRFPPv42hErqOBjF_n32jnL24_zwrzzzo",
  authDomain: "livingston-oscar.firebaseapp.com",
  databaseURL: "https://livingston-oscar.firebaseio.com",
  storageBucket: "livingston-oscar.appspot.com",
  messagingSenderId: "871386101525"
};

injectTapEventPlugin();

const fb = firebase
  .initializeApp(config)
  .database()
  .ref();

const toggleDrawer = open => (
  fb.child('ui').update({ drawerOpen: !open }, response => response)
);

const actions = {
  toggleDrawer,
}

class ConnectedApp extends Component {
  render() {
    const { drawerOpen } = this.props.ui;
    return (
      <App {...actions} {...store} />
    );
  }
}

export default App;
