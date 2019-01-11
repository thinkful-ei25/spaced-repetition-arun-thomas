import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';

import './answer-feedback.css';
import Button from './button';
import { fetchQuestion } from '../actions/question';

export function AnswerFeedback({
  feedback,
  question,
  fetchQuestion,
  previousAnswer,
  history,
}) {
  if (!feedback) {
    return null;
  }

  let total = history.correct + history.incorrect;
  let percentage = ((history.correct * 100) / total).toFixed(2);

  return (
    <section className="AnswerFeedback">
      <div
        className={classNames('AnswerFeedback_previous', {
          'AnswerFeedback_previous--incorrect': !feedback.correct,
        })}
      >
        You responded {previousAnswer} ns
      </div>
      <h2 className="AnswerFeedback_response">
        {feedback.correct ? 'Correct!' : 'Incorrect'}
      </h2>
      {!feedback.correct && (
        <div className="correct-answer">
          <p>
            The correct answer was:{' '}
            <span className="AnswerFeedback_inline--strong">{question.answer}</span> ns.
          </p>
        </div>
      )}
      <div className="AnswerFeedback_history">
        <p>
          You have answered this question correctly {history.correct} out of {total}{' '}
          times ({percentage}%).
        </p>
      </div>
      <Button type="button" onClick={() => fetchQuestion()}>
        Next question
      </Button>
    </section>
  );
}

const mapStateToProps = (state) => ({
  feedback: state.question.feedback,
  question: state.question.question,
  previousAnswer: state.question.previousAnswer,
  history: state.question.feedback.history,
});

const mapDispatchToProps = {
  fetchQuestion,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerFeedback);
