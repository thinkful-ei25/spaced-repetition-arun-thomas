import React from 'react';
let moment = require('moment');

export default class DisplayTime extends React.Component {
  
  render() {
    const { createdAt, updatedAt } = this.props;
    let startTime = moment(createdAt).format('llll');
    let endTime = moment(updatedAt).format('llll');
    let elapsed = moment(endTime).diff(startTime, 'minutes')
    return(
      <div>
        <h3>{startTime}</h3>
        <div>Session Length: {elapsed} minutes</div>
      </div>
    );
  }
}