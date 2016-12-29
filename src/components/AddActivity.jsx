import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddActivity extends Component {
  selectedActivity = () => (
    this.props.selectedActivity ? this.props.selectedActivity.name : null
  );

  title = () => (
    this.selectedActivity() ?
      `Edit Activity - ${this.selectedActivity()}` :
      `Add Activity: ${this.props.selectedDay} - ${this.props.selectedBlock}`
  );

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.handleClose}
      />,
    ];

    return (
      <Dialog
        title={this.title()}
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose}
      >
        <TextField
          hintText="enter name"
          fullWidth={true}
          value={this.selectedActivity()}
        />
      </Dialog>
    );
  }
}

export default AddActivity;
