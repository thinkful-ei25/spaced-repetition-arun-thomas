import React from 'react';
import DisplayTime from './display-time';
import './session-data.css';
import SessionChart from './session-chart';

export default class SessionData extends React.Component {
  render() {
    const { correct, incorrect, createdAt, updatedAt } = this.props;
    
    return(
      <div className="session-data">
        <DisplayTime className="session-time" createdAt={createdAt} updatedAt={updatedAt}/>
        <SessionChart correct={correct} incorrect={incorrect}/>
      </div>
    );
  }
  
}