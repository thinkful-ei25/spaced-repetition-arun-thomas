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
        const { feedback } = this.props;
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className='scoreboard'>
                    <span><b>Session Score:</b> 0</span> 
                    <span><b>Current Streak:</b> 0</span>
                    <span><b>Percent Correct:</b> 0%</span>
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
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
