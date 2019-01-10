import React from 'react';
import DisplayTime from './display-time';
import './session-data.css';

export default class SessionData extends React.Component {
  render() {
    const { correct, incorrect, createdAt, updatedAt } = this.props;
    let total = correct + incorrect;
    const percentage = ((correct * 100 / total) || 0).toFixed(2);
    return(
      <div className="session-data">
        <DisplayTime className='session-time' createdAt={createdAt} updatedAt={updatedAt}/>
        <div className='session-correct'><b>Correct:</b> {correct}</div>
        <div><b>Incorrect:</b> {incorrect}</div>
        <div><b>Total Questions:</b> {total}</div>
        <div><b>Percentage:</b> {percentage}%</div>
      </div>
    );
  }
  
}