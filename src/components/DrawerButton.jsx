import React from 'react';

// Material UI
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

// Styles
import { iconStyle } from '../styles'

export default ({toggle, onDrawerClick}) => (
  <IconButton
    iconStyle={iconStyle}
    onClick={onDrawerClick}
  >
    {toggle ?
    <NavigationClose /> :
    <NavigationMenu />}
  </IconButton>
);
