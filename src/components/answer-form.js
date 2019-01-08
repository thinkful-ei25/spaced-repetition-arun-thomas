import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
import './answer-form.css';

export class AnswerForm extends React.Component {
  onSubmit(value) {
    console.log('user answer', value);
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
        <button disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'answer',
  onSubmitFail: (errors, dispatch) => dispatch(focus('answer', 'username'))
})(AnswerForm);
