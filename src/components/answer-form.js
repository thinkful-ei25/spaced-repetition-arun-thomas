import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

import './answer-form.css';
import Button from './button';
import Input from './input';
import { required, nonEmpty } from '../validators';
import { postQuestion } from '../actions/question';

export class AnswerForm extends React.Component {
  onSubmit(value) {
    console.log(value.useranswer)
    this.props.dispatch(postQuestion(value.useranswer));
  }

  render() {
    return (
      <form
        className='answer-form'
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
      )}>
        <label htmlFor="useranswer"><h2>Answer:</h2></label>
        <Field
          component={Input}
          type="text"
          name="useranswer"
          id="useranswer"
          autocomplete="off"
          validate={[required, nonEmpty]}
        />
        <Button disabled={this.props.pristine || this.props.submitting}>
          Submit
        </Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'answer',
  onSubmitFail: (errors, dispatch) => dispatch(focus('answer', 'username'))
})(AnswerForm);
