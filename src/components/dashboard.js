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
        const { feedback, sessionCorrect, sessionIncorrect, currentStreak } = this.props;
        let total = sessionCorrect + sessionIncorrect;
        let percentage = ((sessionCorrect * 100 / total) || 0).toFixed(2);
        return (
            <div className="dashboard">
                <div className='scoreboard'>
                    <span><b>Session Score:</b> {sessionCorrect} / {total}</span> 
                    <span><b>Current Streak:</b> {currentStreak}</span>
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
        sessionIncorrect: state.question.sessionIncorrect,
        currentStreak: state.question.currentStreak,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
