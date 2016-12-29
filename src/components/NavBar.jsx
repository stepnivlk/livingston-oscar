import React from 'react';
import AppBar from 'material-ui/AppBar';
import DrawerButton from './DrawerButton';

const NavBar = (props) => (
  <AppBar
    title="livingston"
    iconElementLeft={
      <DrawerButton
        toggle={props.open}
        onDrawerClick={() => props.toggleDrawer(props.open)}
      />
    }
  />
);

export default NavBar;
