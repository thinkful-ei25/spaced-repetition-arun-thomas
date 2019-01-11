import React from 'react';
import './display-time.css';
let moment = require('moment');

export default class DisplayTime extends React.Component {
  
  render() {
    const { createdAt, updatedAt } = this.props;
    const startMoment = moment(createdAt);
    const endMoment = moment(updatedAt);
    let startTime = startMoment.format('llll');
    let elapsed = endMoment.diff(startMoment, 'minutes');
    
    return(
      <div>
        <div className="session-start-time">{startTime}</div>
        <div>Session Length: {elapsed} minutes</div>
      </div>
    );
  }
}