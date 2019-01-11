import React from 'react';
import './question-history.css';

export default class QuestionHistory extends React.Component {

    render() {
        const { text, index } = this.props;
        
        return (
            <div className="question-history">
                <div className="question-text">{index}. {text}</div>
            </div>
        );
    }
}