import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchQuestionHistory } from '../actions/question';
import QuestionHistory from './question-history';
import './history.css';
import { Link } from 'react-router-dom';

export class History extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchQuestionHistory());
    }
    
    render() {
      if(!this.props.questionHistory) {
        return null;
      }
      const questionHistory = this.props.questionHistory.map(question => {
        return <QuestionHistory key={question.id} {...question}/>
      })
        return (
            <div className="history">
                <h2>{this.props.username}'s Question History</h2>
                <div>
                  {questionHistory}
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
        questionHistory: state.question.questionHistory
    };
};

export default requiresLogin()(connect(mapStateToProps)(History));
