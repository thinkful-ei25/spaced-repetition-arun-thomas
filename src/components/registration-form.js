import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';

import './registration-form.css';
import Button, { THEMES as buttonThemes } from './button';
import Input from './input';
import statelessWrapper from './stateless-wrapper';
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
      <form
        className="RegistrationForm"
        onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}
        id="registration-form"
      >
        <legend className="RegistrationForm_legend">Register as a new user</legend>
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

        <div className="RegistrationForm_controls">
          <Button
            theme={buttonThemes.SUCCESS}
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Register
          </Button>
          <Link to="/">Login</Link>
        </div>
      </form>
    );
  }
}

/*
 * It is necessary to wrap our reduxForm component because it uses forwardRefs *
 * which are not supported by the current verison of React Router.
 * See: https://github.com/erikras/redux-form/issues/4318
 */
export default statelessWrapper(
  reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
      dispatch(focus('registration', Object.keys(errors)[0])),
  })(RegistrationForm)
);
