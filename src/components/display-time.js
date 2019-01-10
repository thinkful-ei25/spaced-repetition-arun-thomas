import React from 'react';
let moment = require('moment');

export default class DisplayTime extends React.Component {
  
  render() {
    const { createdAt, updatedAt } = this.props;
    let startTime = moment(createdAt).format('llll');
    let endTime = moment(updatedAt).format('llll');
    return(
      <div>
        <div><b>Session Start:</b> {startTime}</div>
        <div><b>Session End:</b> {endTime}</div>
      </div>
    );
  }
}