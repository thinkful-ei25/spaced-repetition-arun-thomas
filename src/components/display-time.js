import React from 'react';
import './display-time.css';
let moment = require('moment');

export default class DisplayTime extends React.Component {
  
  render() {
    const { createdAt, updatedAt } = this.props;
    let startTime = moment(createdAt).format('llll');
    let endTime = moment(updatedAt).format('llll');
    let elapsed = moment(endTime).diff(startTime, 'minutes')
    return(
      <div>
        <div className="session-start-time">{startTime}</div>
        <div>Session Length: {elapsed} minutes</div>
      </div>
    );
  }
}