import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import NavBar from './components/NavBar';
import DrawerBar from './components/DrawerBar';
import logo from './logo.svg';
import './App.css';
import { floatingButton, containerStyle } from './styles';

class App extends Component {
  render() {
    console.log(this.props)
    const { drawerOpen } = this.props.ui;
    return (
      <div>
        <Card>
          <CardHeader
            title="App"
          />
          <CardText>
            <p className="App-intro">
              {JSON.stringify(this.props)}
            </p>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default App;
