import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

import './answer-form.css';
import Button from './button';
import Input, { THEMES as inputThemes } from './input';
import { required, nonEmpty } from '../validators';
import { postQuestion } from '../actions/question';

export class AnswerForm extends React.Component {
  onSubmit(value) {
    this.props.dispatch(postQuestion(value.useranswer));
  }

  render() {
    return (
      <form
        className="AnswerForm"
        onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}
      >
        <Field
          component={Input}
          theme={inputThemes.ANSWER}
          type="text"
          name="useranswer"
          id="useranswer"
          autoComplete="off"
          label="Answer"
          placeholder="Enter answer"
          unit="ns"
          validate={[required, nonEmpty]}
        />
        <Button
          disabled={this.props.pristine || this.props.submitting}
          className="AnswerForm_submitButton"
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'answer',
  onSubmitFail: (errors, dispatch) => dispatch(focus('answer', 'username')),
})(AnswerForm);
