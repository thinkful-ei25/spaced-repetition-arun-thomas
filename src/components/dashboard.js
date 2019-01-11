import React from 'react';
import {connect} from 'react-redux';

import Card from './card'
import requiresLogin from './requires-login';
import { fetchQuestion, fetchSessionId } from '../actions/question';
import AnswerFeedback from './answer-feedback';
import AnswerForm from './answer-form';
import ProgressChart from './progress-chart';
import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestion());
        if (!this.props.session) {
            this.props.dispatch(fetchSessionId());
        } else {
            console.log(this.props.session.id)
        }
    }

    render() {
        const { feedback, sessionCorrect, sessionIncorrect, currentStreak } = this.props;
        return (
            <main className="Dashboard">
                <h2 className="Dashboard_title">Learn Latency Numbers</h2>
                <div className="Dashboard_chart_title">Session Progress</div>
                <section className='Dashboard_scoreboard'>
                    <ProgressChart
                        correct={sessionCorrect}
                        incorrect={sessionIncorrect}
                        className="Dashboard_scoreChart"
                    />
                    {currentStreak > 2 && (
                        <p className="Dashboard_streak">
                            You're on a roll! You've gotten <span className="Dashboard_streakInfo">{currentStreak}</span> correct in a row
                        </p>
                    )}
                </section>
                <Card element="section">
                    <header className="Dashboard_question">
                        <h2>{this.props.question.text}</h2>
                    </header>
                    {feedback ? <AnswerFeedback /> : <AnswerForm />}
                </Card>
            </main>
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
        session: state.question.currentSession
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
