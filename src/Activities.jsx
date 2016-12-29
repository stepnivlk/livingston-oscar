import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {blue300, indigo900} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import Avatar from 'material-ui/Avatar';

import { floatingButton, containerStyle } from './styles';
import AddActivity from './components/AddActivity';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedDay: undefined,
      selectedBlock: undefined,
      selectedActivity: undefined,
    }
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleOpen = (selectedDay, selectedBlock, selectedActivity) => {
    this.setState({open: true, selectedDay, selectedBlock, selectedActivity});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  renderAddActivity(day, block) {
    return (
      <Chip
        backgroundColor={blue300}
        style={this.styles.chip}
        onTouchTap={() => this.handleOpen(day, block)}
      >
        +
      </Chip>
    )
  }

  renderActivities(day, block) {
    const { activities } = this.props;
    return Object.keys(activities).map((a) => {
      const activity = activities[a];
      if ((activity.blocks && activity.days) &&
          (activity.blocks.includes(block) && activity.days.includes(day))) {
        return (
          <Chip
            key={a}
            onTouchTap={() => this.handleOpen(day, block, activity)}
            style={this.styles.chip}
          >
            {activity.name}
          </Chip>
        )
      }
    });
  }

  renderDays() {
    const { days } = this.props;
    return (
      <Table selectable={false}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn></TableHeaderColumn>
            {
              this.props.blocks.map((block) => (
                <TableHeaderColumn>{block}</TableHeaderColumn>
              ))
            }
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {
            Object.keys(this.props.days).map((day) => (
              <TableRow>
                <TableRowColumn>{day}</TableRowColumn>
                {
                  this.props.blocks.map((block) => (
                    <TableRowColumn>{[...this.renderActivities(day, block), this.renderAddActivity(day, block)]}</TableRowColumn>
                  ))
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    );
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title="Activities"
          />
          <CardText>
            {this.renderDays()}
          </CardText>
        </Card>
        <FloatingActionButton style={floatingButton} onTouchTap={this.props.actions.addActivity}>
          <ContentAdd />
        </FloatingActionButton>
        <AddActivity
          open={this.state.open}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          selectedDay={this.state.selectedDay}
          selectedBlock={this.state.selectedBlock}
          selectedActivity={this.state.selectedActivity}
        />
      </div>
    );
  }
}

export default Activities;
