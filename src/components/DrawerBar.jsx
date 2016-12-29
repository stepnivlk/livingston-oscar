import React, { Component } from 'react';
import { Link } from 'react-router';

// Material UI - components
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// Material UI - icons
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import School from 'material-ui/svg-icons/social/school';
import NotificationsActive from 'material-ui/svg-icons/social/notifications-active';
import People from 'material-ui/svg-icons/social/people';
import EventNote from 'material-ui/svg-icons/notification/event-note';
import AccountBalance from 'material-ui/svg-icons/action/account-balance';

// Styles
import { forceNavDown, linkStyle } from '../styles'

export default class DrawerBar extends Component {
  render() {
    return (
      <Drawer width={60} open={this.props.open} containerStyle={forceNavDown}>
        <Link to={'/'} style={linkStyle}>
          <MenuItem leftIcon={<Dashboard />}>
            &nbsp;
          </MenuItem>
        </Link>
        <Link to={'/activities'} style={linkStyle}>
          <MenuItem leftIcon={<School />}>
            &nbsp;
          </MenuItem>
        </Link>
        <Link to={'/courses'} style={linkStyle}>
          <MenuItem leftIcon={<NotificationsActive />}>
            &nbsp;
          </MenuItem>
        </Link>
        <Link to={'/courses'} style={linkStyle}>
          <MenuItem leftIcon={<People />}>
            &nbsp;
          </MenuItem>
        </Link>
        <Link to={'/courses'} style={linkStyle}>
          <MenuItem leftIcon={<EventNote />}>
            &nbsp;
          </MenuItem>
        </Link>
        <Link to={'/organisation'} style={linkStyle}>
          <MenuItem leftIcon={<AccountBalance />}>
            &nbsp;
          </MenuItem>
        </Link>
      </Drawer>
    );
  }
}
