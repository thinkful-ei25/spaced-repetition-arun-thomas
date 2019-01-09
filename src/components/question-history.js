import React from 'react';
import './question-history.css';

export default class QuestionHistory extends React.Component {

    render() {
        const { text, history } = this.props;
        const total = history.correct + history.incorrect;
        const percentage = ((history.correct * 100 / total) || 0).toFixed(2);
        return (
            <div className="questionHistory">
                <div className="question-text">{text}</div>
                <div className="history-score"><b>Score: </b> {history.correct}/{total} ({percentage}%)</div>
            </div>
        );
    }
}