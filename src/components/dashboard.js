import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import { fetchQuestion } from '../actions/question';
import AnswerForm from './answer-form';
import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(fetchQuestion());
    }

    onSubmit(value) {
        console.log('user answer', value);
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div>
                    <h2>Question:</h2>
                    <p>{this.props.question.text}</p>
                </div>
                <AnswerForm />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        question: state.question.question
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
