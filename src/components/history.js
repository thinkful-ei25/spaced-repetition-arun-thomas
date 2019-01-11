import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchQuestionHistory } from '../actions/question';
import QuestionHistory from './question-history';
import './history.css';
import { Link } from 'react-router-dom';
import HistoryStackedBarChart from './history-stacked-bar-chart';

export class History extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestionHistory());
    }

    render() {
        if (!this.props.questionHistory) {
            return null;
        }
        let questionCounter = 0;
        const questionHistory = this.props.questionHistory.map(question => {
            questionCounter += 1;
            return <QuestionHistory key={question.id} {...question} index={questionCounter}/>
        })
        return (
            <div className="history">
                <h2 className="history-title">{this.props.username}'s Question History</h2>
                <div className="history-chart-title">Spaced Latency Question Accuracy Chart</div>
                <HistoryStackedBarChart questionHistory={this.props.questionHistory}/>
                <div className="history-question-container">
                    <div className="question-list-title">
                        Question List:
                    </div>
                    {questionHistory}
                </div>
                <div className="history-link-to-dashboard">
                    <Link to='/dashboard'>Return to Questions</Link>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        questionHistory: state.question.questionHistory
    };
};

export default requiresLogin()(connect(mapStateToProps)(History));
