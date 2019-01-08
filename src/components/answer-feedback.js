import React from 'react';
import { connect } from 'react-redux';

import './answer-feedback.css';
import { fetchQuestion } from '../actions/question';

export function AnswerFeedback({ feedback, question, fetchQuestion }) {
  if (!feedback) {
    return null;
  }

  return (
    <div className="answer-feedback">
      <h2>{feedback.correct ? 'Correct!' : 'Incorrect'}</h2>
      {!feedback.correct && (
        <div className="correct-answer">
          <p>The correct answer was: {question.answer}ns</p>
        </div>
      )}

      <button type="button" onClick={() => fetchQuestion()}>
        Next question
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  feedback: state.question.feedback,
  question: state.question.question,
});

const mapDispatchToProps = {
  fetchQuestion
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerFeedback);
