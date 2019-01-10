import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import './history.css';
import { Link } from 'react-router-dom';
import { fetchSessionHistory } from '../actions/session-history';
import SessionData from './session-data';


export class SessionHistory extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchSessionHistory());
    }
    
    render() {
      if (!this.props.sessions) {
        return null;
    }
    const sessionHistory = this.props.sessions.map(session => {
        return <SessionData key={session.id} {...session} />
    })
        return (
            <div className="session-history">
                <h2>{this.props.username}'s Session History</h2>
                <div>
                  {sessionHistory}
                </div>
                <Link to='/dashboard'>Return to Questions</Link>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        sessions: state.session.sessions,
    };
};

export default requiresLogin()(connect(mapStateToProps)(SessionHistory));