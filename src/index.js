import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase';

import App from './App';
import Activities from './Activities';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import NavBar from './components/NavBar';
import DrawerBar from './components/DrawerBar';
import { floatingButton, containerStyle } from './styles';

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

const addActivity = data => fb.child('days').push({name: 'test'}, response => response);

const toggleDrawer = open => {
  console.log('test')
  return fb.child('ui').update({ drawerOpen: !open }, response => response)
};

const actions = {
  toggleDrawer,
  addActivity,
}


fb.on('value', snapshot => {
  const store = snapshot.val();
  const { drawerOpen } = store.ui;
  ReactDOM.render(
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <NavBar open={drawerOpen} toggleDrawer={toggleDrawer} />
          <DrawerBar open={drawerOpen} />
          <div className='container' style={containerStyle}>
            <Match exactly pattern="/" component={() => (<App {...store} />)} />
            <Match pattern="/activities" component={() => (<Activities actions={actions} blocks={store.blocks} days={store.days} activities={store.activities} />)} />
          </div>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('root')
  );
})
