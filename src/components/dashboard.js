import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchQuestion } from '../actions/question';
import AnswerFeedback from './answer-feedback';
import AnswerForm from './answer-form';
import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestion());
    }

    onSubmit(value) {
        console.log('user answer', value);
    }

    render() {
        const { feedback, sessionCorrect, sessionIncorrect } = this.props;
        let percentage = (sessionCorrect * 100 / (sessionCorrect + sessionIncorrect)).toFixed(2);
        if (isNaN(percentage) === true) {
            percentage = 0;
        }
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className='scoreboard'>
                    <span><b>Session Score:</b> {sessionCorrect}</span> 
                    <span><b>Current Streak:</b> 0</span>
                    <span><b>Percent Correct:</b> {percentage}%</span>
                </div>
                <div>
                    <h2>Question:</h2>
                    <p>{this.props.question.text}</p>
                </div>
                {feedback ? <AnswerFeedback /> : <AnswerForm />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        question: state.question.question,
        feedback: state.question.feedback,
        sessionCorrect: state.question.sessionCorrect,
        sessionIncorrect: state.question.sessionIncorrect
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
