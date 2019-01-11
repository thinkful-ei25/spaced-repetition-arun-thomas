import React from 'react';
import { connect } from 'react-redux';

import './answer-feedback.css';
import { fetchQuestion } from '../actions/question';

export function AnswerFeedback({ feedback, question, fetchQuestion, previousAnswer, history }) {
  if (!feedback) {
    return null;
  }

  let total = history.correct + history.incorrect;
  let percentage = ((history.correct * 100) / total).toFixed(2);

  return (
    <section className="answer-feedback">
      <div
        className={`previous-response previous-response--${
          feedback.correct ? 'correct' : 'incorrect'
        }`}
      >
        You responded <strong>{previousAnswer}</strong> ns
      </div>
      <h2>{feedback.correct ? 'Correct!' : 'Incorrect'}</h2>
      {!feedback.correct && (
        <div className="correct-answer">
          <p>The correct answer was: <strong>{question.answer}</strong> ns</p>
        </div>
      )}
      <div className="history-feedback">
          <p>You have answered this question correctly {history.correct} out of {total} times ({percentage}%).</p>
      </div>
      <button type="button" onClick={() => fetchQuestion()}>
        Next question
      </button>
    </section>
  );
}

const mapStateToProps = (state) => ({
  feedback: state.question.feedback,
  question: state.question.question,
  previousAnswer: state.question.previousAnswer,
  history: state.question.feedback.history
});

const mapDispatchToProps = {
  fetchQuestion,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerFeedback);
