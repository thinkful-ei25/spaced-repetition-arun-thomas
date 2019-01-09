import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';

import Button from './button';
import Input from './input';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators'; 
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, firstName, lastName } = values;
    const user = { username, password, firstName, lastName };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <div className="RegistrationForm">
        <form
          className="RegistrationForm_form"
          onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}
        >
          <Field component={Input} type="text" name="firstName" label="First name" />
          <Field component={Input} type="text" name="lastName" label="Last name" />
          <Field
            component={Input}
            type="text"
            name="username"
            label="Username"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <Field
            component={Input}
            type="password"
            name="password"
            label="Password"
            validate={[required, passwordLength, isTrimmed]}
          />
          <Field
            component={Input}
            type="password"
            name="passwordConfirm"
            label="Confirm password"
            validate={[required, nonEmpty, matchesPassword]}
          />

          <Button type="submit" disabled={this.props.pristine || this.props.submitting}>
            Register
          </Button>
        </form>
        <Link to="/">Login</Link>
      </div>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0])),
})(RegistrationForm);
